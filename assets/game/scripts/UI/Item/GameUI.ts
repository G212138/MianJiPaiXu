import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import DituDrag from "./DituDrag";
import FillArea from "./FillArea";
import { SoundConfig } from "./SoundConfig";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {
    @property(sp.Skeleton)
    private start_anim: sp.Skeleton = null;
    @property(cc.Node)
    private ditu_panel: cc.Node = null;
    @property(cc.Node)
    private fill_node: cc.Node = null;
    @property(sp.Skeleton)
    private pipi: sp.Skeleton = null;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager.on(EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager.on(EventType.ON_DRAG_DITU_END, this.handleDragEnd, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager.off(EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager.off(EventType.ON_DRAG_DITU_END, this.handleDragEnd, this);
    }

    private handleEnterGame() {
        this.resetUI();
        this.initUI();                
        this.playStartAnim();
        UIHelp.showMask();        
    }

    private resetUI() {
        this.initUI();
        this.start_anim.node.active = false;
        UIHelp.closeMask();
        for (let i = 0; i < this.fill_node.childrenCount; i++) {
            let fillArea = this.fill_node.children[i].getChildByName("fillArea");
            if (fillArea.childrenCount > 0) {
                fillArea.children[0].getComponent(DituDrag).reset();
            }
        }
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.answers.length; i++) {
            if (SyncDataManager.getSyncData().customSyncData.answers[i] != null) {
                for (let j = 0; j < this.ditu_panel.childrenCount; j++) {
                    if (this.ditu_panel.children[j].name == SyncDataManager.getSyncData().customSyncData.answers[i]) {
                        this.ditu_panel.children[j].getChildByName("mianji_1").active = false;
                        this.ditu_panel.children[j].getChildByName("mianji_2").active = true;
                        this.fill_node.children[i].getComponent(FillArea).fill(this.ditu_panel.children[j]);
                    }
                }
            }
        }
        if (SyncDataManager.getSyncData().frameSyncData.isGameOver) {
            this.pipi.node.active = true;
            Tools.playSpine(this.pipi, "win2", true);
        }
    }

    private handleDragEnd() {
        let answers = [];
        for (let i = 0; i < this.fill_node.childrenCount; i++) {
            let fillArea = this.fill_node.children[i].getChildByName("fillArea");
            if (fillArea.childrenCount > 0) {
                answers.push(fillArea.children[0].name);
            } else {
                answers.push(null);
            }
        }
        SyncDataManager.getSyncData().customSyncData.answers = answers;
    }

    private initUI() {
        this.pipi.node.active = false;
        this.start_anim.node.active = true;
        for (let i = 0; i < this.fill_node.childrenCount; i++) {
            let kuang = this.fill_node.children[i].getChildByName("kuang");
            let neikuang = this.fill_node.children[i].getChildByName("neikuang");
            kuang.active = false;
            neikuang.active = false;
        }
    }

    private playStartAnim() {
        this.start_anim.node.active = true;
        this.start_anim.node.opacity = 255;
        Tools.playSpine(this.start_anim, "db1", false, () => {
            Tools.playSpine(this.start_anim, "db1_idle", false, () => {
                Tools.playSpine(this.start_anim, "db2", false, () => {
                    Tools.playSpine(this.start_anim, "db3", false, () => {
                        cc.tween(this.start_anim.node).to(0.5, { opacity: 0 }).call(() => {
                            this.start_anim.node.active = false;
                            UIHelp.closeMask();
                        }).start();
                    });
                });
            });
        });
    }

    private trueAnswer = ['shandong_tuqi', "sichuan_tuqi", "henan_tuqi", "ningxia_tuqi", "qinghai_tuqi", "shanxi1-tuqi", "gansu_tuqi", "shanxi_tuai", "neimeng_tuqi"];
    private onClickCheck() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false);
        let isAllRight = true;
        let selfAnswer = SyncDataManager.getSyncData().customSyncData.answers;
        for (let i = 0; i < selfAnswer.length; i++) {
            if (selfAnswer[i] != this.trueAnswer[i]) {
                isAllRight = false;
                SyncDataManager.getSyncData().customSyncData.answers[i] = null;
            }
        }

        if (isAllRight) {
            this.handleAllRight();
        } else {
            this.handleWrong();
        }
    }

    private handleAllRight() {
        ListenerManager.dispatch(EventType.SUBMIT, true);
        SoundManager.playEffect(SoundConfig.soudlist["正确反馈01"], false, false);
        for (let i = 0; i < this.fill_node.childrenCount; i++) {
            let neikuang = this.fill_node.children[i].getChildByName("neikuang");
            neikuang.active = true;
            neikuang.color = cc.Color.GREEN;
        }
        this.pipi.node.active = true;
        Tools.playSpine(this.pipi, "win", false, () => {
            Tools.playSpine(this.pipi, "win2", true, () => {
                
            });
        });
        this.scheduleOnce(() => {
            ListenerManager.dispatch(EventType.GAME_OVER);
        }, 2);
    }

    private handleWrong() {
        ListenerManager.dispatch(EventType.SUBMIT, false);
        SoundManager.playEffect(SoundConfig.soudlist["错误音效"], false, false, false, () => {
            SoundManager.playEffect(SoundConfig.soudlist["错误音效"], false, false);
        });
        let selfAnswer = SyncDataManager.getSyncData().customSyncData.answers;
        for (let i = 0; i < selfAnswer.length; i++) {
            if (selfAnswer[i] != this.trueAnswer[i]) {
                let kuang = this.fill_node.children[i].getChildByName("kuang");
                kuang.active = true;
                kuang.color = cc.Color.RED;
                cc.tween(kuang).to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .to(0.1, { opacity: 255 }).delay(0.15).to(0.1, { opacity: 0 })
                .call(() => {
                    if (this.fill_node.children[i].getChildByName("fillArea").childrenCount > 0) {
                        kuang.active = false;
                        this.fill_node.children[i].getChildByName("fillArea").children[0].getComponent(DituDrag).reset();
                    }
                }).start();
            }
        }
    }
}
