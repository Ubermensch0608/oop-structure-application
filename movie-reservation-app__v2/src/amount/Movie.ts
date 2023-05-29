import Money from "../Money";
import Screening from "../Screening";
import DiscountCondition from "../condition/DiscountCondition";
import PeriodCondition from "../condition/PeriodCondition";
import SequenceCondition from "../condition/SequenceCondition";
import DiscountPolicy from "../policy/DiscountPolicy";

export type MovieType =
  | "AMOUNT_DISCOUNT"
  | "PERCENT_DISCOUNT"
  | "NONE_DISCOUNT";

export enum MovieEnum {
  AMOUNT_DISCOUNT, // 금액 할인 정책
  PERCENT_DISCOUNT, // 비율 할인 정책
  NONE_DISCOUNT, // 미적용
}

/**
 * 책임
 * - 요금을 계산해야 한다.
 */
abstract class Movie {
  private title: string;
  private runningTime: string;
  private fee: Money;
  private discountConditions?: DiscountCondition[];

  constructor(
    title: string,
    runningTime: string,
    fee: Money,
    discountConditions?: DiscountCondition[]
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountConditions = discountConditions;
  }

  public calculateMovieFee(screening: Screening) {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening) {
    return !!this.discountConditions?.find((condition) =>
      condition.isSatisfiedBy(screening)
    );
  }

  protected abstract calculateDiscountAmount(): Money;
  protected getFee() {
    return this.fee;
  }
}

export default Movie;
