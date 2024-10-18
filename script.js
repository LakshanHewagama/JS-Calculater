function fn0(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 0;
    }else{
        document.getElementById('display').innerHTML = previous+0;
    }
}

function fn1(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 1;
    }else{
        document.getElementById('display').innerHTML = previous+1;
    }
    
}

function fn2(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 2;
    }else{
        document.getElementById('display').innerHTML = previous+2;     
    }
}

function fn3(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 3;
    }else{
        document.getElementById('display').innerHTML = previous+3;
    }
}

function fn4(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 4;
    }else{
        document.getElementById('display').innerHTML = previous+4;
    }
}

function fn5(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 5;
    }else{
        document.getElementById('display').innerHTML = previous+5;
    }
}

function fn6(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 6;
    }else{
        document.getElementById('display').innerHTML = previous+6;
    }
}

function fn7(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 7;
    }else{
        document.getElementById('display').innerHTML = previous+7;
    }
}

function fn8(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 8;
    }else{
        document.getElementById('display').innerHTML = previous+8;
    }
}

function fn9(){
    let previous = document.getElementById('display').innerHTML;
    if(previous==0){
        document.getElementById('display').innerHTML = 9;
    }else{
        document.getElementById('display').innerHTML = previous+9;
    }
}

function fnUN(){
    let previous = document.getElementById('display').innerHTML;
    let erasePre = previous.slice(0,-1);
    document.getElementById("display").innerHTML=erasePre;
}

let op;
let fristSave;

function fnAD(){
    fristSave = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML= 0;
    op = 1;
}

function fnMN(){
    fristSave = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML=0;
    op = 2;
}

function fnML(){
    fristSave = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML=0;
    op = 3;
}

function fnDV(){
    fristSave = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML=0;
    op = 4;
}

function fnEQ(){
    let SecondSave = document.getElementById('display').innerHTML;

    if(op == 1){
        document.getElementById('display').innerHTML = parseInt(fristSave) + parseInt(SecondSave)
    }
    else if(op == 2){
        document.getElementById('display').innerHTML = parseInt(fristSave) - parseInt(SecondSave)
    }
    else if(op == 3){
        document.getElementById('display').innerHTML = parseInt(fristSave) * parseInt(SecondSave)
    }
    else if(op == 4){
        document.getElementById('display').innerHTML = parseInt(fristSave) / parseInt(SecondSave)
    }else{
        document.getElementById('display').innerHTML = "Invalid"
    }
    
}

function fnAC(){   
    document.getElementById('display').innerHTML=0;
    op = 0;
    fristSave = 0;
    SecondSave = 0;
}

