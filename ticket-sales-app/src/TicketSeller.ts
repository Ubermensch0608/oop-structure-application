import Audience from "./Audience";
import TicketOffice from "./TicketOffice";

/**
 * 1차 리팩토링
 * - Theater의 티켓 판매 메서드 -> Ticket으로 이동
 * - TicketOffice에 접근 가능한 것은 오직 TicketSeller
 */

class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  // public getTicketOffice = (): TicketOffice => {
  //   return this.ticketOffice;
  // };

  public sellTo(audience: Audience) {
    // 판매원이 티켓을 부스로부터 하나 가져다가
    // 판매원은 받은 돈을 부스에 보관한다.
    this.ticketOffice.plusAmount(audience.buy(this.ticketOffice.getTicket()));
  }
}

export default TicketSeller;

// class와 관련된 문제는 스스로 해결함
