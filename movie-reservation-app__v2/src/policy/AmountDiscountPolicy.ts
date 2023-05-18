import Money from "../Money";
import Screening from "../Screening";
import DiscountPolicy from "./DiscountPolicy";
import DiscountCondition from "../condition/DiscountCondition";

class AmountDiscountPolicy extends DiscountPolicy {
  private discountAmount: Money;

  constructor(discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions);
    this.discountAmount = discountAmount;
  }

  // @override
  protected getDiscountAmount(screening: Screening): Money {
    return this.discountAmount;
  }
}

export default AmountDiscountPolicy;
