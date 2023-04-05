import Invitation from "./Invitation";
import Ticket from "./Ticket";

/**
 * 물건을 보관하는 가방(현금, 초대장, 티켓을 담을 수 있음)
 * 1. 현금과 초대장을 둘 다 가지고 있는 경우
 * 2. 초대장 없이 현금만 가지고 있는 경우
 */
class Bag {
  private amount: number; // 현금
  private invitation?: Invitation;
  private ticket: Ticket;

  public constructor(amount: number, invitation?: Invitation) {
    this.amount = amount;
    this.invitation = invitation;
  }

  // 가방에 초대장이 있는지 확인하는 메서드
  public hasInvitation = () => {
    return !!this.invitation;
  };

  // 티켓을 소유 여부를 판단하는 메서드
  public hasTicket = () => {
    return !!this.ticket;
  };

  // 초대장을 티켓으로 교환하는 메서드
  public setTicket = (ticket: Ticket) => {
    this.ticket = ticket;
  };

  // 티켓을 구매할 때 정산하는 메서드
  public minusAmount = (amount: number) => {
    this.amount = this.amount - amount;
  };

  public plusAmount = (amount: number) => {
    this.amount = this.amount + amount;
  };
}

export default Bag;
