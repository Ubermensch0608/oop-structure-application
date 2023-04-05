import Invitation from "./Invitation";
import Ticket from "./Ticket";

/**
 * 물건을 보관하는 가방(현금, 초대장, 티켓을 담을 수 있음)
 * 1. 현금과 초대장을 둘 다 가지고 있는 경우
 * 2. 초대장 없이 현금만 가지고 있는 경우
 *
 * 2차 리팩토링 -> Bag에 자율성 부여
 */
class Bag {
  private amount: number; // 현금
  private ticket: Ticket;
  private invitation?: Invitation;

  public constructor(amount: number, invitation?: Invitation) {
    this.amount = amount;
    this.invitation = invitation;
  }

  public hold(ticket: Ticket) {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    } else {
      this.setTicket(ticket);
      this.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }

  // 초대장을 티켓으로 교환하는 메서드
  private setTicket = (ticket: Ticket) => {
    this.ticket = ticket;
  };

  // 가방에 초대장이 있는지 확인하는 메서드
  private hasInvitation = () => {
    return !!this.invitation;
  };

  // 티켓을 구매할 때 정산하는 메서드
  private minusAmount = (amount: number) => {
    this.amount = this.amount - amount;
  };
}

export default Bag;
