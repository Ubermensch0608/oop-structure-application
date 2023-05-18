import Audience from "./Audience";
import Ticket from "./Ticket";

class TicketOffice {
  private amount: number;
  private tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = tickets;
  }

  public sellTicketTo(audience: Audience) {
    const ticket = this.getTicket();

    if (ticket) {
      this.plusAmount(audience.buy(ticket));
    }
  }

  private getTicket() {
    return this.tickets.shift();
  }

  private plusAmount(amount?: number) {
    this.amount += amount || 0;
  }
}

export default TicketOffice;
