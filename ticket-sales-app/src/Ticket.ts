// 극장 티켓(돈으로 사야함)
class Ticket {
  private fee: number;

  constructor(fee: number) {
    this.fee = fee;
  }

  // 티켓 가격 getter 메서드
  public getFee() {
    return this.fee;
  }
}

export default Ticket;
