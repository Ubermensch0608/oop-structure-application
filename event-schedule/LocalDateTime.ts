class LocalDateTime {
  static of(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number
  ) {
    const transTime = (timeNum: number) => {
      return timeNum.toString().length === 1 ? `0${timeNum}` : timeNum;
    };

    return new Date(
      `${year}-${transTime(month)}-${transTime(day)}T${transTime(
        hour
      )}:${transTime(minute)}`
    ).toLocaleString() as unknown as LocalDateTime;
  }
}
export default LocalDateTime;
