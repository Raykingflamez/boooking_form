document.getElementById('bookingForm').addEventListener("submit",function(event){
       event.preventDefault();
})



function bookingInfo(){
    fullname = document.getElementById('fullname').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;

    
    alert(fullname + ' , ' + email + ' , ' + phone);
}