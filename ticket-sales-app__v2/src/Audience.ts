import Bag from "./Bag";
import Ticket from "./Ticket";

class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  // 티켓 값으로 지불한 금액 반환
  public buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}

export default Audience;
