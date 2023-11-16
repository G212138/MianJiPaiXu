
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
        _this.start_anim = null;
        _this.ditu_panel = null;
        _this.fill_node = null;
        _this.pipi = null;
        _this.trueAnswer = ['shandong_tuqi', "sichuan_tuqi", "henan_tuqi", "ningxia_tuqi", "qinghai_tuqi", "shanxi1-tuqi", "gansu_tuqi", "shanxi_tuai", "neimeng_tuqi"];
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
            kuang.active = false;
            neikuang.active = false;
        }
    };
    GameUI.prototype.playStartAnim = function () {
        var _this = this;
        this.start_anim.node.active = true;
        this.start_anim.node.opacity = 255;
        Tools_1.Tools.playSpine(this.start_anim, "db1", false, function () {
            Tools_1.Tools.playSpine(_this.start_anim, "db1_idle", false, function () {
                Tools_1.Tools.playSpine(_this.start_anim, "db2", false, function () {
                    Tools_1.Tools.playSpine(_this.start_anim, "db3", false, function () {
                        cc.tween(_this.start_anim.node).to(0.5, { opacity: 0 }).call(function () {
                            _this.start_anim.node.active = false;
                            UIHelp_1.UIHelp.closeMask();
                        }).start();
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
            var neikuang = this.fill_node.children[i].getChildByName("neikuang");
            neikuang.active = true;
            neikuang.color = cc.Color.GREEN;
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
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误音效"], false, false, false, function () {
            SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["错误音效"], false, false);
        });
        var selfAnswer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.answers;
        var _loop_1 = function (i) {
            if (selfAnswer[i] != this_1.trueAnswer[i]) {
                var kuang_1 = this_1.fill_node.children[i].getChildByName("kuang");
                kuang_1.active = true;
                kuang_1.color = cc.Color.RED;
                cc.tween(kuang_1).to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                    .call(function () {
                    if (_this.fill_node.children[i].getChildByName("fillArea").childrenCount > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRiwrREFBOEQ7QUFDOUQsaUVBQWdFO0FBQ2hFLGtEQUFpRDtBQUNqRCx1Q0FBa0M7QUFDbEMsdUNBQWtDO0FBQ2xDLDZDQUE0QztBQUd0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQW9LQztRQWxLVyxnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQWdCLElBQUksQ0FBQztRQTJGekIsZ0JBQVUsR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7O0lBaUV0SyxDQUFDO0lBMUpHLHVCQUFNLEdBQU47UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixF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QUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQ0FDN0QsQ0FBQztZQUNOLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLE9BQUssR0FBRyxPQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvRCxPQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEIsT0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQzVFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDN0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUM3RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQzdELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDN0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUM3RCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQzdELElBQUksQ0FBQztvQkFDRixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO3dCQUN6RSxPQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDckIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNwRztnQkFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkOzs7UUFsQkwsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUFqQyxDQUFDO1NBbUJUO0lBQ0wsQ0FBQztJQWpLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzhDQUNpQjtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3dDQUNXO0lBUmhCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FvSzFCO0lBQUQsYUFBQztDQXBLRCxBQW9LQyxDQXBLbUMsRUFBRSxDQUFDLFNBQVMsR0FvSy9DO2tCQXBLb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFN5bmNEYXRhTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVG9vbHNcIjtcclxuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgRGl0dURyYWcgZnJvbSBcIi4vRGl0dURyYWdcIjtcclxuaW1wb3J0IEZpbGxBcmVhIGZyb20gXCIuL0ZpbGxBcmVhXCI7XHJcbmltcG9ydCB7IFNvdW5kQ29uZmlnIH0gZnJvbSBcIi4vU291bmRDb25maWdcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHByaXZhdGUgc3RhcnRfYW5pbTogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGRpdHVfcGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGZpbGxfbm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBwcml2YXRlIHBpcGk6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCwgdGhpcy5yZXNldFVJLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVQTEFZLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5PTl9EUkFHX0RJVFVfRU5ELCB0aGlzLmhhbmRsZURyYWdFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QsIHRoaXMucmVzZXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9SRVBMQVksIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5PTl9EUkFHX0RJVFVfRU5ELCB0aGlzLmhhbmRsZURyYWdFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRW50ZXJHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRVSSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheVN0YXJ0QW5pbSgpO1xyXG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFVJKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydF9hbmltLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWxsX25vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxsQXJlYSA9IHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiZmlsbEFyZWFcIik7XHJcbiAgICAgICAgICAgIGlmIChmaWxsQXJlYS5jaGlsZHJlbkNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZmlsbEFyZWEuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KERpdHVEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2Vyc1tpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGl0dV9wYW5lbC5jaGlsZHJlbkNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXR1X3BhbmVsLmNoaWxkcmVuW2pdLm5hbWUgPT0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2Vyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpdHVfcGFuZWwuY2hpbGRyZW5bal0uZ2V0Q2hpbGRCeU5hbWUoXCJtaWFuamlfMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXR1X3BhbmVsLmNoaWxkcmVuW2pdLmdldENoaWxkQnlOYW1lKFwibWlhbmppXzJcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KEZpbGxBcmVhKS5maWxsKHRoaXMuZGl0dV9wYW5lbC5jaGlsZHJlbltqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5mcmFtZVN5bmNEYXRhLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5waXBpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMucGlwaSwgXCJ3aW4yXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZURyYWdFbmQoKSB7XHJcbiAgICAgICAgbGV0IGFuc3dlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZmlsbEFyZWEgPSB0aGlzLmZpbGxfbm9kZS5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShcImZpbGxBcmVhXCIpO1xyXG4gICAgICAgICAgICBpZiAoZmlsbEFyZWEuY2hpbGRyZW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlcnMucHVzaChmaWxsQXJlYS5jaGlsZHJlblswXS5uYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuc3dlcnMucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbnN3ZXJzID0gYW5zd2VycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLnBpcGkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0X2FuaW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWxsX25vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBrdWFuZyA9IHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwia3VhbmdcIik7XHJcbiAgICAgICAgICAgIGxldCBuZWlrdWFuZyA9IHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwibmVpa3VhbmdcIik7XHJcbiAgICAgICAgICAgIGt1YW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBuZWlrdWFuZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5U3RhcnRBbmltKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRfYW5pbS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGFydF9hbmltLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5zdGFydF9hbmltLCBcImRiMVwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5zdGFydF9hbmltLCBcImRiMV9pZGxlXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5zdGFydF9hbmltLCBcImRiMlwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLnN0YXJ0X2FuaW0sIFwiZGIzXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3RhcnRfYW5pbS5ub2RlKS50bygwLjUsIHsgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfYW5pbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJ1ZUFuc3dlciA9IFsnc2hhbmRvbmdfdHVxaScsIFwic2ljaHVhbl90dXFpXCIsIFwiaGVuYW5fdHVxaVwiLCBcIm5pbmd4aWFfdHVxaVwiLCBcInFpbmdoYWlfdHVxaVwiLCBcInNoYW54aTEtdHVxaVwiLCBcImdhbnN1X3R1cWlcIiwgXCJzaGFueGlfdHVhaVwiLCBcIm5laW1lbmdfdHVxaVwiXTtcclxuICAgIHByaXZhdGUgb25DbGlja0NoZWNrKCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBpc0FsbFJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc2VsZkFuc3dlciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuc3dlcnM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmQW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmQW5zd2VyW2ldICE9IHRoaXMudHJ1ZUFuc3dlcltpXSkge1xyXG4gICAgICAgICAgICAgICAgaXNBbGxSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5zd2Vyc1tpXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0FsbFJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWxsUmlnaHQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVdyb25nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQWxsUmlnaHQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5q2j56Gu5Y+N6aaIMDFcIl0sIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpbGxfbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5laWt1YW5nID0gdGhpcy5maWxsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJuZWlrdWFuZ1wiKTtcclxuICAgICAgICAgICAgbmVpa3VhbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmVpa3VhbmcuY29sb3IgPSBjYy5Db2xvci5HUkVFTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5waXBpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5waXBpLCBcIndpblwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5waXBpLCBcIndpbjJcIiwgdHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlV3JvbmcoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIGZhbHNlKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIumUmeivr+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIumUmeivr+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2VsZkFuc3dlciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuc3dlcnM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmQW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmQW5zd2VyW2ldICE9IHRoaXMudHJ1ZUFuc3dlcltpXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGt1YW5nID0gdGhpcy5maWxsX25vZGUuY2hpbGRyZW5baV0uZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ1wiKTtcclxuICAgICAgICAgICAgICAgIGt1YW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBrdWFuZy5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGt1YW5nKS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMTUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjE1KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4xNSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMTUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS5kZWxheSgwLjE1KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkuZGVsYXkoMC4xNSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLmRlbGF5KDAuMTUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiZmlsbEFyZWFcIikuY2hpbGRyZW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga3VhbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbF9ub2RlLmNoaWxkcmVuW2ldLmdldENoaWxkQnlOYW1lKFwiZmlsbEFyZWFcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KERpdHVEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19