let screenPrice;
let percentage = 10
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let service;
let serviceSecond;
let fullPrice;
let servicePercentPrice;



const checkIsNumber = function(x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}


const asking = function() {
    titleProject = prompt('Название проекта', 'Проект');    
    screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями', 'С анимациями'); 
    responsive = prompt('Нужен ли респонсивный сайт?', 'Да');

    screenPrice = prompt('Сколько это будет стоить?', 10000);

    while (!checkIsNumber (screenPrice) || screenPrice.trim() === '' || screenPrice === null ) {
        screenPrice = prompt('Сколько это будет стоить?', 10000)
    }

    screenPrice = Number(screenPrice)

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
    return titleProject.trim()[0].toUpperCase() + titleProject.trim().slice(1).toLowerCase()
}




const getPercentageMessage = function(price) {
    
    if(price > 50000) {
        return 'Делаем скидку 10%'
    } else if(price > 20000 && price < 40000) {
        return 'Делаем скидку 5%'
    } else if(price < 20000 && price > 0) {
        return 'Скидка не предусмотрена'
    } else if(price < 0) {
        return 'Что-то пошло не так'
    } else if(price === 0 || price === 20000 || price === 50000 ) {
        return 'Проверка на строгое равенство';
    }


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
console.log (Math.ceil(servicePercentPrice));
console.log(getPercentageMessage(fullPrice));




