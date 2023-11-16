import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { EventType } from "../../Data/EventType";
import FillArea from "./FillArea";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DituDrag extends cc.Component {
    @property(cc.Node)
    private fillArea: cc.Node[] = [];
    @property(cc.Integer)
    private index: number = 0;

    private initPos: cc.Vec3 = null;
    private initParent: cc.Node = null;

    onLoad() {
        this.initPos = this.node.position;
        this.initParent = this.node.parent;
        this.node.getChildByName("mianji_1").active = true;
        this.node.getChildByName("mianji_2").active = false;
    }

    private onDragStart(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        this.node.getChildByName("mianji_1").active = false;
        this.node.getChildByName("mianji_2").active = true;
    }

    private onDragMove(event) {
        this.node.getChildByName("mianji_1").active = false;
        this.node.getChildByName("mianji_2").active = true;
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        ListenerManager.dispatch(EventType.ON_DRAG_DITU, pos);
    }

    private onDragEnd(event) {
        let pos = event.target.parent.convertToWorldSpaceAR(cc.v2(event.pos.x, event.pos.y));
        let isInRect: boolean = false;
        this.fillArea.forEach(gezi => {
            if (gezi.getComponent(FillArea).isPosInRect(cc.v2(pos.x, pos.y))) {
                isInRect = true;
                gezi.getComponent(FillArea).fill(this.node);
            }
        });
        if (!isInRect) {
            this.reset();
        }
        ListenerManager.dispatch(EventType.ON_DRAG_DITU_END);
    }

    public reset() {
        this.node.parent = this.initParent;
        this.node.position = this.initPos;
        this.node.getChildByName("mianji_1").active = true;
        this.node.getChildByName("mianji_2").active = false;
    }
}
