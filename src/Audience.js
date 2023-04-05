"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 관람객
var Audience = /** @class */ (function () {
    // 소지품을 보관하기 위해 가방을 소지할 수 있다
    function Audience(bag) {
        var _this = this;
        this.getBag = function () {
            return _this.bag;
        };
        this.bag = bag;
    }
    return Audience;
}());
exports.default = Audience;
