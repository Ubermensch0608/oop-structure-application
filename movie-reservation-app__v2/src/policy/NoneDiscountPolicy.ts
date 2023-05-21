import Money from "../Money";
import Screening from "../Screening";
import DiscountPolicy from "./DiscountPolicy";

class NoneDiscountPolicy extends DiscountPolicy {
  public getDiscountAmount(screening: Screening): Money {
    return Money.ZERO;
  }
}

export default NoneDiscountPolicy;
