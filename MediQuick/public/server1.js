const firebaseConfig = {
    apiKey: "AIzaSyBeRieIOsvlAr0rRfW2cKzxqcZLR2iGPbI",
    authDomain: "appointmentform-589b1.firebaseapp.com",
    databaseURL: "https://appointmentform-589b1-default-rtdb.firebaseio.com",
    projectId: "appointmentform-589b1",
    storageBucket: "appointmentform-589b1.appspot.com",
    messagingSenderId: "244785873077",
    appId: "1:244785873077:web:8ceb163d41975d77457efc"
};
//initialize firebase

firebase.initializeApp(firebaseConfig);

//reference your database 
var appointmentformDB = firebase.database().ref('appointmentform');

document.getElementById('appointmentform').addEventListener("submit", submitform);


function submitform(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var num = getElementVal('num');
    var email = getElementVal('email');
    var address = getElementVal('address');
    var date = getElementVal('date');
    var doctor = getElementVal('doctor');


    console.log(name, num, email, address, date, doctor);
    saveMessages(name, num, email, address, date, doctor);
    //enable alert
    document.querySelector('.alert').style.display = 'block';
    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
}


const saveMessages = (name, num, email, address, date, doctor) => {
    var newappointmentform = appointmentformDB.push();

    newappointmentform.set({
        name: name,
        num: num,
        email: email,
        address: address,
        date: date,
        doctor: doctor,

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};