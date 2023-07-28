import { Duration, DateTime } from "luxon";

import RecurringSchedule from "./RecurringSchedule";

class Event {
  private subject: string;
  private from: DateTime;
  private duration: Duration;

  constructor(subject: string, from: DateTime, duration: Duration) {
    this.subject = subject;
    this.from = from;
    this.duration = duration;
  }

  public isSatisfied(schedule: RecurringSchedule) {
    if (
      this.from.get("weekNumber") != schedule.getDayOfWeek() ||
      !this.from.toLocal().equals(schedule.getFrom()) ||
      !this.duration.equals(schedule.getDuration())
    ) {
      return false;
    }

    return true;
  }

  public reschedule(schedule: RecurringSchedule): void {
    this.from = DateTime.local(
      this.from
        .toLocal()
        .plus({ days: this.daysDistance(schedule) })
        .get("daysInMonth")
    );
    this.duration = schedule.getDuration();
  }

  private daysDistance(schedule: RecurringSchedule) {
    return schedule.getDayOfWeek() - this.from.get("weekday");
  }
}

export default Event;
