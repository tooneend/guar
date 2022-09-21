//账号格式5-12位数字
var accountPattern = /^\d{5,12}$/;
//密码格式6-22位字母数字
var passwordPattern = /^[a-zA-Z0-9]{6,22}$/;

//检测账号格式
function testAccount(account){
    var kkz = document.getElementById("ppz")
    console.log(kkz)
    if(accountPattern.test(account)){
        return true;
    }else{
        return false;
    }
}
//检查密码
function testPassword(password){
    if(passwordPattern.test(password)){
        return true;
    }else{
        return false;
    }
}