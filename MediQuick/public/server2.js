const firebaseConfig = {
    apiKey: "AIzaSyAgEgcayJgZiBLHmkXN0XAg9NvA8aTPJ9I",
    authDomain: "hcontactform-133aa.firebaseapp.com",
    databaseURL: "https://hcontactform-133aa-default-rtdb.firebaseio.com",
    projectId: "hcontactform-133aa",
    storageBucket: "hcontactform-133aa.appspot.com",
    messagingSenderId: "485115532869",
    appId: "1:485115532869:web:ff6986e6e2404c7537352c"
};

//initialize app
firebase.initializeApp(firebaseConfig);

//reference your database 
var hcontactformDB = firebase.database().ref('hcontactform');

document.getElementById('hcontactform').addEventListener("submit", submitform);


function submitform(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var phone = getElementVal('phone');
    var email = getElementVal('email');
    var message = getElementVal('message');


    console.log(name, phone, email, message);
    saveMessages(name, phone, email, message);
    //enable alert
    document.querySelector('.alert').style.display = 'block';
    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
}



const saveMessages = (name, phone, email, message) => {
    var newhcontactform = hcontactformDB.push();

    newhcontactform.set({
        name: name,
        phone: phone,
        email: email,
        message: message,

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};