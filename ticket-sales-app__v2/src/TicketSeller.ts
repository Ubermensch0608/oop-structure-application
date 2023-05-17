import TicketOffice from "./TicketOffice";

class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  public getTicketOffice() {
    return this.ticketOffice;
  }
}

export default TicketSeller;
