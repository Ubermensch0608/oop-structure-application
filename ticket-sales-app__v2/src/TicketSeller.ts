import Audience from "./Audience";
import TicketOffice from "./TicketOffice";

class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  public sellTo(audience: Audience) {
    const ticket = this.ticketOffice.getTicket();

    if (ticket) {
      this.ticketOffice.plusAmount(audience.buy(ticket));
    }
  }
}

export default TicketSeller;
