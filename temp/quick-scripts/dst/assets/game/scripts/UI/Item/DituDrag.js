
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/DituDrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55766fvHLxPNpmOJ/oEgRtB', 'DituDrag');
// game/scripts/UI/Item/DituDrag.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var EventType_1 = require("../../Data/EventType");
var FillArea_1 = require("./FillArea");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DituDrag = /** @class */ (function (_super) {
    __extends(DituDrag, _super);
    function DituDrag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fillArea = [];
        _this.index = 0;
        _this.initPos = null;
        _this.initParent = null;
        return _this;
    }
    DituDrag.prototype.onLoad = function () {
        this.initPos = this.node.position;
        this.initParent = this.node.parent;
        this.node.getChildByName("mianji_1").active = true;
        this.node.getChildByName("mianji_2").active = false;
    };
    DituDrag.prototype.onDragStart = function (event) {
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        this.node.getChildByName("mianji_1").active = false;
        this.node.getChildByName("mianji_2").active = true;
    };
    DituDrag.prototype.onDragMove = function (event) {
        this.node.getChildByName("mianji_1").active = false;
        this.node.getChildByName("mianji_2").active = true;
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_DRAG_DITU, pos);
    };
    DituDrag.prototype.onDragEnd = function (event) {
        var _this = this;
        var pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        var isInRect = false;
        this.fillArea.forEach(function (gezi) {
            if (gezi.getComponent(FillArea_1.default).isPosInRect(cc.v2(pos.x, pos.y))) {
                isInRect = true;
                gezi.getComponent(FillArea_1.default).fill(_this.node);
            }
        });
        if (!isInRect) {
            this.reset();
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ON_DRAG_DITU_END);
    };
    DituDrag.prototype.reset = function () {
        this.node.parent = this.initParent;
        this.node.position = this.initPos;
        this.node.getChildByName("mianji_1").active = true;
        this.node.getChildByName("mianji_2").active = false;
    };
    __decorate([
        property(cc.Node)
    ], DituDrag.prototype, "fillArea", void 0);
    __decorate([
        property(cc.Integer)
    ], DituDrag.prototype, "index", void 0);
    DituDrag = __decorate([
        ccclass
    ], DituDrag);
    return DituDrag;
}(cc.Component));
exports.default = DituDrag;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXERpdHVEcmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUFvRjtBQUNwRixrREFBaUQ7QUFDakQsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0RDO1FBaERXLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQTJDdkMsQ0FBQztJQXpDRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4RCxDQUFDO0lBRU8sOEJBQVcsR0FBbkIsVUFBb0IsS0FBSztRQUNyQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkQsQ0FBQztJQUVPLDZCQUFVLEdBQWxCLFVBQW1CLEtBQUs7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25ELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyw0QkFBUyxHQUFqQixVQUFrQixLQUFLO1FBQXZCLGlCQWFDO1FBWkcsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxRQUFRLEdBQVksS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlELFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0M7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7UUFDRCxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHdCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hELENBQUM7SUEvQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJDQUNLO0lBSlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtENUI7SUFBRCxlQUFDO0NBbERELEFBa0RDLENBbERxQyxFQUFFLENBQUMsU0FBUyxHQWtEakQ7a0JBbERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBGaWxsQXJlYSBmcm9tIFwiLi9GaWxsQXJlYVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXR1RHJhZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZmlsbEFyZWE6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdFBvczogY2MuVmVjMyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGluaXRQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRQb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5pbml0UGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtaWFuamlfMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1pYW5qaV8yXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICBsZXQgcG9zID0gZXZlbnQudGFyZ2V0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoZXZlbnQucG9zLngsIGV2ZW50LnBvcy55KSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWlhbmppXzFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWlhbmppXzJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRHJhZ01vdmUoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtaWFuamlfMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtaWFuamlfMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC50YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihldmVudC5wb3MueCwgZXZlbnQucG9zLnkpKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLk9OX0RSQUdfRElUVSwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRHJhZ0VuZChldmVudCkge1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC50YXJnZXQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MihldmVudC5wb3MueCwgZXZlbnQucG9zLnkpKTtcclxuICAgICAgICBsZXQgaXNJblJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpbGxBcmVhLmZvckVhY2goZ2V6aSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnZXppLmdldENvbXBvbmVudChGaWxsQXJlYSkuaXNQb3NJblJlY3QoY2MudjIocG9zLngsIHBvcy55KSkpIHtcclxuICAgICAgICAgICAgICAgIGlzSW5SZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdlemkuZ2V0Q29tcG9uZW50KEZpbGxBcmVhKS5maWxsKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWlzSW5SZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5PTl9EUkFHX0RJVFVfRU5EKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMuaW5pdFBhcmVudDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLmluaXRQb3M7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWlhbmppXzFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtaWFuamlfMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=