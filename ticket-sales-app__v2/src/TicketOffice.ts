import Ticket from "./Ticket";

class TicketOffice {
  private amount: number;
  private tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this.amount = amount;
    this.tickets = tickets;
  }

  public getTicket() {
    return this.tickets.shift();
  }

  public minusAmount(amount: number) {
    this.amount -= amount;
  }

  public plusAmount(amount?: number) {
    this.amount += amount || 0;
  }
}

export default TicketOffice;
