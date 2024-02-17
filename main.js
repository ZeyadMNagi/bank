var balance = document.getElementById("balance");
var i = 300 ;
var amount = document.getElementById("amount");7
var what = document.getElementById("what");

balance.innerHTML = i + "$"

function send(){
    i = i + Number(amount.value) 
    balance.innerHTML = i + "$"
    amount.value = null
}
function pay(){
    if(  i - Number(what.value) <= 0 ){
        pay = function(){refresh()}
        alert("you don't have enough money")
    }else
    {
        i = i - Number(what.value) 
        balance.innerHTML = i + "$"

    }  

}
function refresh(){
    if(i - Number(what.value) > 0 ){
        pay = function (){if(  i - Number(what.value) <= 0 ){
            pay = function(){refresh()}
            alert("you don't have enough money")
        }else
        {
            i = i - Number(what.value) 
            balance.innerHTML = i + "$"
    
        }   }
        console.log("nice")
    }
}
console.log(balance , amount, what);
