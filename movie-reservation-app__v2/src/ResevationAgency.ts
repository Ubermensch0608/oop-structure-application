import Customer from "./Customer";
import Money from "./Money";
import Reservation from "./Reservation";
import Screening from "./Screening";
import DiscountCondition, {
  DiscountConditionType,
} from "./condition/DiscountCondition";

class ReservationAgency {
  public reserve(
    screening: Screening,
    customer: Customer,
    audienceCount: number
  ) {
    const movie = screening.getMovie();

    let discountable = false;

    for (const condition of movie.getDiscountConditions()) {
      if (condition.getType() === DiscountConditionType.PERIOD) {
        discountable =
          screening.getWhenScreened().getDay() === condition.getDayOfWeek() &&
          condition.getStartTime() <=
            new Date(screening.getWhenScreened().toLocaleString()) &&
          condition.getEndTime() >=
            new Date(screening.getWhenScreened().toLocaleString());
      } else {
        discountable = condition.getSequence() === screening.getSequence();
      }

      if (discountable) {
        break;
      }
    }

    let fee: Money;
    if (discountable) {
      let discountAmount = Money.ZERO;
      switch (movie.getMovieType()) {
        case "AMOUNT_DISCOUNT":
          discountAmount = movie.getDiscountAmount();
          break;
        case "PERCENT_DISCOUNT":
          discountAmount = movie.getFee().times(movie.getDiscountPercent());
          break;
        case "NONE_DISCOUNT":
          discountAmount = Money.ZERO;
          break;
      }

      fee = movie.getFee().minus(discountAmount);
    } else {
      fee = movie.getFee();
    }

    return new Reservation(customer, screening, fee, audienceCount);
  }
}

export default ReservationAgency;
