import DiscountCondition from "../condition/DiscountCondition";
import Money from "../Money";
import Screening from "../Screening";
import DiscountPolicy from "./DiscountPolicy";

class PercentDiscountPolicy extends DiscountPolicy {
  private percent: number;

  constructor(percent: number, conditions: DiscountCondition[]) {
    super(conditions);
    this.percent = percent;
  }

  // @override
  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent);
  }
}

export default PercentDiscountPolicy;
