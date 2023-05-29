import Customer from "./Customer";
import Money from "./Money";
import Reservation from "./Reservation";
import Screening from "./Screening";
import DiscountCondition from "./condition/DiscountCondition";

import { DiscountConditionType } from "./condition/DiscountCondition";

class ReservationAgency {
  public reserve(
    screening: Screening,
    customer: Customer,
    audienceCount: number
  ) {
    let discountable = false;

    const fee = this.calculateFee(screening, discountable, audienceCount);
  }

  private calculateFee(
    screening: Screening,
    discountable: boolean,
    audienceCount: number
  ) {
    if (discountable) {
      return screening.getMovie().getFee();
    }
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
