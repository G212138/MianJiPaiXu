"use strict";
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