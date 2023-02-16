document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);
    depositTotalElement.innerText = depositAmount;
    const depositTotalValue = depositTotal+depositAmount;
    depositTotalElement.innerText = depositTotalValue;
    const balanceTotalString = document.getElementById('balance-total').innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const curentBalanceTotal = depositAmount + balanceTotal;
    document.getElementById('balance-total').innerText = curentBalanceTotal;
    depositField.value = '';
});

