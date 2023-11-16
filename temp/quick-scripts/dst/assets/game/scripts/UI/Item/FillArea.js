
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/FillArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEZpbGxBcmVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFGQUFvRjtBQUNwRiwrRUFBOEU7QUFDOUUsbUVBQWtFO0FBQ2xFLCtEQUE4RDtBQUM5RCxrREFBaUQ7QUFDakQsdUNBQWtDO0FBQ2xDLDZDQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlHQztRQS9GVyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBVWxCLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBcUY3QixDQUFDO0lBOUZHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakQsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0ksaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFHTyxtQ0FBZ0IsR0FBeEIsVUFBeUIsR0FBWTtRQUNqQyxJQUFJLGlCQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFB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LENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQkFDOUQsYUFBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELDJCQUFZLENBQUMsVUFBVSxDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25GO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUE5RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsyQ0FDSztJQUZULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRzVCO0lBQUQsZUFBQztDQWpHRCxBQWlHQyxDQWpHcUMsRUFBRSxDQUFDLFNBQVMsR0FpR2pEO2tCQWpHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBIaXRUZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvSGl0VGVzdFwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL1Rvb2xzXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgRGl0dURyYWcgZnJvbSBcIi4vRGl0dURyYWdcIjtcclxuaW1wb3J0IHsgU291bmRDb25maWcgfSBmcm9tIFwiLi9Tb3VuZENvbmZpZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGxBcmVhIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuZWlrdWFuZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLk9OX0RSQUdfRElUVSwgdGhpcy5vbkhhbmRsZURyYWdEaXR1LCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5PTl9EUkFHX0RJVFUsIHRoaXMub25IYW5kbGVEcmFnRGl0dSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0ZpcnN0SW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBvbkhhbmRsZURyYWdEaXR1KHBvczogY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChIaXRUZXN0LnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLm5vZGUpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRmlyc3RJbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0SW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImt1YW5nXCIpLmFjdGl2ZSA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ICE9IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmlhbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNrZWxldG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpYW4uc2NhbGVYID0gMS4wMTtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoYmlhbi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcImNoZW5nZGFcIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGJpYW4uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJjaGVuZ2RhX2lkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmRleCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJpYW4yID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImZpbGxfYXJlYV9cIiArIHRoaXMuaW5kZXgpLmdldENoaWxkQnlOYW1lKFwic2tlbGV0b25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlhbjIuc2NhbGVYID0gLTEuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGJpYW4yLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiY2hlbmdkYVwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoYmlhbjIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJjaGVuZ2RhX2lkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdEluKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggIT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiaWFuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic2tlbGV0b25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlhbi5zY2FsZVggPSAxLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShiaWFuLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBiaWFuMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNrZWxldG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpYW4yID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImZpbGxfYXJlYV9cIiArIHRoaXMuaW5kZXgpLmdldENoaWxkQnlOYW1lKFwic2tlbGV0b25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlhbjIuc2NhbGVYID0gLTEuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGJpYW4yLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICAvLyBpZiAoIXRoaXMuaXNGaXJzdEluKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5pbmRleCAhPSA4KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGJpYW4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJza2VsZXRvblwiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoYmlhbi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmFuaW1hdGlvbiA9PSBcImNoZW5nZGFcIiB8fCBiaWFuLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuYW5pbWF0aW9uID09IFwiY2hlbmdkYV9pZGxlXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgYmlhbi5zY2FsZVggPSAxLjAxO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoYmlhbi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcImlkZWxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGJpYW4yID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic2tlbGV0b25cIik7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5pbmRleCAhPSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYmlhbjIgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiZmlsbF9hcmVhX1wiICsgdGhpcy5pbmRleCkuZ2V0Q2hpbGRCeU5hbWUoXCJza2VsZXRvblwiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoYmlhbjIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hbmltYXRpb24gPT0gXCJjaGVuZ2RhXCIgfHwgYmlhbjIuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5hbmltYXRpb24gPT0gXCJjaGVuZ2RhX2lkbGVcIikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBiaWFuMi5zY2FsZVggPSAtMS4wMTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGJpYW4yLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0SW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzUG9zSW5SZWN0KHBvczogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBIaXRUZXN0LnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWxsKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJrdWFuZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCAhPSA4KSB7XHJcbiAgICAgICAgICAgIGxldCBiaWFuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic2tlbGV0b25cIik7XHJcbiAgICAgICAgICAgIGJpYW4uc2NhbGVYID0gMS4wMTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGJpYW4uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgXCJodWl0YW5cIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShiaWFuLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiaWFuMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNrZWxldG9uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ICE9IDApIHtcclxuICAgICAgICAgICAgYmlhbjIgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiZmlsbF9hcmVhX1wiICsgdGhpcy5pbmRleCkuZ2V0Q2hpbGRCeU5hbWUoXCJza2VsZXRvblwiKTtcclxuICAgICAgICAgICAgYmlhbjIuc2NhbGVYID0gLTEuMDE7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShiaWFuMi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcImh1aXRhblwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKGJpYW4yLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksIFwiaWRlbFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5pS+572u6Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZmlsbEFyZWFcIikuY2hpbGRyZW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZmlsbEFyZWFcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KERpdHVEcmFnKS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZpbGxBcmVhXCIpO1xyXG4gICAgICAgIGl0ZW0ucG9zaXRpb24gPSBjYy52MygwLCAwKTtcclxuICAgIH1cclxufVxyXG4iXX0=