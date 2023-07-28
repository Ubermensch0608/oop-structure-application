import { Duration, DateTime, WeekdayNumbers } from "luxon";

import Event from "./Event";
import RecurringSchedule from "./RecurringSchedule";

const schedule = new RecurringSchedule(
  "저녁식사",
  DateTime.fromObject({ weekday: 1 }).weekday as WeekdayNumbers,
  DateTime.fromObject({ hour: 10, minute: 30 }),
  Duration.fromDurationLike({ minutes: 30 })
);

console.log(schedule);

const meeting = new Event(
  "장보기",
  DateTime.local(2023, 8, 10, 13, 13),
  Duration.fromDurationLike({ minutes: 30 })
);

console.log(meeting.isSatisfied(schedule));
console.log(meeting.isSatisfied(schedule));
