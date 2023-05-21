import Money from "../Money";
import Screening from "../Screening";
import DiscountCondition from "../condition/DiscountCondition";

abstract class DiscountPolicy {
  private conditions!: DiscountCondition[];

  constructor(conditions?: DiscountCondition[]) {
    if (conditions) {
      this.conditions = conditions;
    }
  }

  public calculateDiscountAmount(screening: Screening) {
    // 할인 조건을 모두 확인해서 할인 정책에 해당하는 것이 있으면 할인
    this.conditions.forEach((condition) => {
      if (condition.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    });

    // 기본적으로는 할인 없는 경우로 할인 금액 0원
    return Money.ZERO;
  }

  //   protected => 상속받은 객체에서만 접근 가능
  protected abstract getDiscountAmount(screening: Screening): Money;
}

export default DiscountPolicy;
