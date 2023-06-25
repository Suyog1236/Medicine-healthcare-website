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
var MedicineReportDB = firebase.database().ref("MedicineReport");

document.getElementById("MedicineReport").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var number = getElementVal("MobileNumber");
    var Medicine_data = getElementVal("MedicineNames");

    saveMessages(name, emailid, number, Medicine_data);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("MedicineReport").reset();
}

const saveMessages = (name, emailid, number, Medicine_data) => {
    var newReportForm = MedicineReportDB.push();

    newReportForm.set({
        name: name,
        emailid: emailid,
        number: number,
        Medicine_data: Medicine_data,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};