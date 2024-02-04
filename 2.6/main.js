let screenPrice = 10000
let percentage = 10
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
// let servicePrice;
// let servicePriceSecond;
let service;
let serviceSecond;
let fullPrice;
let servicePercentPrice;


const checkIsNumber = function(x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}


const asking = function() {
    titleProject = prompt('Название проекта');    
    screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями'); 
    responsive = prompt('Нужен ли респонсивный сайт?');
}


const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги необходим', 'Услуга 1')
        } else if ( i===1 ) {
            serviceSecond = prompt('Какой дополнительный тип услуги необходим', 'Услуга 2')
        }          

    let textFromPromt = '';

    while (!checkIsNumber (textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null ) {
        textFromPromt = prompt('Сколько это будет стоить?')
    }

    sum = sum + Number (textFromPromt)

    }

return sum

}



function getFullPrice () {
    return screenPrice + allServicePrices
        
}

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (percentage / 100))
}
 
const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}




// Предоставление скидки

if(fullPrice > 50000) {
    console.log('Делаем скидку 10%');
} else if(fullPrice > 20000 && fullPrice < 40000) {
    console.log('Делаем скидку 5%');
} else if(fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if(fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if(fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000 ) {
    console.log('Проверка на строгое равенство');
}



asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice();
newTitle = getTitle();



console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service);
console.log(serviceSecond);
console.log(fullPrice);
// console.log(servicePrice);
// console.log(servicePriceSecond);
console.log (Math.ceil(servicePercentPrice));





