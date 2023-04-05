"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Theater = /** @class */ (function () {
    function Theater(ticketSeller) {
        this.ticketSeller = ticketSeller;
    }
    Theater.prototype.enter = function (audience) {
        // 고객 가방에 초대권이 있으면
        if (audience.getBag().hasInvitation()) {
            // 판매원이 티켓을 부스로부터 하나 가져다가
            var ticket = this.ticketSeller.getTicketOffice().getTicket();
            // 전달하고 고객은 티켓을 가방에 넣는다.
            if (ticket) {
                audience.getBag().setTicket(ticket);
            }
        }
        else {
            // 가방에 초대권이 없으면
            // 티켓 셀러는 부스로부터 티켓을 하나 준비한다
            var ticket = this.ticketSeller.getTicketOffice().getTicket();
            if (ticket) {
                // 고객은 가방에서 돈을 지불한다.
                audience.getBag().minusAmount(ticket.getFee());
                // 판매원은 받은 돈을 부스에 보관한다.
                this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
                // 고객은 티켓을 얻어 가방에 넣는다.
                audience.getBag().setTicket(ticket);
            }
        }
    };
    return Theater;
}());
exports.default = Theater;
