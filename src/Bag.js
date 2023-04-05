"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 물건을 보관하는 가방(현금, 초대장, 티켓을 담을 수 있음)
 * 1. 현금과 초대장을 둘 다 가지고 있는 경우
 * 2. 초대장 없이 현금만 가지고 있는 경우
 */
var Bag = /** @class */ (function () {
    function Bag(amount, invitation) {
        var _this = this;
        // 가방에 초대장이 있는지 확인하는 메서드
        this.hasInvitation = function () {
            return !!_this.invitation;
        };
        // 티켓을 소유 여부를 판단하는 메서드
        this.hasTicket = function () {
            return !!_this.ticket;
        };
        // 초대장을 티켓으로 교환하는 메서드
        this.setTicket = function (ticket) {
            _this.ticket = ticket;
        };
        // 티켓을 구매할 때 정산하는 메서드
        this.minusAmount = function (amount) {
            _this.amount = _this.amount - amount;
        };
        this.plusAmount = function (amount) {
            _this.amount = _this.amount + amount;
        };
        this.amount = amount;
        this.invitation = invitation;
    }
    return Bag;
}());
exports.default = Bag;
