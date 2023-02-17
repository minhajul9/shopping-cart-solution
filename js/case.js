function updateCaseTotalPrice(newCaseNumber){
    const totalCasePrice = newCaseNumber * 59;
    // document.getElementById('total-case-price').innerText = totalCasePrice;
    setElementById('total-case-price', totalCasePrice);
}

document.getElementById('btn-case-plus').addEventListener('click', function(event){
    const newCaseNumber = updateNumber(1, 'case-number-field');

    updateCaseTotalPrice(newCaseNumber);
    updateSubTotalPrice();
});


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateNumber(-1, 'case-number-field');

    updateCaseTotalPrice(newCaseNumber);
    updateSubTotalPrice();
})