function getelement(num){
    var result = document.getElementById("result");
    result.value +=num
}
function clearinput(){
    var result = document.getElementById("result");
    result.value = "";
}
function calulation(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
    
}