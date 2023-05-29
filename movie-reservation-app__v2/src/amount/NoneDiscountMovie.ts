import Money from "../Money";
import Movie from "./Movie";

class NoneDiscountMovie extends Movie {
  constructor(title: string, runningTime: string, fee: Money) {
    super(title, runningTime, fee);
  }

  protected override calculateDiscountAmount(): Money {
    return Money.ZERO;
  }
}

export default NoneDiscountMovie;
