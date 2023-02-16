document.getElementById('withdraw-btn').addEventListener('click', function(){
    // input field of withdraw
    const withdrawField = document.getElementById('withdraw-value');
    const withdrawStringValue = withdrawField.value;
    const withdrawNumberValue = parseFloat(withdrawStringValue);

    // set value field of withdraw
    const withdrawSetValue = document.getElementById('withdraw-element');
    const withdrawSetStringValue = withdrawSetValue.innerText;
    const withdrawSetNumberValue = parseFloat(withdrawSetStringValue);

    // set total withdraw amount
    const withdrawTotalValue = withdrawSetNumberValue + withdrawNumberValue;
    withdrawSetValue.innerText = withdrawTotalValue;

    // balance total
    const balanceTotalString = document.getElementById('balance-total').innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const withdrawBalanceTotal = balanceTotal - withdrawNumberValue;
    document.getElementById('balance-total').innerText = withdrawBalanceTotal;
    
    // refresh input field
    withdrawField.value = '';
    console.log(withdrawBalanceTotal)
});