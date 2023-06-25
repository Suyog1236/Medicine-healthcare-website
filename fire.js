const firebaseConfig = {
    apiKey: "AIzaSyAgvhNhpdtDzlQ8d4VFYVB6oCZ4f-nMndw",
    authDomain: "healthcare-website-fc1e1.firebaseapp.com",
    projectId: "healthcare-website-fc1e1",
    databaseURL: "https://healthcare-website-fc1e1-default-rtdb.firebaseio.com",
    storageBucket: "healthcare-website-fc1e1.appspot.com",
    messagingSenderId: "612312056339",
    appId: "1:612312056339:web:f790f0ad210ee41f2b75e6"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var feedbackFormDB = firebase.database().ref("feedbackForm");

document.getElementById("feedbackForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("feedbackForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newfeedbackForm = feedbackFormDB.push();

    newfeedbackForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};