
import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { EventType } from "../../Data/EventType";
import DituDrag from "./DituDrag";
import { SoundConfig } from "./SoundConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FillArea extends cc.Component {
    @property(cc.Integer)
    private index: number = 0;
    onLoad() {
        this.node.getChildByName("neikuang").active = false;
        this.node.getChildByName("kuang").active = false;
        ListenerManager.on(EventType.ON_DRAG_DITU, this.onHandleDragDitu, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.ON_DRAG_DITU, this.onHandleDragDitu, this);
    }

    private isFirstIn = true;
    private onHandleDragDitu(pos: cc.Vec2) {
        if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            if (this.isFirstIn) {
                this.isFirstIn = false;
                // this.node.getChildByName("kuang").active = true;                          
                if (this.index != 8) {
                    let bian = this.node.getChildByName("skeleton");
                    bian.scaleX = 1.01;
                    Tools.playSpine(bian.getComponent(sp.Skeleton), "chengda", false, () => {
                        Tools.playSpine(bian.getComponent(sp.Skeleton), "chengda_idle", true);
                    });
                }
                if (this.index != 0) {
                    let bian2 = this.node.parent.getChildByName("fill_area_" + this.index).getChildByName("skeleton");
                    bian2.scaleX = -1.01;
                    Tools.playSpine(bian2.getComponent(sp.Skeleton), "chengda", false, () => {
                        Tools.playSpine(bian2.getComponent(sp.Skeleton), "chengda_idle", true);
                    });
                }
            }
        } else {
            if (!this.isFirstIn) {                
                if (this.index != 8) {
                    let bian = this.node.getChildByName("skeleton");
                    bian.scaleX = 1.01;
                    Tools.playSpine(bian.getComponent(sp.Skeleton), "idel", true);
                }
                let bian2 = this.node.getChildByName("skeleton");
                if (this.index != 0) {
                    bian2 = this.node.parent.getChildByName("fill_area_" + this.index).getChildByName("skeleton");
                    bian2.scaleX = -1.01;
                    Tools.playSpine(bian2.getComponent(sp.Skeleton), "idel", true);
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
    }

    public isPosInRect(pos: cc.Vec2): boolean {
        return HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    }

    public fill(item: cc.Node) {
        // this.node.getChildByName("kuang").active = false;
        if (this.index != 8) {
            let bian = this.node.getChildByName("skeleton");
            bian.scaleX = 1.01;
            Tools.playSpine(bian.getComponent(sp.Skeleton), "huitan", false, () => {
                Tools.playSpine(bian.getComponent(sp.Skeleton), "idel", true);
            });
        }
        let bian2 = this.node.getChildByName("skeleton");
        if (this.index != 0) {
            bian2 = this.node.parent.getChildByName("fill_area_" + this.index).getChildByName("skeleton");
            bian2.scaleX = -1.01;
            Tools.playSpine(bian2.getComponent(sp.Skeleton), "huitan", false, () => {
                Tools.playSpine(bian2.getComponent(sp.Skeleton), "idel", true);
            });
        }
        SoundManager.playEffect(SoundConfig.soudlist["放置音效"], false, false, false);
        if (this.node.getChildByName("fillArea").childrenCount > 0) {
            this.node.getChildByName("fillArea").children[0].getComponent(DituDrag).reset();
        }
        item.parent = this.node.getChildByName("fillArea");
        item.position = cc.v3(0, 0);
    }
}
