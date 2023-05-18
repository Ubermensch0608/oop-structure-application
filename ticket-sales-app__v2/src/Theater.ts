import Audience from "./Audience";
import TicketSeller from "./TicketSeller";

class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  public enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}

export default Theater;
