// console.log('clicked');
document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
    event.preventDefault(0);
    const cashOut = document.getElementById('input-cast-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    // console.log(cashOut, pinNumber);
    if(pinNumber === '1234'){
        console.log('money is reducing');
        const cashOutNumber = parseFloat(cashOut);
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('failed cash out and try again');
    }
})
// show cash out 
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden')
})
document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden')
})