"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1차 리팩토링
 * - Theater는 TicketOffice에 더 이상 접근하지 못한다.
 *   또한, TicketSeller 내부에 TicketOffice가 존재한다는 것도 모른다.
 * - Theater는 이제 오직 TicketSeller에만 의존한다.
 */
var Theater = /** @class */ (function () {
    function Theater(ticketSeller) {
        this.ticketSeller = ticketSeller;
    }
    Theater.prototype.enter = function (audience) {
        this.ticketSeller.sellTo(audience);
    };
    return Theater;
}());
exports.default = Theater;
