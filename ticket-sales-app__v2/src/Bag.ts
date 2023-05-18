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

  public hold(ticket: Ticket) {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    }

    this.setTicket(ticket);
    this.minusAmount(ticket.getFee());
    return ticket.getFee();
  }

  private hasInvitation() {
    return !!this.invitation;
  }

  private setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  private minusAmount(amount?: number) {
    this.amount -= amount || 0;
  }
}

export default Bag;
