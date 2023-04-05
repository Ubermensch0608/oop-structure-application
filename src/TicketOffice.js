"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 티켓 판매 부스
var TicketOffice = /** @class */ (function () {
    function TicketOffice(amount, tickets) {
        var _this = this;
        this.tickets = [];
        this.getTicket = function () {
            return _this.tickets.shift();
        };
        this.plusAmount = function (amount) {
            _this.amount += amount;
        };
        this.amount = amount;
        this.tickets = tickets;
    }
    return TicketOffice;
}());
exports.default = TicketOffice;
