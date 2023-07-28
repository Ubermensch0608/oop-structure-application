class LocalTime {
  constructor() {}

  static of(hour: number, minute: number) {
    return new Date(hour, minute).toLocaleTimeString();
  }
}

export default LocalTime;
