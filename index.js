'using strict'
const billAmount = document.getElementById('bill');
const tipPercentage = document.querySelectorAll('.btn_tip');
const tipPercentageCustom = document.querySelector('.btn_tip_curtom');
const billTotalPerPerosn = document.querySelector('.bill_amount_total_per_person');
const tipPerPersonAmount = document.querySelector('.tip_amount_per_person');
const numberOfPeople = document.getElementById('people');

// TIP CALCULATOR 
const getBill = function(){
    bill = Number(billAmount.value);
}
const getNumPeople = function(){
    people = Number(numberOfPeople.value);
}
const getCustomTip = function(){
    CustomTip = Number(tipPercentageCustom.value);
}


const getTipPerc = function(tip){
    tip.addEventListener('click', ()=>{ 
        // Get the bill
        getBill();
        // Get how many people
        getNumPeople();
        // Calculating bill after the tip and the tip per person;
        tipPerc = Number(tip.value);
        billAfterTip = (bill + (bill * tipPerc));
        billAfterTipPerPerson = billAfterTip / people
        tipPerPerson = (billAfterTip - bill) / people;

        // Inserting values to the DOM;
        tipPerPersonAmount.innerHTML = `$${tipPerPerson.toFixed(2)}`;
        billTotalPerPerosn.innerHTML =  `$${billAfterTipPerPerson.toFixed(2)}`;
    })
}
const tipCalc = function(){ 
    tipPercentage.forEach((tip) => getTipPerc(tip));
}
tipCalc();