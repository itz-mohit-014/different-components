const height = document.getElementById('height');
const weight  = document.getElementById('weight');
const calculateBtn = document.querySelector('button');
const showBMIValue = document.querySelector('.bmi-value');
const showBmiStatus = document.querySelector('.bmi-status');


calculateBtn.addEventListener('click', calculateBMIValue)


function calculateBMIValue (){
    const heightInMeter = height.value / 100 ;
    const bmi = weight.value / (heightInMeter * heightInMeter);
    
    showBMIValue.innerHTML = parseFloat(bmi).toFixed(3);
    
    const showStatus = {
        'Under Weight' : '#005eff' ,
        'Healthy Weight' : '#36fe05' ,
        'Over Weight' : '#FFF200' ,
        'Obese' : '#f5af19' ,
        'Extermly Obese' : '#F00' ,
    }

    if(bmi < 18.5){
        showBmiStatus.innerHTML = `${Object.keys(showStatus)[0]}`
        showBmiStatus.style.color = `${Object.values(showStatus)[0]}`
    }else if(bmi >= 18.5 && bmi <= 24.999 ){
        showBmiStatus.innerHTML = `${Object.keys(showStatus)[1]}`
        showBmiStatus.style.color = `${Object.values(showStatus)[1]}`
    }else if(bmi >= 25.0 && bmi <= 29.999 ){
        showBmiStatus.innerHTML = `${Object.keys(showStatus)[2]}`
        showBmiStatus.style.color = `${Object.values(showStatus)[2]}`
    }else if(bmi >= 30.0 && bmi <= 34.999 ){
        showBmiStatus.innerHTML = `${Object.keys(showStatus)[3]}`
        showBmiStatus.style.color = `${Object.values(showStatus)[3]}`
    }else{
        showBmiStatus.innerHTML = `${Object.keys(showStatus)[4]}`
        showBmiStatus.style.color = `${Object.values(showStatus)[4]}`
    }

}

