var firebaseConfig = {
    apiKey: "AIzaSyCecY7U0--7W8VpbEIpkwdEFKoqt486PD0",
    authDomain: "fir-auth1-12b94.firebaseapp.com",
    projectId: "fir-auth1-12b94",
    storageBucket: "fir-auth1-12b94.firebasestorage.app",
    messagingSenderId: "1092720077609",
    appId: "1:1092720077609:web:16fc2c6ffd3b3a95b6a538"
};

var app = firebase.initializeApp(firebaseConfig);

function signup() {

    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    console.log(name.value);
    console.log(password.value)
    console.log(email.value)




    firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });

}





function Login() {

    var email = document.getElementById("Loginemail")
    var password = document.getElementById("Loginpassword")
    console.log(Loginemail.value)
    console.log(Loginpassword.value)

    firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            window.location.href = "Home.html"
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });


}

