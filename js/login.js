// console.log('text');
// work :form submit reloading the page 
// step - 1 preventDefault 
// step - 2  phone value output
// document.getElementById('button-login').addEventListener('click', function(event){
//     console.log('button clicked');
//     event.preventDefault();//bejal to beginner
//     const phoneNumber = document.getElementById('phone-number').value;
//     //  console.log(phoneNumber)
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);
//     // step -3 this is temporay
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you log in');
//     }else{
//         console.log('wrong phone number or pin');
//     }
// })
document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    //get phone number and pin number
    const phoneNumber =document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    //bad way to do home 
    if(phoneNumber === '5' && pinNumber === '1234'){
                console.log('you log in');
                window.location.href = "./home.html"
             }else{
                alert('wrong phone number or pin');
             }

})