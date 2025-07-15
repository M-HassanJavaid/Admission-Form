import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCvg6cVrAOUTQb82Zf4XaUR_8O4D47U0Yg",
    authDomain: "first-trial-706ca.firebaseapp.com",
    projectId: "first-trial-706ca",
    storageBucket: "first-trial-706ca.firebasestorage.app",
    messagingSenderId: "503325588183",
    appId: "1:503325588183:web:20559a90d3292605b20e92"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let smitAdmissionCollection = collection(db, 'SMIT-Admission')

const fullName = document.querySelector("#fullName");
const fatherName = document.querySelector("#fatherName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const cnic = document.querySelector("#cnic");
const fatherCnic = document.querySelector("#fatherCnic");
const dob = document.querySelector("#dob");
const gender = document.querySelector("#gender");
const address = document.querySelector("#address");
const country = document.querySelector("#country");
const city = document.querySelector("#city");
const course = document.querySelector("#course");
const proficiency = document.querySelector("#proficiency");
const qualification = document.querySelector("#qualification");
const laptop = document.querySelector("#laptop");
const SubmitBtn = document.querySelector('#Submit-Btn');


const AllformFields = document.querySelectorAll("form input, form select, form textarea");

function isFormValidate() {
    for (let i = 0; i < AllformFields.length; i++) {
        if (AllformFields[i].value.trim() === '') {
            return false
        }
    }
    return true
}

SubmitBtn.addEventListener('click', async (e) => {
    try {
        e.preventDefault()
        if (!isFormValidate()) {
            alert('Filled all input fields correctly!')
            return
        }
        const formData = {
            fullName: fullName.value,
            fatherName: fatherName.value,
            email: email.value,
            phone: phone.value,
            cnic: cnic.value,
            fatherCnic: fatherCnic.value,
            dob: dob.value,
            gender: gender.value,
            address: address.value,
            country: country.value,
            city: city.value,
            course: course.value,
            proficiency: proficiency.value,
            qualification: qualification.value,
            laptop: laptop.value
        };
        let docRef = await doc(db, 'SMIT-Admission', cnic.value);
        let docSnap = await getDoc(docRef)
        if (docSnap.exists()) throw new Error('This CNIC number has taken!')
        await setDoc(docRef, formData);
        alert('You have successfully enrolled!')


    } catch (error) {

        alert(error.message)

    }
})

