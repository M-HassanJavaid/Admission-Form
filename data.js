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

let searcBtn = document.querySelector('#Search-btn');
let cnicInput = document.querySelector('#cnicInput');

const fullName = document.getElementById('full-name');
const fatherName = document.getElementById('father-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const cnic = document.getElementById('cnic');
const fatherCnic = document.getElementById('father-cnic');
const dateOfBirth = document.getElementById('date-of-birth');
const gender = document.getElementById('gender');
const address = document.getElementById('address');
const country = document.getElementById('country');
const city = document.getElementById('city');
const course = document.getElementById('course');
const proficiency = document.getElementById('proficiency');
const qualification = document.getElementById('qualification');
const laptop = document.getElementById('laptop');

let container = document.querySelector('.profile-card');


searcBtn.addEventListener("click" , async () => {
    try {
        let cnic = cnicInput.value;
        const docSnap = await getDoc(doc(db, 'SMIT-Admission', cnic));
        if (docSnap.exists()) {
            let data = docSnap.data();
            renderData(data)
            
        } else {
            throw new Error('No Such document found!');
        }

    } catch (error) {
        alert(`failed to get Data ${error.message}`)
    }


})

function renderData(data) {
    fullName.textContent = data.fullName;
    fatherName.textContent = data.fatherName;
    email.textContent = data.email;
    phone.textContent = data.phone;
    proficiency.textContent = data.proficiency;
    cnic.textContent = data.cnic;
    fatherCnic.textContent = data.fatherCnic;
    dateOfBirth.textContent = data.dob;
    gender.textContent = data.gender;
    address.textContent = data.laptop;
    country.textContent =  data.country;
    city.textContent = data.city;
    course.textContent = data.course;
    qualification.textContent = data.qualification;
    laptop.textContent =  data.laptop;

    container.style.display = 'block';
}