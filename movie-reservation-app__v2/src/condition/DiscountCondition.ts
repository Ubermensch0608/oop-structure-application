import Screening from "../Screening";

// interface DiscountCondition {
//   isSatisfiedBy(screening: Screening): boolean;
// }
export enum DiscountConditionType {
  "SEQUENCE",
  "PERIOD",
} // 순번, 기간

class DiscountCondition {
  private type!: DiscountConditionType;

  private sequence!: number;

  private dayOfWeek!: number;
  private startTime!: Date;
  private endTime!: Date;

  public getType() {
    return this.type;
  }

  public setType(type: DiscountConditionType) {
    this.type = type;
  }

  public getDayOfWeek() {
    return this.dayOfWeek;
  }

  public setDayOfWeek(dayOfWeek: number) {
    this.dayOfWeek = dayOfWeek;
  }

  public getStartTime() {
    return this.startTime;
  }

  public setStartTime(startTime: Date) {
    this.startTime = startTime;
  }

  public getEndTime() {
    return this.endTime;
  }

  public setEndTime(endTime: Date) {
    this.endTime = endTime;
  }

  public getSequence() {
    return this.sequence;
  }

  public setSequence(sequence: number) {
    this.sequence = sequence;
  }
}

export default DiscountCondition;
