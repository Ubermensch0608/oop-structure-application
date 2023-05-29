import Customer from "./Customer";
import Money from "./Money";
import Reservation from "./Reservation";
import Screening from "./Screening";
import Movie from "./amount/Movie";
import DiscountCondition from "./condition/DiscountCondition";

import { DiscountConditionType } from "./condition/DiscountCondition";

class ReservationAgency {
  public reserve(
    screening: Screening,
    customer: Customer,
    audienceCount: number
  ) {
    const fee = this.calculateFee(audienceCount);
    return this.createReservation(customer, screening, fee, audienceCount);
  }

  private checkDiscountable(screening: Screening) {
    return !!screening
      .getMovie()
      .getDiscountConditions()
      .find((condition) => condition.isDiscountable(screening));
  }

  private isDiscountable(condition: DiscountCondition, screening: Screening) {
    if (condition.getType() === "PERIOD") {
      return this.isSatisfiedByPeriod(condition, screening);
    }

    return this.isSatisfiedBySequence(condition, screening);
  }

  private isSatisfiedByPeriod(
    condition: DiscountCondition,
    screening: Screening
  ) {
    return (
      screening.getWhenScreened().getDay() === condition.getDayOfWeek() &&
      condition.getStartTime() <=
        new Date(screening.getWhenScreened().toLocaleString()) &&
      condition.getEndTime() >=
        new Date(screening.getWhenScreened().toLocaleString())
    );
  }

  private isSatisfiedBySequence(
    condition: DiscountCondition,
    screening: Screening
  ) {
    return condition.getSequence() === screening.getSequence();
  }

  private calculateFee(
    screening: Screening,
    discountable: boolean,
    audienceCount: number
  ) {
    if (discountable) {
      return screening
        .getMovie()
        .getFee()
        .minus(calculateDiscountedFee(screening.getMovie()))
        .times(audienceCount);
    }

    return screening.getMovie().getFee().times(audienceCount);
  }

  private calculateDiscountedFee(movie: Movie) {
    switch (movie.getMovieType()) {
      case "AMOUNT_DISCOUNT":
        return this.calculateAmountDiscountedFee(movie);
      case "PERCENT_DISCOUNT":
        return this.calculatePercentDiscountedFee(movie);
      case "NONE_DISCOUNT":
        return this.calculateNoneDiscountedFee(movie);
    }

    throw new Error("예외 케이스");
  }

  private calculateAmountDiscountedFee(movie: Movie) {
    return movie.getDiscountAmount();
  }

  private calculatePercentDiscountedFee(movie: Movie) {
    return movie.getFee().times(movie.getDiscountPercent());
  }

  private calculateNoneDiscountedFee(movie: Movie) {
    return Money.ZERO;
  }

  private createReservation(
    screening: Screening,
    customer: Customer,
    audienceCount: number,
    fee: Money
  ) {
    return new Reservation(customer, screening, fee, audienceCount);
  }
  //   const movie = screening.getMovie();

  //   for (const condition of movie.getDiscountConditions()) {
  //     if (condition.getType() === "PERIOD") {
  //       discountable =
  //         screening.getWhenScreened().getDay() === condition.getDayOfWeek() &&
  //         condition.getStartTime() <=
  //           new Date(screening.getWhenScreened().toLocaleString()) &&
  //         condition.getEndTime() >=
  //           new Date(screening.getWhenScreened().toLocaleString());
  //     } else {
  //       discountable = condition.getSequence() === screening.getSequence();
  //     }

  //     if (discountable) {
  //       break;
  //     }
  //   }

  //   let fee: Money;
  //   if (discountable) {
  //     let discountAmount = Money.ZERO;
  //     switch (movie.getMovieType()) {
  //       case "AMOUNT_DISCOUNT":
  //         discountAmount = movie.getDiscountAmount();
  //         break;
  //       case "PERCENT_DISCOUNT":
  //         discountAmount = movie.getFee().times(movie.getDiscountPercent());
  //         break;
  //       case "NONE_DISCOUNT":
  //         discountAmount = Money.ZERO;
  //         break;
  //     }

  //     fee = movie.getFee().minus(discountAmount);
  //   } else {
  //     fee = movie.getFee();
  //   }

  //   return new Reservation(customer, screening, fee, audienceCount);
  // }
}

export default ReservationAgency;
