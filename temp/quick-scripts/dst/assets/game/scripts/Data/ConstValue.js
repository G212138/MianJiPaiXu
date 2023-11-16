
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2ee0BC2l1Pp47nuM279OIO', 'ConstValue');
// game/scripts/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    ConstValue.IS_TEACHER = true; //是否为教师端版本
    ConstValue.CoursewareKey = 'MianJiPaiXu_2ns3Eh3K6s2NB8'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    ConstValue.GameName = '2023-3寒-1讲-《拯救母亲河》'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    ConstValue.Subject = 1; //学科（1理科 2语文 3英语）
    return ConstValue;
}());
exports.ConstValue = ConstValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBT0EsQ0FBQztJQU4wQixzQkFBVyxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtJQUM5QyxxQkFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVU7SUFDN0Isd0JBQWEsR0FBRyw0QkFBNEIsQ0FBQyxDQUFDLHVDQUF1QztJQUNyRixtQkFBUSxHQUFHLG9CQUFvQixDQUFDLENBQUMsNkJBQTZCO0lBQzlELGtCQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO0lBRXpELGlCQUFDO0NBUEQsQUFPQyxJQUFBO0FBUFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uc3RWYWx1ZSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJU19FRElUSU9OUyA9IHRydWU7IC8v5piv5ZCm5Li65Y+R5biD54mI5pys77yM55So5LqO5pWw5o2u5LiK5oqlIOWPiiBsb2fovpPlh7rmjqfliLZcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElTX1RFQUNIRVIgPSB0cnVlOyAvL+aYr+WQpuS4uuaVmeW4iOerr+eJiOacrFxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ291cnNld2FyZUtleSA9ICdNaWFuSmlQYWlYdV8ybnMzRWgzSzZzMk5COCc7IC8v5q+P5Liq6K++5Lu25ZSv5LiA55qEa2V5IOW3peeoi+WQjSsxNOS9jemaj+acuuWtl+espuS4suOAgu+8iOiEmuacrOWIm+W7uuW3peeoi+aXtuiHquWKqOeUn+aIkO+8iVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR2FtZU5hbWUgPSAnMjAyMy0z5a+SLTHorrIt44CK5ouv5pWR5q+N5Lqy5rKz44CLJzsgLy/muLjmiI/lkI3kuK3mlofmj4/ov7DvvIznlKjkuo7mlbDmja7kuIrmiqUgIO+8iOiEmuacrOWIm+W7uuW3peeoi+aXtui+k+WFpe+8iVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU3ViamVjdCA9IDE7IC8v5a2m56eR77yIMeeQhuenkSAy6K+t5paHIDPoi7Hor63vvIlcblxufVxuIl19