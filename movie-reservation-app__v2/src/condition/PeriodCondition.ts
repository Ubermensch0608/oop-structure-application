import Screening from "../Screening";

type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 일, 월, 화, 수, 목, 금, 토

class PeriodCondition {
  private dayOfWeek: DayOfWeek; // 일주일 중 몇 요일인지 반환 0:일요일
  private startTime: Date;
  private endTime: Date;

  constructor(dayOfWeek: DayOfWeek, startTime: Date, endTime: Date) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  public isSatisfiedBy(screening: Screening) {
    // 상영 요일이 동일한지
    const isDayOfWeekSame =
      screening.getStartTime().getDay() === this.dayOfWeek;

    return (
      isDayOfWeekSame &&
      this.startTime <= new Date(screening.getStartTime().toLocaleString()) &&
      this.endTime >= new Date(screening.getStartTime().toLocaleString())
    );
  }
}

export default PeriodCondition;
