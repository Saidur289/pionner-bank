
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('button clicked');
    // step-1 find amount value 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(typeof addMoneyInput);
    // step - 2 pin number out 
    const pinNumberInput = document.getElementById('input-pin-number').value;
    // console.log(pinNumberInput);
    // step - 3 not good way to pin 
    if(pinNumberInput === '1234'){
        // console.log('added the the account');
       
        // step-4 get current balance
        const accountBalance = document.getElementById('account-balance').innerText;
        // console.log(typeof accountBalance);
        const addNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(accountBalance);
        const newBalance = addNumber + balanceNumber;      
        document.getElementById('account-balance').innerText = newBalance;
        // step - 5 my way 
         // const newBalance =Number( accountBalance) + Number(addMoneyInput);
    }else{
        alert('failed to add money and try again')
    }

})




































// 
// recap 
// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const addMoney = document.getElementById('input-add-money').value;
//     const addMoneyNumber = parseFloat(addMoney);
//     const pinNumber = document.getElementById('input-pin-number').value;
//     if(pinNumber === '1234'){
//         const balance = document.getElementById('account-balance').innerText;
//         const balanceNumber = parseFloat(balance);
//         const newBalance = balanceNumber + addMoneyNumber;
//         document.getElementById('account-balance').innerText = newBalance;
//     }else{
//         alert('failed to add money and try again');
//     }

// })