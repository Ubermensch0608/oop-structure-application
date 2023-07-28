import { Duration, DateTime, WeekdayNumbers } from "luxon";

class RecurringSchedule {
  private subject: string;
  private dayOfWeek: WeekdayNumbers;
  private from: DateTime;
  private duration: Duration;

  constructor(
    subject: string,
    dayOfWeek: WeekdayNumbers,
    from: DateTime,
    duration: Duration
  ) {
    this.subject = subject;
    this.dayOfWeek = dayOfWeek;
    this.from = from;
    this.duration = duration;
  }

  public getDayOfWeek() {
    return this.dayOfWeek;
  }
  public getFrom() {
    return this.from;
  }
  public getDuration() {
    return this.duration;
  }
}

export default RecurringSchedule;
