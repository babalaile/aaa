(function ($) {
    /**
     * @param {Object} options
     * @param {Array}  options.list  瀛樺偍濂栧搧鐨勭殑鍒楄〃锛宔xample [{1:{name:'璋㈣阿鍙備笌',image:'1.jpg'}}]
     * @param {Object} options.outerCircle {color:'#df1e15'} 澶栧湀棰滆壊锛岄粯璁ょ孩鑹�
     * @param {Object} options.innerCircle {color:'#f4ad26'} 閲屽湀棰滆壊锛岄粯璁ら粍鑹�
     * @param {Array}  options.dots ['#fbf0a9', '#fbb936'] 瑁呴グ鐐归鑹� 锛岄粯璁ゆ繁榛勬祬榛勪氦鏇�
     * @param {Array}  options.disk ['#ffb933', '#ffe8b5', '#ffb933', '#ffd57c', '#ffb933', '#ffe8b5', '#ffd57c'] 涓績濂栫洏鐨勯鑹诧紝榛樿7褰�
     * @param {Object} options.title {color:'#5c1e08',font:'19px Arial'} 濂栧搧鏍囬棰滆壊
     */
    $.fn.WheelSurf = function (options) {
        var _default = {
            outerCircle: {
                color: '#df1e15'
            },
            innerCircle: {
                color: '#f4ad26'
            },
            dots: ['#fbf0a9', '#fbb936'],
            disk: ['#ffb933', '#ffe8b5', '#ffb933', '#ffd57c', '#ffb933', '#ffe8b5', '#ffd57c'],
            title: {
                color: '#5c1e08',
                font: '19px Arial'
            }
        }

        $.extend(_default,options)
        // 鐢诲竷涓績绉诲姩鍒癱anvas涓績
        var _this = this[0],
            width = _this.width,
            height = _this.height,
            ctx = _this.getContext("2d"),
            imgs = [],
            awardTitle = [],
            awardPic = []
        for (var item in _default.list) {
            awardTitle.push(_default.list[item].name)
            imgs.push(_default.list[item].image)
        }
        var num = imgs.length
        // 鍦嗗績
        var x = width / 2
        var y = height / 2
        ctx.translate(x, y)

        return {
            init: function (angelTo) {
                angelTo = angelTo || 0;

                ctx.clearRect(-this.width, -this.height, this.width, this.height);

                // 骞冲垎瑙掑害
                var angel = (2 * Math.PI / 360) * (360 / num);
                var startAngel = 2 * Math.PI / 360 * (-90)
                var endAngel = 2 * Math.PI / 360 * (-90) + angel

                // 鏃嬭浆鐢诲竷
                ctx.save()
                ctx.rotate(angelTo * Math.PI / 180);
                // 鐢诲鍦�
                ctx.beginPath();
                ctx.lineWidth = 25;
                ctx.strokeStyle = _default.outerCircle.color;
                ctx.arc(0, 0, 243, 0, 2 * Math.PI)
                ctx.stroke();
                // 鐢婚噷鍦�
                ctx.beginPath();
                ctx.lineWidth = 23;
                ctx.strokeStyle = _default.innerCircle.color;
                ctx.arc(0, 0, 218, 0, 2 * Math.PI)
                ctx.stroke();

                // 瑁呴グ鐐�
                var dotColor = _default.dots
                for (var i = 0; i < 12; i++) {
                    // 瑁呴グ鐐� 鍦嗗績 鍧愭爣璁＄畻
                    ctx.beginPath();
                    var radius = 230;
                    var xr = radius * Math.cos(startAngel)
                    var yr = radius * Math.sin(startAngel)

                    ctx.fillStyle = dotColor[i % dotColor.length]
                    ctx.arc(xr, yr, 11, 0, 2 * Math.PI)
                    ctx.fill()

                    startAngel += (2 * Math.PI / 360) * (360 / 12);

                }
                // 鐢婚噷杞洏                
                var colors = _default.disk
                for (var i = 0; i < num; i++) {
                    ctx.beginPath();
                    ctx.lineWidth = 208;
                    ctx.strokeStyle = colors[i % colors.length]
                    ctx.arc(0, 0, 104, startAngel, endAngel)
                    ctx.stroke();
                    startAngel = endAngel
                    endAngel += angel
                }
                // 娣诲姞濂栧搧
                function loadImg() {

                    var dtd = $.Deferred()
                    var countImg = 0
                    if (awardPic.length) {
                        return dtd.resolve(awardPic);
                    }
                    for (var i = 0; i < num; i++) {
                        var img = new Image()
                        awardPic.push(img)

                        img.src = imgs[i]
                        img.onload = function () {
                            countImg++
                            if (countImg == num) {
                                dtd.resolve(awardPic);
                            }
                        }
                    }
                    return dtd.promise()
                }

                $.when(loadImg()).done(function (awardPic) {

                    startAngel = angel / 2
                    for (var i = 0; i < num; i++) {
                        ctx.save();
                        ctx.rotate(startAngel)
                        ctx.drawImage(awardPic[i], -48, -48 - 130);
                        ctx.font = _default.title.font;
                        ctx.fillStyle = _default.title.color
                        ctx.textAlign = "center";
                        ctx.fillText(awardTitle[i], 0, -170);
                        startAngel += angel
                        ctx.restore();
                    }
                })
                ctx.restore();
            },
            /**
             * @param angel 鏃嬭浆瑙掑害
             * @param callback 杞畬鍚庣殑鍥炶皟鍑芥暟
             */
            lottery: function (angel, callback) {
                angel = angel || 0
                angel = 360-angel
                angel += 720
                // 鍩哄€硷紙鍑忛€燂級
                var baseStep = 30
                // 璧峰婊氬姩閫熷害
                var baseSpeed = 0.3
                // 姝ラ暱
                var count = 1;
                var _this = this
                var timer = setInterval(function () {

                    _this.init(count)
                    if (count == angel) {
                        clearInterval(timer)
                        if (typeof callback == "function") {
                            callback()
                        }
                    }
                    count = count + baseStep * (((angel - count) / angel) > baseSpeed ? baseSpeed : ((angel - count) / angel))
                    if (angel - count < 0.5) {
                        count = angel
                    }

                }, 25)
            }
        }

    }
}(jQuery))