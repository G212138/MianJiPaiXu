
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d20blthxhGKI2PXjW5KZ3O', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var DituDrag_1 = require("./DituDrag");
var FillArea_1 = require("./FillArea");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.start_layer = null;
        _this.start_anim = null;
        _this.ditu_panel = null;
        _this.fill_node = null;
        _this.pipi = null;
        // private trueAnswer = ['shandong_tuqi', "sichuan_tuqi", "henan_tuqi", "ningxia_tuqi", "qinghai_tuqi", "shanxi1-tuqi", "gansu_tuqi", "shanxi_tuai", "neimeng_tuqi"];
        _this.trueAnswer = ['neimeng_tuqi', "shanxi_tuai", "gansu_tuqi", "shanxi1-tuqi", "qinghai_tuqi", "ningxia_tuqi", "henan_tuqi", "sichuan_tuqi", 'shandong_tuqi'];
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ON_DRAG_DITU_END, this.handleDragEnd, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ON_DRAG_DITU_END, this.handleDragEnd, this);
    };
    GameUI.prototype.handleEnterGame = function () {
        this.resetUI();
        this.initUI();
        this.playStartAnim();
        UIHelp_1.UIHelp.showMask();
    };
    GameUI.prototype.resetUI = function () {
        this.initUI();
        this.start_anim.node.active = false;
        UIHelp_1.UIHelp.closeMask();
        for (var i = 0; i < this.fill_node.childrenCount; i++) {
            var fillArea = this.fill_node.children[i].getChildByName("fillArea");
            if (fillArea.childrenCount > 0) {
                fillArea.children[0].getComponent(DituDrag_1.default).reset();
            }
        }
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answers.length; i++) {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answers[i] != null) {
                for (var j = 0; j < this.ditu_panel.childrenCount; j++) {
                    if (this.ditu_panel.children[j].name == SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answers[i]) {
                        this.ditu_panel.children[j].getChildByName("mianji_1").active = false;
                        this.ditu_panel.children[j].getChildByName("mianji_2").active = true;
                        this.ditu_panel.children[j].getChildByName("diming_1").active = false;
                        this.ditu_panel.children[j].getChildByName("diming_2").active = true;
                        this.fill_node.children[i].getComponent(FillArea_1.default).fill(this.ditu_panel.children[j]);
                    }
                }
            }
        }
        if (SyncDataManager_1.SyncDataManager.getSyncData().frameSyncData.isGameOver) {
            this.pipi.node.active = true;
            Tools_1.Tools.playSpine(this.pipi, "win2", true);
        }
    };
    GameUI.prototype.handleDragEnd = function () {
        var answers = [];
        for (var i = 0; i < this.fill_node.childrenCount; i++) {
            var fillArea = this.fill_node.children[i].getChildByName("fillArea");
            if (fillArea.childrenCount > 0) {
                answers.push(fillArea.children[0].name);
            }
            else {
                answers.push(null);
            }
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answers = answers;
    };
    GameUI.prototype.initUI = function () {
        this.pipi.node.active = false;
        this.start_anim.node.active = true;
        for (var i = 0; i < this.fill_node.childrenCount; i++) {
            var kuang = this.fill_node.children[i].getChildByName("kuang");
            var neikuang = this.fill_node.children[i].getChildByName("neikuang");
            // this.fill_node.children[i].getChildByName("skeleton").active = true;
            kuang.active = false;
            neikuang.active = false;
        }
    };
    GameUI.prototype.playStartAnim = function () {
        var _this = this;
        this.start_layer.active = true;
        this.start_anim.node.active = true;
        this.start_layer.opacity = 255;
        this.start_anim.node.x = 8;
        this.start_anim.node.y = -581;
        this.start_layer.getChildByName("02").active = true;
        this.start_layer.getChildByName("03").active = false;
        Tools_1.Tools.playSpine(this.start_anim, "ditu01", false, function () {
            _this.start_anim.node.x = 8;
            _this.start_anim.node.y = -562;
            Tools_1.Tools.playSpine(_this.start_anim, "ditu02", false, function () {
                Tools_1.Tools.playSpine(_this.start_anim, "ditu03", false, function () {
                    _this.start_layer.getChildByName("03").active = true;
                    Tools_1.Tools.playSpine(_this.start_anim, "ditu04", false, function () {
                        _this.start_layer.getChildByName("02").active = false;
                        _this.start_layer.getChildByName("03").active = false;
                        Tools_1.Tools.playSpine(_this.start_anim, "ditu05", false, function () {
                            cc.tween(_this.start_layer).to(0.5, { opacity: 0 }).call(function () {
                                _this.start_layer.active = false;
                                UIHelp_1.UIHelp.closeMask();
                            }).start();
                        });
                    });
                });
            });
        });
    };
    GameUI.prototype.onClickCheck = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false);
        var isAllRight = true;
        var selfAnswer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answers;
        for (var i = 0; i < selfAnswer.length; i++) {
            if (selfAnswer[i] != this.trueAnswer[i]) {
                isAllRight = false;
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answers[i] = null;
            }
        }
        if (isAllRight) {
            this.handleAllRight();
        }
        else {
            this.handleWrong();
        }
    };
    GameUI.prototype.handleAllRight = function () {
        var _this = this;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["正确反馈01"], false, false);
        for (var i = 0; i < this.fill_node.childrenCount; i++) {
            var neikuang = this.fill_node.children[i].getChildByName("kuang");
            // this.fill_node.children[i].getChildByName("skeleton").active = false;
            neikuang.active = true;
            // neikuang.color = cc.Color.GREEN;
        }
        this.pipi.node.active = true;
        Tools_1.Tools.playSpine(this.pipi, "win", false, function () {
            Tools_1.Tools.playSpine(_this.pipi, "win2", true, function () {
            });
        });
        this.scheduleOnce(function () {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
        }, 2);
    };
    GameUI.prototype.handleWrong = function () {
        var _this = this;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
        UIHelp_1.UIHelp.showMask();
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误音效"], false, false, false, function () {
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误音效"], false, false);
        });
        var selfAnswer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answers;
        var _loop_1 = function (i) {
            if (selfAnswer[i] != this_1.trueAnswer[i]) {
                var kuang_1 = this_1.fill_node.children[i].getChildByName("neikuang");
                // this.fill_node.children[i].getChildByName("skeleton").active = false;
                kuang_1.active = true;
                // kuang.color = cc.Color.RED;
                cc.tween(kuang_1).to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .call(function () {
                    UIHelp_1.UIHelp.closeMask();
                    if (_this.fill_node.children[i].getChildByName("fillArea").childrenCount > 0) {
                        // this.fill_node.children[i].getChildByName("skeleton").active = true;
                        kuang_1.active = false;
                        _this.fill_node.children[i].getChildByName("fillArea").children[0].getComponent(DituDrag_1.default).reset();
                    }
                }).start();
            }
        };
        var this_1 = this;
        for (var i = 0; i < selfAnswer.length; i++) {
            _loop_1(i);
        }
    };
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "start_layer", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GameUI.prototype, "start_anim", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "ditu_panel", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "fill_node", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GameUI.prototype, "pipi", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRiwrREFBOEQ7QUFDOUQsaUVBQWdFO0FBQ2hFLGtEQUFpRDtBQUNqRCx1Q0FBa0M7QUFDbEMsdUNBQWtDO0FBQ2xDLDZDQUE0QztBQUd0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTRMQztRQTFMVyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQWdCLElBQUksQ0FBQztRQTJHakMscUtBQXFLO1FBQzdKLGdCQUFVLEdBQUcsQ0FBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLGVBQWUsQ0FBQyxDQUFBOztJQXNFN0osQ0FBQztJQWhMRyx1QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUs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VDtJQUNMLENBQUM7SUF6TEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4Q0FDaUI7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3Q0FDVztJQVZoQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBNEwxQjtJQUFELGFBQUM7Q0E1TEQsQUE0TEMsQ0E1TG1DLEVBQUUsQ0FBQyxTQUFTLEdBNEwvQztrQkE1TG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1Rvb2xzXCI7XHJcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1VJSGVscFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IERpdHVEcmFnIGZyb20gXCIuL0RpdHVEcmFnXCI7XHJcbmltcG9ydCBGaWxsQXJlYSBmcm9tIFwiLi9GaWxsQXJlYVwiO1xyXG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc3RhcnRfbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgcHJpdmF0ZSBzdGFydF9hbmltOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZGl0dV9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZmlsbF9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHByaXZhdGUgcGlwaTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLnJlc2V0VUksIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuR0FNRV9SRVBMQVksIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLk9OX0RSQUdfRElUVV9FTkQsIHRoaXMuaGFuZGxlRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCwgdGhpcy5yZXNldFVJLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLk9OX0RSQUdfRElUVV9FTkQsIHRoaXMuaGFuZGxlRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFbnRlckdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgICAgICB0aGlzLnBsYXlTdGFydEFuaW0oKTtcclxuICAgICAgICBVSUhlbHAuc2hvd01hc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0X2FuaW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpbGxfbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGZpbGxBcmVhID0gdGhpcy5maWxsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJmaWxsQXJlYVwiKTtcclxuICAgICAgICAgICAgaWYgKGZpbGxBcmVhLmNoaWxkcmVuQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxsQXJlYS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoRGl0dURyYWcpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXJzW2ldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kaXR1X3BhbmVsLmNoaWxkcmVuQ291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpdHVfcGFuZWwuY2hpbGRyZW5bal0ubmFtZSA9PSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXJzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGl0dV9wYW5lbC5jaGlsZHJlbltqXS5nZXRDaGlsZEJ5TmFtZShcIm1pYW5qaV8xXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpdHVfcGFuZWwuY2hpbGRyZW5bal0uZ2V0Q2hpbGRCeU5hbWUoXCJtaWFuamlfMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpdHVfcGFuZWwuY2hpbGRyZW5bal0uZ2V0Q2hpbGRCeU5hbWUoXCJkaW1pbmdfMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXR1X3BhbmVsLmNoaWxkcmVuW2pdLmdldENoaWxkQnlOYW1lKFwiZGltaW5nXzJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEZpbGxBcmVhKS5maWxsKHRoaXMuZGl0dV9wYW5lbC5jaGlsZHJlbltqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5mcmFtZVN5bmNEYXRhLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5waXBpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMucGlwaSwgXCJ3aW4yXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURyYWdFbmQoKSB7XHJcbiAgICAgICAgbGV0IGFuc3dlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZmlsbEFyZWEgPSB0aGlzLmZpbGxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImZpbGxBcmVhXCIpO1xyXG4gICAgICAgICAgICBpZiAoZmlsbEFyZWEuY2hpbGRyZW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlcnMucHVzaChmaWxsQXJlYS5jaGlsZHJlblswXS5uYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlcnMucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXJzID0gYW5zd2VycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLnBpcGkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0X2FuaW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWxsX25vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBrdWFuZyA9IHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwia3VhbmdcIik7XHJcbiAgICAgICAgICAgIGxldCBuZWlrdWFuZyA9IHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmVpa3VhbmdcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwic2tlbGV0b25cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAga3VhbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5laWt1YW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYXlTdGFydEFuaW0oKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydF9sYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRfYW5pbS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGFydF9sYXllci5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuc3RhcnRfYW5pbS5ub2RlLnggPSA4O1xyXG4gICAgICAgIHRoaXMuc3RhcnRfYW5pbS5ub2RlLnkgPSAtNTgxO1xyXG4gICAgICAgIHRoaXMuc3RhcnRfbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCIwMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRfbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCIwM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5zdGFydF9hbmltLCBcImRpdHUwMVwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0X2FuaW0ubm9kZS54ID0gODtcclxuICAgICAgICAgICAgdGhpcy5zdGFydF9hbmltLm5vZGUueSA9IC01NjI7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLnN0YXJ0X2FuaW0sIFwiZGl0dTAyXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5zdGFydF9hbmltLCBcImRpdHUwM1wiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCIwM1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLnN0YXJ0X2FuaW0sIFwiZGl0dTA0XCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCIwMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydF9sYXllci5nZXRDaGlsZEJ5TmFtZShcIjAzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5zdGFydF9hbmltLCBcImRpdHUwNVwiLCBmYWxzZSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3RhcnRfbGF5ZXIpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfbGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSB0cnVlQW5zd2VyID0gWydzaGFuZG9uZ190dXFpJywgXCJzaWNodWFuX3R1cWlcIiwgXCJoZW5hbl90dXFpXCIsIFwibmluZ3hpYV90dXFpXCIsIFwicWluZ2hhaV90dXFpXCIsIFwic2hhbnhpMS10dXFpXCIsIFwiZ2Fuc3VfdHVxaVwiLCBcInNoYW54aV90dWFpXCIsIFwibmVpbWVuZ190dXFpXCJdO1xyXG4gICAgcHJpdmF0ZSB0cnVlQW5zd2VyID0gWyduZWltZW5nX3R1cWknLFwic2hhbnhpX3R1YWlcIixcImdhbnN1X3R1cWlcIixcInNoYW54aTEtdHVxaVwiLFwicWluZ2hhaV90dXFpXCIsXCJuaW5neGlhX3R1cWlcIixcImhlbmFuX3R1cWlcIixcInNpY2h1YW5fdHVxaVwiLCdzaGFuZG9uZ190dXFpJ11cclxuICAgIHByaXZhdGUgb25DbGlja0NoZWNrKCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBpc0FsbFJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc2VsZkFuc3dlciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuc3dlcnM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmQW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmQW5zd2VyW2ldICE9IHRoaXMudHJ1ZUFuc3dlcltpXSkge1xyXG4gICAgICAgICAgICAgICAgaXNBbGxSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2Vyc1tpXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0FsbFJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWxsUmlnaHQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVdyb25nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQWxsUmlnaHQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5q2j56Gu5Y+N6aaIMDFcIl0sIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpbGxfbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5laWt1YW5nID0gdGhpcy5maWxsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ1wiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5maWxsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJza2VsZXRvblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbmVpa3VhbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gbmVpa3VhbmcuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5waXBpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5waXBpLCBcIndpblwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5waXBpLCBcIndpbjJcIiwgdHJ1ZSwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfT1ZFUik7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVXcm9uZygpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgZmFsc2UpO1xyXG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi6ZSZ6K+v6Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi6ZSZ6K+v6Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzZWxmQW5zd2VyID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2VycztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGZBbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNlbGZBbnN3ZXJbaV0gIT0gdGhpcy50cnVlQW5zd2VyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga3VhbmcgPSB0aGlzLmZpbGxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcIm5laWt1YW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maWxsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJza2VsZXRvblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGt1YW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBrdWFuZy5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGt1YW5nKS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMTUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4xNSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjE1KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMTUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4xNSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjE1KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMTUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImZpbGxBcmVhXCIpLmNoaWxkcmVuQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbGxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcInNrZWxldG9uXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrdWFuZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiZmlsbEFyZWFcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KERpdHVEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=