window.onload = function () {
    //机器人右边渐显效果
    var robotp = document.getElementsByClassName("robotp");
    var threepart = document.getElementsByClassName("threepart");
    var sanjiao = document.getElementsByClassName("sanjiaoxing");
    var a = [0, 0, 0];
    var speed = 0;
    var timer = [null, null, null];
    for (var i = 0; i < 3; i++) {
        (function (e) {
            threepart[e].onmouseover = function () {
                show(100);
                sanjiao[e].style.borderLeft = "10px solid #0366D6";
            };
            threepart[e].onmouseout = function () {
                show(0);
                sanjiao[e].style.borderLeft = "10px solid #777778";
            };
            function show(iTarget) {
                clearInterval(timer[e]);
                timer[e] = setInterval(function () {
                    if (a[e] < iTarget) {
                        speed = 10;
                    }
                    else {
                        speed = -10;
                    };
                    if (a[e] == iTarget) {
                        clearInterval(timer[e]);
                    }
                    else {
                        a[e] += speed;
                        robotp[e].style.opacity = a[e] / 100;
                    };
                }, 20);
            };
        }(i))
    }
    //七个球的放大缩小效果
    var ball = document.getElementsByClassName("ball");
    var ballsmall = document.getElementsByClassName("ballsmall");
    var timerover1 = [null, null, null, null, null, null, null];
    var timerout1 = [null, null, null, null, null, null, null];
    var marginLeft = 0;
    var marginTop = 0;
    var width = [96, 96, 96, 96, 96, 96, 96]
    for (var i = 0; i < 7; i++) {
        (function (e) {
            ball[e].onmouseover = function () {
                clearInterval(timerout1[e]);
                timerover1[e] = setInterval(function () {
                    if (width[e] >= 120) {
                        clearInterval(timerover1[e]);
                    }
                    else {
                        width[e] = width[e] + 2;
                        marginLeft = marginLeft - 1;
                        marginTop = marginTop - 1;
                        ball[e].style.width = width[e] + 'px';
                        ball[e].style.height = width[e] + 'px';
                        ball[e].style.marginLeft = marginLeft + 'px';
                        ball[e].style.marginTop = marginTop + 'px';
                    }
                }, 20)
                ballsmall[e].style.display = "block";
            }
            ball[e].onmouseout = function () {
                clearInterval(timerover1[e]);
                timerout1[e] = setInterval(function () {
                    if (width[e] <= 96) {
                        clearInterval(timerout1[e]);
                    }
                    else {
                        width[e] = width[e] + -2;
                        marginLeft = marginLeft + 1;
                        marginTop = marginTop + 1;
                        ball[e].style.width = width[e] + 'px';
                        ball[e].style.height = width[e] + 'px';
                        ball[e].style.marginLeft = marginLeft + 'px';
                        ball[e].style.marginTop = marginTop + 'px';
                    }
                }, 20);
                ballsmall[e].style.display = "none";
            };
        })(i)//传送i的实值
    }
    //滑动条
    var bigmove = document.getElementById("bigmove");
    var move = document.getElementById("move");
    move.onmousedown = function (e) {
        var x = (e || window.event).clientX;
        var moveleft = move.offsetLeft;
        var max = bigmove.offsetWidth - this.offsetWidth;
        //移动鼠标
        document.onmousemove = function (e) {
            var thisX = (e || window.event).clientX;//client是指对象可见的宽度，不包滚动条等边线，会随着窗口的显示大小而改变
            var to = Math.min(max, Math.max(-2, moveleft + (thisX - x)));//限定宽度
            move.style.left = to + 'px';
        };
        //抬起鼠标
        document.onmouseup = function () {
            document.onmousemove = null;//代表清除 onmousemove 事件。
        };
    }
    var humanmove = document.getElementById("humanmove");
    var move = document.getElementById("move");
    move.onmousemove = function () {
        var moveleft = move.offsetLeft
        humanmove.style.left = - moveleft + "px";
    }
    //三个球
    var ballp = document.getElementsByClassName("ballp");
    var ballaa = document.getElementsByClassName("ballaa");
    var threeball = document.getElementsByClassName("threeball");
    var ballson = document.getElementsByClassName("ballson");
    var partina = document.getElementsByClassName("partina");
    var balltitle = document.getElementsByClassName("balltitle");
    var sanjiao = document.getElementsByClassName("sanjiaoxing");
    var timerover3 = [null, null, null];
    var timerout3 = [null, null, null];
    var color = ["#FB8532", "#0366D6", "#6F42C1"];
    for (var i = 0; i < 3; i++) {
        (
            function (e) {
                var width3 = 225 - (e * 50);
                threeball[e].onmouseover = function () {
                    ballbigger();
                    ballaa[e].style.border = "1px solid #D1D5DA";
                    sanjiao[e + 3].style.borderLeft = "10px solid " + color[e];
                };
                threeball[e].onmouseout = function () {
                    ballsmaller();
                    ballaa[e].style.border = "none";
                    sanjiao[e + 3].style.borderLeft = "10px solid #777778";
                };
                partina[e].onmouseover = function () {
                    ballbigger();
                    ballaa[e].style.border = "1px solid #D1D5DA";
                    sanjiao[e + 3].style.borderLeft = "10px solid " + color[e];
                };
                partina[e].onmouseout = function () {
                    ballsmaller();
                    ballaa[e].style.border = "none";
                    sanjiao[e + 3].style.borderLeft = "10px solid #777778";
                };
                function ballbigger() {
                    clearInterval(timerout3[e]);
                    timerover3[e] = setInterval(function () {
                        if (width3 >= 240 - (e * 50)) {
                            clearInterval(timerover3[e]);
                        }
                        else {
                            width3 = width3 + 2;
                            marginLeft = marginLeft - 1;
                            marginTop = marginTop - 1;
                            threeball[e].style.width = width3 + 'px';
                            threeball[e].style.height = width3 + 'px';
                            threeball[e].style.marginLeft = marginLeft + 'px';
                            threeball[e].style.marginTop = marginTop + 'px';
                            threeball[e].style.borderRadius = width3 + 'px';
                        }
                    }, 20);
                };
                function ballsmaller() {
                    clearInterval(timerover3[e]);
                    timerout3[e] = setInterval(function () {
                        if (width3 <= 225 - (e * 50)) {
                            clearInterval(timerout3[e]);
                        }
                        else {
                            width3 = width3 - 2;
                            marginLeft = marginLeft + 1;
                            marginTop = marginTop + 1;
                            threeball[e].style.width = width3 + 'px';
                            threeball[e].style.height = width3 + 'px';
                            threeball[e].style.marginLeft = marginLeft + 'px';
                            threeball[e].style.marginTop = marginTop + 'px';
                            threeball[e].style.borderRadius = width3 + 'px';
                        }
                    }, 20);
                };
            }(i)
        )
    }
    //7人墙
    var humanimg = document.getElementsByClassName("humanimg");
    var humanhspan = document.getElementsByClassName("humanhspan");
    var humanp = document.getElementsByClassName("humanp");
    var humana = document.getElementsByClassName("humana");
    var timerover2 = [null, null, null, null, null, null, null];
    var timerout2 = [null, null, null, null, null, null, null];
    var width2 = [157, 157, 157, 157, 157, 157, 157, 157];
    for (var i = 0; i < 7; i++) {
        (function (e) {
            humana[e].onmouseover = function () {
                clearInterval(timerout2[e]);
                timerover2[e] = setInterval(function () {
                    if (width2[e] >= 177) {
                        clearInterval(timerover2[e]);
                    }
                    else {
                        width2[e] = width2[e] + 2;
                        marginLeft = marginLeft - 1;
                        marginTop = marginTop - 1;
                        humanimg[e].style.width = width2[e] + 'px';
                        humanimg[e].style.height = width2[e] + 'px';
                        humanimg[e].style.marginLeft = marginLeft + 'px';
                        humanimg[e].style.marginTop = marginTop + 'px';
                    }

                    if (e == 2 || e == 5) {
                        humanhspan[e].style.color = "#6F42C1";
                        humanhspan[e].style.textDecoration = "underline";
                        humanhspan[e].style.fontSize = "28px";
                        humanp[e].style.fontSize = "13px";

                    }

                    else {
                        humanhspan[e].style.color = "#E36209";
                        humanhspan[e].style.textDecoration = "underline";
                        humanhspan[e].style.fontSize = "28px";
                        humanp[e].style.fontSize = "13px";
                    }
                }, 20)
            }
            humana[e].onmouseout = function () {
                clearInterval(timerover2[e]);
                timerout2[e] = setInterval(function () {
                    if (width2[e] <= 157) {
                        clearInterval(timerout2[e]);
                    }
                    else {
                        width2[e] = width2[e] + -2;
                        marginLeft = marginLeft + 1;
                        marginTop = marginTop + 1;
                        humanimg[e].style.width = width2[e] + 'px';
                        humanimg[e].style.height = width2[e] + 'px';
                        humanimg[e].style.marginLeft = marginLeft + 'px';
                        humanimg[e].style.marginTop = marginTop + 'px';
                    }
                    humanhspan[e].style.color = "black";
                    humanhspan[e].style.textDecoration = "none";
                    humanhspan[e].style.fontSize = "24px";
                    humanp[e].style.fontSize = "12px";
                }, 20);
            };
        })(i)
    }
}//end