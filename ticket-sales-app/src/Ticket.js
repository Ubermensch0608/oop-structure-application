"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 극장 티켓(돈으로 사야함)
var Ticket = /** @class */ (function () {
    function Ticket(fee) {
        this.fee = fee;
    }
    // 티켓 가격 getter 메서드
    Ticket.prototype.getFee = function () {
        return this.fee;
    };
    return Ticket;
}());
exports.default = Ticket;
