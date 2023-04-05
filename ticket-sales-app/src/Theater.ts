import Audience from "./Audience";
import TicketSeller from "./TicketSeller";

/**
 * 1차 리팩토링
 * - Theater는 TicketOffice에 더 이상 접근하지 못한다.
 *   또한, TicketSeller 내부에 TicketOffice가 존재한다는 것도 모른다.
 * - Theater는 이제 오직 TicketSeller에만 의존한다.
 */
class Theater {
  private ticketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  public enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}

export default Theater;
