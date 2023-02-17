// function for plus(+) and minus(-) buttons of both phone and case
function updateNumber(num, field){
    const caseNumberField = document.getElementById(field);
    const caseNumberString = caseNumberField.value;
    const perviousCaseNumber = parseInt(caseNumberString);
    
    const newCaseNumber = perviousCaseNumber + num;
    caseNumberField.value = newCaseNumber;

    return newCaseNumber
}

function updateSubTotalPrice(){
    // getting total phone price
    const currentPhoneTotal = getElementTextById('total-phone-price');

    // getting total case price 
    const currentCaseTotal = getElementTextById('total-case-price');

    // calculate subtotal
    const subTotal = currentCaseTotal + currentPhoneTotal;

    // const subTotalField = document.getElementById('sub-total');
    // subTotalField.innerText = subTotal;
    setElementById('sub-total', subTotal);

    // calculate tax 
    let tax = subTotal * 0.1;
    tax = tax.toFixed(2);
    setElementById('tax-amount', tax);


    tax = parseFloat(tax)
    const netTotal = tax + subTotal;
    setElementById('net-total', netTotal.toFixed(2))
}

// function to get total prices
function getElementTextById(elementId){
    
    const currentTotalField = document.getElementById(elementId);
    let currentTotal = currentTotalField.innerText;
    currentTotal = parseInt(currentTotal);
    return currentTotal;

}


// updating innerText of totals 
function setElementById(elementId, value){
    const field = document.getElementById(elementId);
    field.innerText = value;
}