import Audience from "./src/Audience";
import Bag from "./src/Bag";
import Invitation from "./src/Invitation";
import Theater from "./src/Theater";
import Ticket from "./src/Ticket";
import TicketOffice from "./src/TicketOffice";
import TicketSeller from "./src/TicketSeller";

const tickets = Array(
  new Ticket(2000),
  new Ticket(2000),
  new Ticket(2000),
  new Ticket(2000),
  new Ticket(2000)
);

const subTicketOffice = new TicketOffice(5_000, tickets);
const sallyTicketSeller = new TicketSeller(subTicketOffice);
const moonTheater = new Theater(sallyTicketSeller);

// 초대권이 있는 경우
// const invitation = new Invitation();
// const ubermensch0608Bag = new Bag(10_000, invitation);
// const ubermensch0608Audience = new Audience(ubermensch0608Bag);

// moonTheater.enter(ubermensch0608Audience);

// console.log(ubermensch0608Bag);

// 초대권이 없는 경우
const fakerBag = new Bag(10_000);
const fakerAudience = new Audience(fakerBag);
moonTheater.enter(fakerAudience);

console.log(fakerAudience);
