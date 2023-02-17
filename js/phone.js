function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    // const totalPrice = document.getElementById('total-phone-price');
    // totalPrice.innerText = phoneTotalPrice;
    setElementById('total-phone-price', phoneTotalPrice)
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(1, 'phone-number-field');
    updatePhoneTotalPrice(newPhoneNumber);
    updateSubTotalPrice();
});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(-1, 'phone-number-field');
    updatePhoneTotalPrice(newPhoneNumber);
    updateSubTotalPrice();
})