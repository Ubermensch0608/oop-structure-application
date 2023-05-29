import Money from "src/Money";
import Movie from "./Movie";
import DiscountCondition from "src/condition/DiscountCondition";

class PercentDiscountMovie extends Movie {
  private percent: number;

  constructor(
    title: string,
    runningTime: string,
    fee: Money,
    percent: number,
    discountConditions: DiscountCondition[]
  ) {
    super(title, runningTime, fee, discountConditions);
    this.percent = percent;
  }

  protected override calculateDiscountAmount(): Money {
    return this.getFee().times(this.percent);
  }
}

export default PercentDiscountMovie;
