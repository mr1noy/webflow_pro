let screenPrice = 10000;
const otkatPercent = 10;
let titleProject = prompt('Название проекта');
let screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
let responsive = prompt('Нужен ли респонсивный сайт?');
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

// Функция для показа типа экранов
function showTypeOf() {
    console.log(screensValue);
}

// Вызов функции showTypeOf
showTypeOf();

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let otkat = fullPrice * 0.1;
let servicePercentPrice = fullPrice - otkat;

// Функция для вывода сообщения о скидке
function getRollbackMessage(price) {
    if (price > 50000) {
        console.log('Cделаем скидку в 10%');
    } else if (price > 20000 && price <= 40000) {
        console.log('Cделаем скидку в 5%');
    } else if (price > 0 && price <= 20000) {
        console.log('Cкидка не предусмотрена');
    } else {
        console.log('Что-то пошло не так');
    } 
    
}

// Вызов функции getRollbackMessage
getRollbackMessage(fullPrice);

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
}

const allServicePrices = getAllServicePrices();

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const fullPriceNew = getFullPrice();

function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

const modifiedTitle = getTitle();

function getServicePercentPrices() {
    return fullPriceNew + (fullPriceNew * otkatPercent / 100);
}

const servicePercentPriceNew = getServicePercentPrices();
console.log(servicePercentPriceNew, 'Итоговая стоимость с учетом процента подрядчику');
