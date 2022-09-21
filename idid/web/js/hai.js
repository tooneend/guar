//账号格式5-12位数字
var accountPattern = /^\d{5,12}$/;
//密码格式6-22位字母数字
var passwordPattern = /^[a-zA-Z0-9]{6,22}$/;
function testA(){
    var zhao1 = document.getElementById("zhao")
    var ps1 = document.getElementById("ps")
    var error11 = document.getElementById("error1")
    var error22 = document.getElementById("error2")
    if(accountPattern.test(zhao1.value)){
        error11.innerHTML = ""
    }else{
        error11.innerHTML = "不符合格式，请重新输入"
    }

    if(passwordPattern.test(ps1.value)) {
        error22.innerHTML = ""
    }else {
        error22.innerHTML = "不符合格式，请重新输入"
    }

}
function testB(){
    var zhao1 = document.getElementById("zhao")
    var ps1 = document.getElementById("ps")
    if(accountPattern.test(zhao1.value) && passwordPattern.test(ps1.value)){
        location.href = "./tiaozhuang.html"
}
