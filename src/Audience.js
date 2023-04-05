"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 관람객
 * 1차 리팩터링
 * - 의존성 -> 자율성
 * - 외부 제 3자에게 가방을 열어보도록 하지 않는다.
 * 2차 리팩터링
 * - Bag에 자율성 부여
 * - Audience는 Bag의 기능을 담당하지 않고, interface만 의존한다.
 */
var Audience = /** @class */ (function () {
    // 소지품을 보관하기 위해 가방을 소지할 수 있다
    function Audience(bag) {
        this.bag = bag;
    }
    // public getBag = () => {
    //   return this.bag;
    // };
    Audience.prototype.buy = function (ticket) {
        return this.bag.hold(ticket);
    };
    return Audience;
}());
exports.default = Audience;
