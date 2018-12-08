"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var _03_classsample_1 = require("./03_classsample");
var PrimarStudent = /** @class */ (function (_super) {
    __extends(PrimarStudent, _super);
    function PrimarStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrimarStudent.prototype.displayInfo = function () {
        console.log("Child Class");
    };
    return PrimarStudent;
}(_03_classsample_1.Student));
