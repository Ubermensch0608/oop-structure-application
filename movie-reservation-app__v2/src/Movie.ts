import Money from "./Money";
import Screening from "./Screening";
import DiscountCondition from "./condition/DiscountCondition";
import PeriodCondition from "./condition/PeriodCondition";
import SequenceCondition from "./condition/SequenceCondition";
import DiscountPolicy from "./policy/DiscountPolicy";

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
class Movie {
  private title: string;
  private runningTime: string;
  private fee: Money;
  // private discountConditions: DiscountCondition[];
  private sequenceConditions: SequenceCondition[];
  private periodConditions: PeriodCondition[];

  private movieType: MovieType;
  private discountAmount: Money;
  private discountPercent: number;

  public calculateMovieFee(screening: Screening) {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calculateDiscountAmount());
    }
  }

  private isDiscountable(screening: Screening) {
    return (
      this.checkPeriodConditions(screening) ||
      this.checkSequenceConditions(screening)
    );
  }

  private checkPeriodConditions(screening: Screening) {
    return !!this.periodConditions.find((condition) =>
      condition.isSatisfiedBy(screening)
    );
  }
  private checkSequenceConditions(screening: Screening) {
    return !!this.sequenceConditions.find((condition) =>
      condition.isSatisfiedBy(screening)
    );
  }

  private calculateDiscountAmount() {
    switch (this.movieType) {
      case "AMOUNT_DISCOUNT":
        return this.calculateAmountDiscountAmount();
      case "PERCENT_DISCOUNT":
        return this.calculatePercentDiscountAmount();
      case "NONE_DISCOUNT":
        return this.calculateNoneDiscountAmount();
    }

    throw new Error("movieType 예외 에러");
  }

  private calculateAmountDiscountAmount() {
    return this.discountAmount;
  }

  private calculatePercentDiscountAmount() {
    return this.fee.times(this.discountPercent);
  }

  private calculateNoneDiscountAmount() {
    return Money.ZERO;
  }
}

export default Movie;
