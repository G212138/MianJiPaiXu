
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":10,"./assets/game/scripts/Manager/EditorManager":43,"./assets/game/scripts/Manager/GameManager":47,"./assets/game/scripts/SkeletonExt":3,"./assets/game/scripts/Data/ConstValue":46,"./assets/game/scripts/UI/Components/ButtonSync":4,"./assets/game/scripts/UI/Item/DituDrag":49,"./assets/game/scripts/UI/Item/FillArea":50,"./assets/game/scripts/UI/Item/SoundConfig":51,"./assets/game/scripts/UI/Item/GameUI":44,"./assets/game/scripts/UI/panel/TeacherPanel":45,"./assets/game/scripts/UI/panel/GamePanel":53,"./assets/game/scripts/UI/Components/DragSync":52,"./assets/frame/scripts/Data/FrameConstValue":41,"./assets/frame/scripts/Http/NetWork":6,"./assets/frame/scripts/Manager/ReportManager":5,"./assets/frame/scripts/Manager/UIManager":13,"./assets/frame/scripts/Manager/SoundManager":11,"./assets/frame/scripts/Manager/SyncDataManager":12,"./assets/frame/scripts/Manager/ListenerManager":14,"./assets/frame/scripts/SDK/T2M":7,"./assets/frame/scripts/SDK/GameMsg":16,"./assets/frame/scripts/UI/BaseUI":17,"./assets/frame/scripts/UI/BaseFrameUI":37,"./assets/frame/scripts/UI/BindNode":18,"./assets/frame/scripts/UI/GameMain":15,"./assets/frame/scripts/UI/AdaptiveScreen":20,"./assets/frame/scripts/UI/Item/MaskRecover":22,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":1,"./assets/frame/scripts/UI/Item/Tip":23,"./assets/frame/scripts/UI/Item/TitleNode":21,"./assets/frame/scripts/UI/Item/replayBtn":25,"./assets/frame/scripts/UI/Item/MaskGlobal":19,"./assets/frame/scripts/UI/Panel/StarCount":27,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":33,"./assets/frame/scripts/UI/Panel/LoadingUI":29,"./assets/frame/scripts/UI/Panel/BaseGamePanel":26,"./assets/frame/scripts/UI/Panel/ErrorPanel":24,"./assets/frame/scripts/UI/Panel/OverTips":34,"./assets/frame/scripts/UI/Panel/SubmissionPanel":28,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":31,"./assets/frame/scripts/UI/Panel/TipUI":30,"./assets/frame/scripts/UI/Panel/AffirmTips":8,"./assets/frame/scripts/Utils/AudioPlayExtension":9,"./assets/frame/scripts/Utils/MathUtils":40,"./assets/frame/scripts/Utils/HitTest":35,"./assets/frame/scripts/Utils/Tools":42,"./assets/frame/scripts/Utils/BoundingBoxHelp":38,"./assets/frame/scripts/Utils/UIHelp":32,"./assets/frame/scripts/Utils/BoundingBoxDemo":36,"./assets/frame/scripts/Data/FrameMsgType":2,"./assets/frame/scripts/Data/FrameSyncData":39,"./assets/game/scripts/Data/EventType":48},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":2,"../BindNode":18,"../../Manager/ListenerManager":14},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":43,"../../../game/scripts/Data/ConstValue":46,"../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../Manager/UIManager":13,"../SDK/GameMsg":16,"../Utils/UIHelp":32,"../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../Data/FrameMsgType":2,"../Manager/ListenerManager":14,"../Manager/SyncDataManager":12,"../Http/NetWork":6,"../Utils/UIHelp":32,"./GameMsg":16},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../Data/FrameMsgType":2,"../../SDK/T2M":7,"../../Utils/UIHelp":32,"../BaseFrameUI":37},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"./../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../SDK/GameMsg":16,"../Data/FrameConstValue":41,"../Data/FrameMsgType":2,"./UIManager":13,"../Http/NetWork":6,"./ListenerManager":14},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../../../game/scripts/Data/CustomSyncData":10,"../../../frame/scripts/Manager/ReportManager":5,"../../../frame/scripts/Data/FrameSyncData":39},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../UI/BaseUI":17},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":43,"../Http/NetWork":6,"../Data/FrameMsgType":2,"../Manager/ListenerManager":14,"../Manager/SoundManager":11,"../Manager/ReportManager":5,"../SDK/GameMsg":16,"../Manager/SyncDataManager":12,"../SDK/T2M":7,"../Utils/UIHelp":32,"../Manager/UIManager":13},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"./BindNode":18,"../Data/FrameConstValue":41,"../Manager/ListenerManager":14},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Data/FrameMsgType":2,"../../Manager/ListenerManager":14,"../../Manager/UIManager":13,"../../Utils/UIHelp":32,"../BindNode":18},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../../Data/FrameMsgType":2,"../../Manager/ListenerManager":14},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../Manager/ListenerManager":14,"../../Manager/UIManager":13,"../../Data/FrameMsgType":2,"../BindNode":18},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"./../../Manager/SoundManager":11,"../../Utils/UIHelp":32,"./../BaseFrameUI":37,"./../../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../SDK/T2M":7,"../../Data/FrameMsgType":2},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":46,"../../../../game/scripts/Manager/EditorManager":43,"../../Manager/ListenerManager":14,"../../Http/NetWork":6,"../../Data/FrameMsgType":2,"../../Manager/SoundManager":11,"../../Manager/SyncDataManager":12,"../../Manager/ReportManager":5,"../../Manager/UIManager":13,"../../Utils/UIHelp":32,"../../SDK/T2M":7,"../../SDK/GameMsg":16,"../BaseUI":17},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../../Utils/Tools":42,"./../../Manager/SoundManager":11,"../BaseFrameUI":37,"../../../../game/scripts/Manager/EditorManager":43,"../../Manager/ReportManager":5,"../../Utils/UIHelp":32,"../../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../../Utils/UIHelp":32,"../BaseFrameUI":37,"../../Http/NetWork":6,"../../../../game/scripts/Manager/EditorManager":43,"../../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":46,"../../Manager/UIManager":13,"../../../../game/scripts/UI/panel/TeacherPanel":45,"../../Http/NetWork":6,"../../SDK/GameMsg":16,"../../../../game/scripts/UI/panel/GamePanel":53,"../BaseFrameUI":37,"../../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../BaseFrameUI":37,"../Item/Tip":23},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../../Data/FrameMsgType":2,"../BaseFrameUI":37,"../../Manager/ReportManager":5,"./../../Manager/ListenerManager":14,"../../SDK/T2M":7,"../../Utils/UIHelp":32,"../../Manager/SoundManager":11,"../../../../game/scripts/Manager/EditorManager":43},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{"../UI/Panel/AffirmTips":8,"../../../game/scripts/UI/panel/GamePanel":53,"../../../game/scripts/UI/panel/TeacherPanel":45,"../Manager/ListenerManager":14,"../Manager/UIManager":13,"../Data/FrameMsgType":2,"../UI/Panel/SubmissionPanel":28,"../UI/Panel/StarCount":27,"../UI/Panel/OverTips":34,"../UI/Panel/UploadAndReturnPanel":31,"../UI/Panel/TipUI":30,"../UI/Panel/ErrorPanel":24},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":43,"../../Http/NetWork":6,"../../../../game/scripts/Data/ConstValue":46,"../../Utils/UIHelp":32,"../BaseUI":17},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"./../../Manager/SoundManager":11,"../../SDK/T2M":7,"../../Utils/Tools":42,"../BaseFrameUI":37,"../../Utils/UIHelp":32,"../../Manager/UIManager":13,"../../../../game/scripts/Data/ConstValue":46,"../../Data/FrameMsgType":2},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{"./BoundingBoxHelp":38},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../Data/FrameConstValue":41,"./BaseUI":17},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"./DituDrag":49,"./SoundConfig":51,"./FillArea":50,"../../Data/EventType":48,"../../../../frame/scripts/Manager/SoundManager":11,"../../../../frame/scripts/Utils/Tools":42,"../../../../frame/scripts/Utils/UIHelp":32,"../../../../frame/scripts/Manager/SyncDataManager":12,"../../../../frame/scripts/Manager/ListenerManager":14},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":14,"../../../../frame/scripts/Manager/UIManager":13,"../../../../frame/scripts/Data/FrameMsgType":2,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":33,"../../../../frame/scripts/Manager/ReportManager":5,"../../../../frame/scripts/Utils/UIHelp":32,"./GamePanel":53,"../../Manager/EditorManager":43},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":14,"../../Data/EventType":48,"./FillArea":50},"path":"preview-scripts/assets/game/scripts/UI/Item/DituDrag.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":14,"../../../../frame/scripts/Manager/SoundManager":11,"../../../../frame/scripts/Utils/HitTest":35,"../../Data/EventType":48,"../../../../frame/scripts/Utils/Tools":42,"./SoundConfig":51,"./DituDrag":49},"path":"preview-scripts/assets/game/scripts/UI/Item/FillArea.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/DragSync.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":14,"../../../../frame/scripts/Manager/SyncDataManager":12,"../../Data/EventType":48,"../../../../frame/scripts/UI/Panel/BaseGamePanel":26},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"}];
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
    