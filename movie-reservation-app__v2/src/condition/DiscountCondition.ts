import { rootCertificates } from "tls";
import Screening from "../Screening";

// 순번, 기간
export type DiscountConditionType = "SEQUENCE" | "PERIOD";
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 일, 월, 화, 수, 목, 금, 토

/**
 * 책임
 * - 할인 여부를 판단해야 한다.
 * 취약성(변경)
 * - 새로운 할인 조건 추가
 * - 순번 조건을 판단하는 로직 변경
 * - 기간 조건을 판단하는 로직 변경
 */
class DiscountCondition {
  private type: DiscountConditionType;
  private sequence: number;
  private dayOfWeek: DayOfWeek;
  private startTime: Date;
  private endTime: Date;

  public isSatisfiedBy(screening: Screening) {
    if (this.type === "PERIOD") {
      return this.isSatisfiedByPeriod(screening);
    }

    return this.isSatisfiedBySequence(screening);
  }

  private isSatisfiedBySequence(screening: Screening) {
    return this.sequence === screening.getSequence();
  }

  private isSatisfiedByPeriod(screening: Screening) {
    return (
      this.dayOfWeek === screening.getWhenScreened().getDay() &&
      this.startTime <=
        new Date(screening.getWhenScreened().toLocaleString()) &&
      this.endTime >= new Date(screening.getWhenScreened().toLocaleString())
    );
  }
}

export default DiscountCondition;
