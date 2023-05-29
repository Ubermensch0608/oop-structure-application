import Money from "src/Money";
import Movie from "./Movie";
import DiscountCondition from "src/condition/DiscountCondition";

class AmountDiscountMovie extends Movie {
  private discountAmount: Money;

  constructor(
    title: string,
    runningTime: string,
    fee: Money,
    discountAmount: Money,
    discountConditions: DiscountCondition[]
  ) {
    super(title, runningTime, fee, discountConditions);
    this.discountAmount = discountAmount;
  }

  protected override calculateDiscountAmount(): Money {
    return this.discountAmount;
  }
}

export default AmountDiscountMovie;
