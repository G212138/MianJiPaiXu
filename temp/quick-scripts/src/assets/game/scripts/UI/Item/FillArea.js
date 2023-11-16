"use strict";
cc._RF.push(module, 'db6e1jihdNKfoXsF1AO+hiy', 'FillArea');
// game/scripts/UI/Item/FillArea.ts

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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var EventType_1 = require("../../Data/EventType");
var DituDrag_1 = require("./DituDrag");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FillArea = /** @class */ (function (_super) {
    __extends(FillArea, _super);
    function FillArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.isFirstIn = true;
        return _this;
    }
    FillArea.prototype.onLoad = function () {
        this.node.getChildByName("neikuang").active = false;
        this.node.getChildByName("kuang").active = false;
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ON_DRAG_DITU, this.onHandleDragDitu, this);
    };
    FillArea.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ON_DRAG_DITU, this.onHandleDragDitu, this);
    };
    FillArea.prototype.onHandleDragDitu = function (pos) {
        if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            if (this.isFirstIn) {
                this.isFirstIn = false;
                // this.node.getChildByName("kuang").active = true;                          
                if (this.index != 8) {
                    var bian_1 = this.node.getChildByName("skeleton");
                    bian_1.scaleX = 1.01;
                    Tools_1.Tools.playSpine(bian_1.getComponent(sp.Skeleton), "chengda", false, function () {
                        Tools_1.Tools.playSpine(bian_1.getComponent(sp.Skeleton), "chengda_idle", true);
                    });
                }
                if (this.index != 0) {
                    var bian2_1 = this.node.parent.getChildByName("fill_area_" + this.index).getChildByName("skeleton");
                    bian2_1.scaleX = -1.01;
                    Tools_1.Tools.playSpine(bian2_1.getComponent(sp.Skeleton), "chengda", false, function () {
                        Tools_1.Tools.playSpine(bian2_1.getComponent(sp.Skeleton), "chengda_idle", true);
                    });
                }
            }
        }
        else {
            if (!this.isFirstIn) {
                if (this.index != 8) {
                    var bian = this.node.getChildByName("skeleton");
                    bian.scaleX = 1.01;
                    Tools_1.Tools.playSpine(bian.getComponent(sp.Skeleton), "idel", true);
                }
                var bian2 = this.node.getChildByName("skeleton");
                if (this.index != 0) {
                    bian2 = this.node.parent.getChildByName("fill_area_" + this.index).getChildByName("skeleton");
                    bian2.scaleX = -1.01;
                    Tools_1.Tools.playSpine(bian2.getComponent(sp.Skeleton), "idel", true);
                }
            }
            // if (!this.isFirstIn) {
            //     if (this.index != 8) {
            //         let bian = this.node.getChildByName("skeleton");
            //         if (bian.getComponent(sp.Skeleton).animation == "chengda" || bian.getComponent(sp.Skeleton).animation == "chengda_idle") {
            //             bian.scaleX = 1.01;
            //             Tools.playSpine(bian.getComponent(sp.Skeleton), "idel", true);
            //         }
            //     }
            //     let bian2 = this.node.getChildByName("skeleton");
            //     if (this.index != 0) {
            //         bian2 = this.node.parent.getChildByName("fill_area_" + this.index).getChildByName("skeleton");
            //         if (bian2.getComponent(sp.Skeleton).animation == "chengda" || bian2.getComponent(sp.Skeleton).animation == "chengda_idle") {
            //             bian2.scaleX = -1.01;
            //             Tools.playSpine(bian2.getComponent(sp.Skeleton), "idel", true);
            //         }
            //     }
            // }
            this.isFirstIn = true;
            // this.node.getChildByName("kuang").active = false;
        }
    };
    FillArea.prototype.isPosInRect = function (pos) {
        return HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    };
    FillArea.prototype.fill = function (item) {
        // this.node.getChildByName("kuang").active = false;
        if (this.index != 8) {
            var bian_2 = this.node.getChildByName("skeleton");
            bian_2.scaleX = 1.01;
            Tools_1.Tools.playSpine(bian_2.getComponent(sp.Skeleton), "huitan", false, function () {
                Tools_1.Tools.playSpine(bian_2.getComponent(sp.Skeleton), "idel", true);
            });
        }
        var bian2 = this.node.getChildByName("skeleton");
        if (this.index != 0) {
            bian2 = this.node.parent.getChildByName("fill_area_" + this.index).getChildByName("skeleton");
            bian2.scaleX = -1.01;
            Tools_1.Tools.playSpine(bian2.getComponent(sp.Skeleton), "huitan", false, function () {
                Tools_1.Tools.playSpine(bian2.getComponent(sp.Skeleton), "idel", true);
            });
        }
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["放置音效"], false, false, false);
        if (this.node.getChildByName("fillArea").childrenCount > 0) {
            this.node.getChildByName("fillArea").children[0].getComponent(DituDrag_1.default).reset();
        }
        item.parent = this.node.getChildByName("fillArea");
        item.position = cc.v3(0, 0);
    };
    __decorate([
        property(cc.Integer)
    ], FillArea.prototype, "index", void 0);
    FillArea = __decorate([
        ccclass
    ], FillArea);
    return FillArea;
}(cc.Component));
exports.default = FillArea;

cc._RF.pop();