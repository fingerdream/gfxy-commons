jQuery(document).ready(function () {
    $.backstretch([
        basePath + "base/img/backgrounds/4.jpg"
        , basePath + "base/img/backgrounds/5.jpg"
        , basePath + "base/img/backgrounds/6.jpg"
    ], {duration: 1000000000, fade: 1000});
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function () {
        $(this).removeClass('input-error');
    });
    $('#code').on('click', function () {
        $(this).prop('src', basePath + 'login/getCode.do?t=' + new Date().getTime());
    });
    var height = document.body.clientHeight;
    document.getElementById('username').focus();
    $(".inner-bg").animate({paddingTop: (height * 0.02) + "px"}, "slow");
    $('#code').click();
});
if (window != top) {
    top.location.href = "http://" + window.location.host + "/portal";
}

//校验验证码
function validate() {
    var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写
    if (inputCode.length <= 0) { //若输入的验证码长度为0
        alert("请输入验证码！"); //则弹出请输入验证码
    }
    else if (inputCode != code) { //若输入的验证码与产生的验证码不一致时
        alert("验证码输入错误！@_@"); //则弹出验证码输入错误
        createCode();//刷新验证码
        document.getElementById("input").value = "";//清空文本框
    }
    else { //输入正确时
        alert("^-^"); //弹出^-^
    }
}
function checkForm() {
    //验证用户名密码是否为空的标识,都不为空则为true
    var username = document.loginUser.elements["username"];
    var password = document.loginUser.elements["password"];
    var checkCode = document.loginUser.elements["checkCode"];
    if (username.value == '') {
        $("#username").addClass('input-error');
        noty({
            text: "请输入用户名",
            layout: "center",
            type: "error",
            timeout: 1000,
            theme: 'bootstrapTheme'
        });
        return false;
    } else {
        $("#username").removeClass('input-error');
    }
    if (password.value == '') {
        $("#password").addClass('input-error');
        noty({
            text: "请输入密码",
            layout: "center",
            type: "error",
            timeout: 1000,
            theme: 'bootstrapTheme'
        });
        return false;
    } else {
        $("#password").removeClass('input-error');
    }
    var publicKey = $.cookie('encryptToken');
    if (publicKey == null || '' == publicKey) {
        $("#checkCode").addClass('input-error');
        noty({
            text: "验证码过期！",
            layout: "center",
            type: "error",
            timeout: 1000,
            theme: 'bootstrapTheme'
        });
        return false;
    } else {
        if (checkCode.value == '') {
            $("#checkCode").addClass('input-error');
            noty({
                text: "请输入验证码",
                layout: "center",
                type: "error",
                timeout: 1000,
                theme: 'bootstrapTheme'
            });
            return false;
        } else { //输入正确时
            $("#checkCode").removeClass('input-error');
        }
    }

    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    var password1 = encrypt.encrypt(password.value);
    $.ajax({
        url: basePath + 'login/loginUser.do',
        type: 'POST',
        data: {username: username.value, password: password1, checkCode: checkCode.value},
        async: true,
        dataType: 'json',
        beforeSend: function () {
            $("#loginText").text("登     录     中     ");
            $('#loginBtn').addClass('disabled');
            $('#loginBtn').prop('disabled', true);
            $('#loginIcon').addClass("fa fa-spinner fa-spin");
        },
        success: function (data) {
            $("#loginText").text("登    录    ");
            $('#loginBtn').removeClass('disabled');
            $('#loginBtn').prop('disabled', false);
            $('#loginIcon').removeClass("fa fa-spinner fa-spin");
            console.debug(JSON.stringify(data))
            if(data.flag == 0){
                window.location.href = basePath;
            } else {
                noty({
                    text: data.message,
                    layout: "center",
                    type: "error",
                    timeout: 1000,
                    theme: 'bootstrapTheme',
                    callback: {
                        afterClose: function () {
                            $.cookie("_myToken", data.token, {path: '/'});
                            window.location.href = basePath;
                        }
                    }
                });
            }
            // if (data.flag == 1) {
            //     if (data.errorMsg) {
            //         noty({
            //             text: data.errorMsg,
            //             layout: "center",
            //             type: "error",
            //             timeout: 1000,
            //             theme: 'bootstrapTheme',
            //             callback: {
            //                 afterClose: function () {
            //                     $.cookie("_myToken", data.token, {path: '/'});
            //                     window.location.href = basePath;
            //                 }
            //             }
            //         });
            //     } else {
            //         // $.cookie("_myToken", data.token, {path: '/'});
            //         window.location.href = basePath;
            //     }
            // } else {
            //     $("#username").addClass('input-error');
            //     $("#password").addClass('input-error');
            //     if (data.flag == 0) {
            //         $('#code').click();
            //     }
            //     noty({
            //         text: data.errorMsg,
            //         layout: "center",
            //         type: "error",
            //         timeout: 1000,
            //         theme: 'bootstrapTheme'
            //     });
            // }
        },
        error: function (data) {
            $("#loginText").text("登    录    ");
            $('#loginBtn').removeClass('disabled');
            $('#loginBtn').prop('disabled', false);
            $('#loginIcon').removeClass("fa fa-spinner fa-spin");
            var alertObj = {
                text: '服务调用失败',
                layout: "center",
                type: "error",
                timeout: 2000,
                theme: 'bootstrapTheme'
            };
            noty(alertObj);
        }
    });
    return false;
}
