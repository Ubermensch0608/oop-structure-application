"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 물건을 보관하는 가방(현금, 초대장, 티켓을 담을 수 있음)
 * 1. 현금과 초대장을 둘 다 가지고 있는 경우
 * 2. 초대장 없이 현금만 가지고 있는 경우
 *
 * 2차 리팩토링 -> Bag에 자율성 부여
 */
var Bag = /** @class */ (function () {
    function Bag(amount, invitation) {
        var _this = this;
        // 초대장을 티켓으로 교환하는 메서드
        this.setTicket = function (ticket) {
            _this.ticket = ticket;
        };
        // 가방에 초대장이 있는지 확인하는 메서드
        this.hasInvitation = function () {
            return !!_this.invitation;
        };
        // 티켓을 구매할 때 정산하는 메서드
        this.minusAmount = function (amount) {
            _this.amount = _this.amount - amount;
        };
        this.amount = amount;
        this.invitation = invitation;
    }
    Bag.prototype.hold = function (ticket) {
        if (this.hasInvitation()) {
            this.setTicket(ticket);
            return 0;
        }
        else {
            this.setTicket(ticket);
            this.minusAmount(ticket.getFee());
            return ticket.getFee();
        }
    };
    return Bag;
}());
exports.default = Bag;
