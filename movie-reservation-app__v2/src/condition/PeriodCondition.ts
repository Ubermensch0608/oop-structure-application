import Screening from "../Screening";
import type { DayOfWeek } from "./DiscountCondition";
import DiscountCondition from "./DiscountCondition";

class PeriodCondition implements DiscountCondition {
  private dayOfWeek: DayOfWeek; // 일주일 중 몇 요일인지 반환 0:일요일
  private startTime: Date;
  private endTime: Date;

  constructor(dayOfWeek: DayOfWeek, startTime: Date, endTime: Date) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public isSatisfiedBy(screening: Screening) {
    return (
      this.dayOfWeek === screening.getWhenScreened().getDay() &&
      this.startTime <=
        new Date(screening.getWhenScreened().toLocaleString()) &&
      this.endTime >= new Date(screening.getWhenScreened().toLocaleString())
    );
  }
}

export default PeriodCondition;
