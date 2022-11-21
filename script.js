'use strict';

let btc = document.querySelector(".bitcoin");
let ltc = document.querySelector(".litecoin");
let eth = document.querySelector(".ethereum");
let doge = document.querySelector(".dogecoin");

let liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
};

// Functions 
function avrPriceCalc(x, y) {
    if(x > 0){
        if (x < y.innerHTML) {
            document.querySelector(".question").textContent = "YES !";
            document.querySelector(".average").innerHTML = x + "$";
        } else {
            document.querySelector(".question").textContent = "NO !";
            document.querySelector(".average").textContent = x + "$";
        }
    }else{
        document.querySelector(".average").innerHTML = "Enter a positive number !";
    }
}
function radioBtnsChecker(a,b){
    for(let i = 0;i < a.length;i++){
        if(a[i].checked){
            if(a[i].value === 'bitcoin'){
                avrPriceCalc(b, btc);
            }else if(a[i].value === 'ethereum'){
                avrPriceCalc(b, eth);
            }else if(a[i].value=== 'litecoin'){
                avrPriceCalc(b, ltc);
            }else if(a[i].value === 'dogecoin'){
                avrPriceCalc(b, doge);
            }
        }else{
            document.querySelector(".average").innerHTML = "Select coin !";
        }
    }
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

    document.querySelector('.submit').addEventListener('click', function(){
        const avrPrice = Number(document.querySelector('.avrPrice').value);
        let radioBtns = document.querySelectorAll("input[name='coin']");
        radioBtnsChecker(radioBtns,avrPrice);
    });
});
