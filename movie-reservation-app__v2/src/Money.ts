class Money {
  public static ZERO = Money.wons(0);
  private amount: number;

  public static wons(amount: number) {
    return new Money(amount);
  }

  constructor(amount: number) {
    this.amount = amount;
  }

  public plus(amount: Money) {
    return new Money(this.amount + amount.amount);
  }

  public minus(amount: Money) {
    return new Money(this.amount - amount.amount);
  }

  public times(percent: number) {
    return new Money(this.amount * percent);
  }

  public isLessThen(other: Money) {
    return this.amount < other.amount;
  }

  public isGreaterThanOrEqual(other: Money) {
    return this.amount >= other.amount;
  }
}

export default Money;
