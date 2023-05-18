import Audience from "./Audience";
import TicketOffice from "./TicketOffice";

class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  public sellTo(audience: Audience) {
    this.ticketOffice.sellTicketTo(audience);
  }
}

export default TicketSeller;
