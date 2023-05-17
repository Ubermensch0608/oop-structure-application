import Invitation from "./Invitation";
import Ticket from "./Ticket";

class Bag {
  private invitation!: Invitation;
  private ticket!: Ticket;
  private amount!: number; // 소유 현금

  constructor(amount: number, invitation?: Invitation) {
    if (invitation) {
      this.invitation = invitation;
    }
    this.amount = amount;
  }

  public hasInvitation() {
    return !!this.invitation;
  }

  public hasTicket() {
    return !!this.ticket;
  }

  public setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  public minusAmount(amount?: number) {
    this.amount -= amount || 0;
  }

  public plusAmount(amount: number) {
    this.amount += amount;
  }
}

export default Bag;
