import Audience from "./Audience";
import Bag from "./Bag";
import Invitation from "./Invitation";
import Theater from "./Theater";
import Ticket from "./Ticket";
import TicketOffice from "./TicketOffice";
import TicketSeller from "./TicketSeller";

// App 구동 파일
const a = "하이";

console.log(a);

const invitation = new Invitation();
const ticket = new Ticket();

const money = 100_000;
const bag = new Bag(money);
const James = new Audience(bag);

const ticketOffice = new TicketOffice(999_999, [
  new Ticket(20_000),
  new Ticket(),
]);

const Andy = new TicketSeller(ticketOffice);
const centralParkTheater = new Theater(Andy);

centralParkTheater.enter(James);

console.log(Andy);
