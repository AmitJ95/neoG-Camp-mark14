const initialPrice = document.querySelector("#initial-price");
const quantityofStocks = document.querySelector("#quantityofStocks");
const currentPrice = document.querySelector("#current-price");
const checkProfitLoss = document.querySelector("#checkProfitLoss");
const outputDiv = document.querySelector("#output");


function calculateProfitLoss(params) {

    if (initialPrice.value !== "" || quantityofStocks.value !== "" 
    || currentPrice.value !== "") {
        
        let iniPrice = Number(initialPrice.value);
        let qtyStocks = Number(quantityofStocks.value);
        let currPrice = Number(currentPrice.value);
        let iniStockValue = iniPrice * qtyStocks;
        let currStockValue = currPrice * qtyStocks;

        if (iniPrice > currPrice && iniPrice > 0 &&currPrice > 0 ) {
            
           let loss = iniStockValue - currStockValue;
           let lossPercent  = (loss/iniStockValue) *100
           let lossMsg = `You have lost ${loss} rupees and 
           Loss percentage is ${lossPercent} %`; 

           showOutput(lossMsg);
        } else if(currPrice > iniPrice && iniPrice > 0 &&currPrice > 0 ) {
            
            let profit = currStockValue - iniStockValue;
            let profitPercent = (profit/iniStockValue)*100;
            let profitMsg = `You have gained ${profit} rupees and 
           Profit percentage is ${profitPercent} %`; 
            
           showOutput(profitMsg);
        }else if(iniPrice === currPrice) {

           showOutput("You haven't lost any money");
        }else{
            showOutput("Please Enter Valid Inputs");
        }
    }
    
}

function showOutput(msg) {
    outputDiv.innerText = msg;
}



checkProfitLoss.addEventListener("click", calculateProfitLoss)