"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TicketSeller = /** @class */ (function () {
    function TicketSeller(ticketOffice) {
        var _this = this;
        this.getTicketOffice = function () {
            return _this.ticketOffice;
        };
        this.ticketOffice = ticketOffice;
    }
    return TicketSeller;
}());
exports.default = TicketSeller;
