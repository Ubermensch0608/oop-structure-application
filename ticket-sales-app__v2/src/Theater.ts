import Audience from "./Audience";
import TicketSeller from "./TicketSeller";

class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  public enter(audience: Audience) {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();

      if (ticket) {
        audience.getBag().setTicket(ticket);
      } else {
        console.log("티켓 부스에 티켓이 없습니다.");
      }
    } else {
      const ticket = this.ticketSeller.getTicketOffice().getTicket();

      if (ticket) {
        const ticketCost = ticket.getFee();

        audience.getBag().minusAmount(ticketCost);
        this.ticketSeller.getTicketOffice().plusAmount(ticketCost);
        audience.getBag().setTicket(ticket);
      } else {
        console.log("티켓 부스에 티켓이 없습니다.");
      }
    }
  }
}

export default Theater;
