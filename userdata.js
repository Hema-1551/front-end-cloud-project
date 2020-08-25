var mostCommon=0, lessCommon=0, Serious=0;
var fever_level=0, cough=0, chills_rigors =0, sore_throat =0, shortnessOfBreath=0;
var runnyNose=0, headache =0, fatigue=0, lossOfTasteSmell=0;
var chest_pain, lossOfSpeech, tiredness;


function storeDetails() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById('lastname').value;
    // alert(firstname);
    localStorage.setItem('firstn', firstname);
    localStorage.setItem('lastn', lastname);


}

function getDetails() {
    var x = localStorage.getItem('firstn');
    var y = localStorage.getItem('lastn');

    document.getElementById('Display_firstname').innerText = x;
    document.getElementById('Display_lastname').innerHTML = y;
}
// submit function
function funSub() {
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    //  var gender = document.getElementById('firstname').value;
    var phone = document.getElementById('phone').value;


    var uid = firebase.database().ref().child('covid-19-4b5e8').push().key;

    var data = {
        id: uid,
        firstname: fname,
        Surname: lname,
        email: email,
        password: pass,
        phone: phone,

    }

}


function getSymptoms() {
   
    if (document.getElementById('fy').checked)
        fever_level = 1;
    else if (document.getElementById('fn').checked)
        fever_level = 0;
    else
        fever_level = -1;


    // cough


    if (document.getElementById('Coughy').checked) {
        cough = 1;
    }
    else if (document.getElementById('Coughn').checked) {
        cough = 0;
    }
    else {
        cough = -1;
    }

    //chills_rigors
    if (document.getElementById('Chills_y').checked) {
        chills_rigors = 1;
    }
    else if (document.getElementById('Chills_y').checked) {
        chills_rigors = 0;
    }
    else {
        chills_rigors = -1;
    }

    //   sore_throat

    if (document.getElementById('Sorey').checked) {
        sore_throat = 1;
    }
    else if (document.getElementById('Soren').checked) {
        sore_throat = 0;
    }
    else {
        sore_throat = -1;
    }


    //shortnessOfBreath
    if (document.getElementById('Shortness_y').checked) {
        shortnessOfBreath = 1;
    }
    else if (document.getElementById('Shortness_n').checked) {
        shortnessOfBreath = 0;
    }
    else {
        shortnessOfBreath = -1;
    }
    //runnyNose

    if (document.getElementById('Runny_y').checked) {
        runnyNose = 1;
    }
    else if (document.getElementById('Runny_n').checked) {
        runnyNose = 0;
    }
    else {
        runnyNose = -1;
    }

    //headache
    if (document.getElementById('Headache_y').checked) {
        headache = 1;
    }
    else if (document.getElementById('Headache_n').checked) {
        headache = 0;
    }
    else {
        headache = -1;
    }


    //fatigue


    if (document.getElementById('Fatigue_y').checked) {
        fatigue = 1;
    }
    else if (document.getElementById('Fatigue_n').checked) {
        fatigue = 0;
    }
    else {
        fatigue = -1;
    }

    //lossOfTasteSmell

    if (document.getElementById('taste_y').checked) {
        lossOfTasteSmell = 1;
    }
    else if (document.getElementById('taste_n').checked) {
        lossOfTasteSmell = 0;
    }
    else {
        lossOfTasteSmell = -1;
    }
    //chest pain or pressure

    if (document.getElementById('chesty').checked) {
        chest_pain = 1;
    }
    else if (document.getElementById('chestn').checked) {
        chest_pain = 0;
    }
    else {
        chest_pain = -1;
    }

    //loss of speech or movement -->


    if (document.getElementById('speech_y').checked)
        lossOfSpeech = 1;
    else if (document.getElementById('speech_n').checked)
        lossOfSpeech = 0;
    else
        lossOfSpeech = -1;


    //tiredness

    if (document.getElementById('tiredness_y').checked)
        tiredness = 1;
    else if (document.getElementById('tiredness_n').checked)
        tiredness = 0;
    else
        tiredness = -1;


    /// manipulation part

    if (shortnessOfBreath || chest_pain || lossOfSpeech) {
        Serious = 1;
        alert('entred');
    }

    else if (fever_level || cough || tiredness)
        mostCommon = 1;

    else
        lessCommon = 1;

        /* var mostCommon=0, lessCommon=0, Serious=0;
var fever_level=0, cough=0, chills_rigors =0, sore_throat =0, shortnessOfBreath=0;
var runnyNose=0, headache =0, fatigue=0, lossOfTasteSmell=0;
var chest_pain, lossOfSpeech, tiredness;*/

        localStorage.setItem('fever', fever_level);
        localStorage.setItem('cough', cough);
        localStorage.setItem('chills_rigors', chills_rigors);
        localStorage.setItem('sore_throat', sore_throat);
        localStorage.setItem('shortnessOfBreath', shortnessOfBreath);
        localStorage.setItem('runnyNose', runnyNose);
        localStorage.setItem('headache', headache);
        localStorage.setItem('fatigue', fatigue);
        localStorage.setItem('lossOfTasteSmell', lossOfTasteSmell);
        localStorage.setItem('chest_pain', chest_pain);
        localStorage.setItem('lossOfSpeech', lossOfSpeech);
        localStorage.setItem('tiredness', tiredness);
        localStorage.setItem('mostCommon_g', mostCommon);
        localStorage.setItem('lessCommon_g', lessCommon);
        localStorage.setItem('Serious_g', Serious);


}

function result() {

    var mostCommon_result=localStorage.getItem("mostCommon_g");
    var lessCommon_result=localStorage.getItem("lessCommon_g");
    var serious_result=localStorage.getItem("Serious_g");

    alert(mostCommon_result);
    if (mostCommon) {
        document.getElementById("result").innerHTML = "You have most common symptoms of covid-19\n so, please go for Covid testing";
    }
    else if (serious_result) {
        document.getElementById("result").innerHTML = "You have most serious symptoms of covid-19\n so, please go for Covid testing and also prevent it by self care";

    }
    else {
        document.getElementById("result").innerHTML = "You have normal symptoms of covid-19\n so, please take self care";

    }
}