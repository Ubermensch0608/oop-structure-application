class Ticket {
  private fee: number = 10_000;

  constructor(fee?: number) {
    if (fee) {
      this.fee = fee;
    }
  }

  public getFee() {
    return this.fee;
  }
}

export default Ticket;
