
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/ConstValue":1,"./assets/game/scripts/SkeletonExt":4,"./assets/frame/scripts/Data/FrameConstValue":5,"./assets/frame/scripts/Manager/ListenerManager":10,"./assets/frame/scripts/UI/AdaptiveScreen":13,"./assets/frame/scripts/UI/BindNode":16,"./assets/frame/scripts/SDK/GameMsg":22,"./assets/frame/scripts/UI/Item/Tip":23,"./assets/frame/scripts/Utils/Tools":30,"./assets/frame/scripts/Utils/HitTest":34,"./assets/frame/scripts/Utils/BoundingBoxHelp":35,"./assets/game/scripts/Data/EventType":38,"./assets/frame/scripts/Data/FrameMsgType":39,"./assets/frame/scripts/Data/FrameSyncData":40,"./assets/frame/scripts/Utils/MathUtils":41,"./assets/game/scripts/Manager/GameManager":44,"./assets/game/scripts/Manager/EditorManager":47,"./assets/game/scripts/Data/CustomSyncData":48,"./assets/game/scripts/UI/Item/SoundConfig":51,"./assets/frame/scripts/Http/NetWork":3,"./assets/frame/scripts/UI/Item/MaskRecover":2,"./assets/frame/scripts/Manager/SoundManager":6,"./assets/frame/scripts/SDK/T2M":8,"./assets/frame/scripts/Utils/AudioPlayExtension":9,"./assets/frame/scripts/Manager/UIManager":11,"./assets/frame/scripts/Manager/ReportManager":12,"./assets/frame/scripts/UI/GameMain":14,"./assets/frame/scripts/Manager/SyncDataManager":17,"./assets/frame/scripts/UI/BaseUI":18,"./assets/frame/scripts/UI/BaseFrameUI":21,"./assets/frame/scripts/UI/Panel/BaseGamePanel":7,"./assets/frame/scripts/Utils/UIHelp":33,"./assets/frame/scripts/Utils/BoundingBoxDemo":43,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":15,"./assets/frame/scripts/UI/Item/TitleNode":19,"./assets/frame/scripts/UI/Item/replayBtn":20,"./assets/frame/scripts/UI/Item/MaskGlobal":24,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":25,"./assets/frame/scripts/UI/Panel/OverTips":26,"./assets/frame/scripts/UI/Panel/ErrorPanel":27,"./assets/frame/scripts/UI/Panel/LoadingUI":28,"./assets/frame/scripts/UI/Panel/AffirmTips":29,"./assets/frame/scripts/UI/Panel/StarCount":31,"./assets/frame/scripts/UI/Panel/TipUI":32,"./assets/frame/scripts/UI/Panel/SubmissionPanel":36,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":37,"./assets/game/scripts/UI/Components/ButtonSync":42,"./assets/game/scripts/UI/Item/DituDrag":45,"./assets/game/scripts/UI/panel/TeacherPanel":46,"./assets/game/scripts/UI/panel/GamePanel":49,"./assets/game/scripts/UI/Item/FillArea":50,"./assets/game/scripts/UI/Components/DragSync":52,"./assets/game/scripts/UI/Item/GameUI":53},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../Data/FrameMsgType":39,"../../Manager/UIManager":11,"../BindNode":16,"../../Manager/ListenerManager":10},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../Manager/UIManager":11,"../../../game/scripts/Data/ConstValue":1,"../SDK/GameMsg":22,"../Utils/UIHelp":33},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../Http/NetWork":3,"../SDK/GameMsg":22,"../Data/FrameConstValue":5,"./ListenerManager":10,"../Data/FrameMsgType":39,"./UIManager":11},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":1,"../../Data/FrameMsgType":39,"../../../../game/scripts/Manager/EditorManager":47,"../../Manager/ListenerManager":10,"../../Manager/SyncDataManager":17,"../../Manager/ReportManager":12,"../../SDK/GameMsg":22,"../../Manager/SoundManager":6,"../../Http/NetWork":3,"../../Manager/UIManager":11,"../../SDK/T2M":8,"../../Utils/UIHelp":33,"../BaseUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../Manager/SyncDataManager":17,"../Data/FrameMsgType":39,"../Utils/UIHelp":33,"./GameMsg":22,"../Manager/ListenerManager":10,"../Http/NetWork":3},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"./../Manager/SoundManager":6},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../UI/BaseUI":18},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{"../../../game/scripts/Data/ConstValue":1,"../SDK/GameMsg":22,"../../../game/scripts/Manager/EditorManager":47},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":47,"../Manager/ReportManager":12,"../Data/FrameMsgType":39,"../Http/NetWork":3,"../Manager/ListenerManager":10,"../Manager/SyncDataManager":17,"../Manager/SoundManager":6,"../Manager/UIManager":11,"../SDK/GameMsg":22,"../SDK/T2M":8,"../Utils/UIHelp":33},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Data/FrameMsgType":39,"../../Manager/ListenerManager":10,"../BindNode":16},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../../game/scripts/Data/CustomSyncData":48,"../../../frame/scripts/Manager/ReportManager":12,"../../../frame/scripts/Data/FrameSyncData":40},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../Data/FrameConstValue":5,"../Manager/ListenerManager":10,"./BindNode":16},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../../Manager/ListenerManager":10,"../../Data/FrameMsgType":39},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../SDK/T2M":8,"../../Data/FrameMsgType":39},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../Data/FrameConstValue":5,"./BaseUI":18},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../Utils/UIHelp":33,"../../Data/FrameMsgType":39,"../../Manager/ListenerManager":10,"../BindNode":16,"../../Manager/UIManager":11},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":47,"../../Http/NetWork":3,"../../../../game/scripts/Data/ConstValue":1,"../../Utils/UIHelp":33,"../BaseUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../../Utils/Tools":30,"../../Utils/UIHelp":33,"./../../Manager/SoundManager":6,"../BaseFrameUI":21,"../../SDK/T2M":8,"../../Manager/UIManager":11,"../../../../game/scripts/Data/ConstValue":1,"../../Data/FrameMsgType":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"./../../Manager/SoundManager":6,"../../Utils/UIHelp":33,"./../../SDK/GameMsg":22,"./../BaseFrameUI":21},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../../../game/scripts/UI/panel/TeacherPanel":46,"../../../../game/scripts/Data/ConstValue":1,"../../Http/NetWork":3,"../../../../game/scripts/UI/panel/GamePanel":49,"../../SDK/GameMsg":22,"../../Manager/UIManager":11,"../../Manager/SoundManager":6,"../BaseFrameUI":21},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../SDK/T2M":8,"../../Utils/UIHelp":33,"../../Data/FrameMsgType":39,"../BaseFrameUI":21},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{"../BaseFrameUI":21,"./../../Manager/SoundManager":6,"../../Utils/Tools":30,"../../Utils/UIHelp":33,"../../Manager/ReportManager":12,"../../../../game/scripts/Manager/EditorManager":47,"../../../../game/scripts/Data/ConstValue":1},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../Item/Tip":23,"../BaseFrameUI":21},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":49,"../../../game/scripts/UI/panel/TeacherPanel":46,"../Data/FrameMsgType":39,"../Manager/UIManager":11,"../Manager/ListenerManager":10,"../UI/Panel/ErrorPanel":27,"../UI/Panel/SubmissionPanel":36,"../UI/Panel/OverTips":26,"../UI/Panel/AffirmTips":29,"../UI/Panel/StarCount":31,"../UI/Panel/UploadAndReturnPanel":37,"../UI/Panel/TipUI":32},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../../Http/NetWork":3,"../../../../game/scripts/Data/ConstValue":1,"../BaseFrameUI":21,"../../Utils/UIHelp":33,"../../../../game/scripts/Manager/EditorManager":47},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"./../../Manager/ListenerManager":10,"../../Data/FrameMsgType":39,"../BaseFrameUI":21,"../../Manager/ReportManager":12,"../../../../game/scripts/Manager/EditorManager":47,"../../Utils/UIHelp":33,"../../Manager/SoundManager":6,"../../SDK/T2M":8},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":8},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"./BoundingBoxHelp":35},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":10,"./FillArea":50,"../../Data/EventType":38},"path":"preview-scripts/assets/game/scripts/UI/Item/DituDrag.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":10,"../../../../frame/scripts/Manager/ReportManager":12,"../../../../frame/scripts/Data/FrameMsgType":39,"../../../../frame/scripts/Manager/UIManager":11,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":25,"../../Manager/EditorManager":47,"../../../../frame/scripts/Utils/UIHelp":33,"./GamePanel":49},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":10,"../../../../frame/scripts/Manager/SyncDataManager":17,"../../../../frame/scripts/UI/Panel/BaseGamePanel":7,"../../Data/EventType":38},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{"../../../../frame/scripts/Manager/SoundManager":6,"./SoundConfig":51,"../../../../frame/scripts/Utils/HitTest":34,"../../../../frame/scripts/Manager/ListenerManager":10,"./DituDrag":45,"../../Data/EventType":38,"../../../../frame/scripts/Utils/Tools":30},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":8},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":10,"../../../../frame/scripts/Manager/SoundManager":6,"../../../../frame/scripts/Utils/Tools":30,"../../../../frame/scripts/Manager/SyncDataManager":17,"../../Data/EventType":38,"./DituDrag":45,"../../../../frame/scripts/Utils/UIHelp":33,"./SoundConfig":51,"./FillArea":50},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    