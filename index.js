"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Audience_1 = require("./src/Audience");
var Bag_1 = require("./src/Bag");
var Theater_1 = require("./src/Theater");
var Ticket_1 = require("./src/Ticket");
var TicketOffice_1 = require("./src/TicketOffice");
var TicketSeller_1 = require("./src/TicketSeller");
var tickets = Array(new Ticket_1.default(2000), new Ticket_1.default(2000), new Ticket_1.default(2000), new Ticket_1.default(2000), new Ticket_1.default(2000));
var subTicketOffice = new TicketOffice_1.default(5000, tickets);
var sallyTicketSeller = new TicketSeller_1.default(subTicketOffice);
var moonTheater = new Theater_1.default(sallyTicketSeller);
// 초대권이 있는 경우
// const invitation = new Invitation();
// const ubermensch0608Bag = new Bag(10_000, invitation);
// const ubermensch0608Audience = new Audience(ubermensch0608Bag);
// moonTheater.enter(ubermensch0608Audience);
// console.log(ubermensch0608Bag);
// 초대권이 없는 경우
var fakerBag = new Bag_1.default(10000);
var fakerAudience = new Audience_1.default(fakerBag);
moonTheater.enter(fakerAudience);
console.log(fakerAudience);
