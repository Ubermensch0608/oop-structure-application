import Theater from "./Theater";
import TicketSeller from "./TicketSeller";
import TicketOffice from "./TicketOffice";
import Audience from "./Audience";
import Bag from "./Bag";
import Invitation from "./Invitation";
import Ticket from "./Ticket";

const invitation = new Invitation();

const money = 100_000;
const bag = new Bag(money);
const James = new Audience(bag);

const ticketOffice = new TicketOffice(999_999, [
  new Ticket(20_000),
  new Ticket(30_000),
]);

const Andy = new TicketSeller(ticketOffice);
const centralParkTheater = new Theater(Andy);

centralParkTheater.enter(James);

console.log("Andy", Andy);
console.log("James", James);
