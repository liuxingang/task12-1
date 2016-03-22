// 使用单例模式创建代码块，把相关方法和属性组织在一个不会被多次实例化的单例中，
//可以使代码的调试和维护变得更轻松.

var Baidu = (function() {
        return {
            init: function() {
                this.Click._init();
                this.Mouseover._init();
            },
            //点击事件
            Click: {
                _init: function() {
                    this.menu_nav();
                },
                //标签切换
                menu_nav: function() {
                    $(".menu-nav-lf span").each(function(index) { //遍历span
                        $(this).click(function() {
                            $("span.menu_hover").removeClass("menu_hover"); //点击span时，移除类menu_hover
                            $(".menu-nav-lf span").eq(index).addClass("menu_hover"); //在当前元素上增加类 menu_hover
                            //当点击元素时，显示对应的div
                            function demo(i) {
                                var d = i + 1;
                                $(".main_content").children().css("display", "none");
                                $(" #s_content_" + d).css("display", "block");
                            }
                            if (index >= 0 && index < 4) {
                                demo(index);
                            }
                        });
                    });
                }
            },
            //鼠标划过效果
            Mouseover: {
                _init: function() {
                    this.more_docu();
                    this.top_right_user();
                    this.top_right_set();
                    this.weather_wrap();
                },

                // 更多产品
                more_docu: function() {
                    var rgHeight = $(window).height();
                    $(".rg_more").height(rgHeight); //使div高度等于当前窗口高度
                    $(".more_docu").mouseenter(function() {
                        $(".rg_more").css("display", "block").mouseleave(
                            function() {
                                $(".rg_more").css("display", "none")
                            }
                        )
                    });
                },
                //hover '用户设置'
                top_right_user: function() {
                    $("#top_right_user").hover(function() {
                        $("#usename_menu").css("display", "block");
                    }, function() {
                        $("#usename_menu").css("display", "none");
                    });
                    $("#usename_menu").hover(function() {
                        $("#usename_menu").css("display", "block");
                    }, function() {
                        $("#usename_menu").css("display", "none");
                    });
                },
                //hover '设置'
                top_right_set: function() {
                    $("#top_right_set").hover(function() {
                        $("#user_set_menu").css("display", "block");
                    }, function() {
                        $("#user_set_menu").css("display", "none");
                    });
                    $("#user_set_menu").hover(function() {
                        $("#user_set_menu").css("display", "block");
                    }, function() {
                        $("#user_set_menu").css("display", "none");
                    });
                },
                //hover '天气'
                weather_wrap: function() {
                    $(".weather-wrap").mouseenter(function() {
                        $(".set_weather").css("display", "block").mouseleave(
                            function() {
                                $(".set_weather").css("display", "none")
                            }
                        )
                    });
                }

            },
        }
    })();

$('document').ready(function() {
    Baidu.init();
});