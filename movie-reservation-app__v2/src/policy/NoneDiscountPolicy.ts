import Money from "../Money";
import DiscountPolicy from "./DiscountPolicy";

class NoneDiscountPolicy extends DiscountPolicy {
  protected override getDiscountAmount(): Money {
    return Money.ZERO;
  }
}

export default NoneDiscountPolicy;
