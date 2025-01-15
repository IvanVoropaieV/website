//массив баннеров 
const images = [
    'url(./assets/img/banner1.png)',
    'url(./assets/img/banner2.png)',
    'url(./assets/img/banner3.png)',
    'url(./assets/img/banner4.png)',
];

const pic = document.getElementById('bn_rand');

//массив портфолио
const portfimg = [
    'url(./assets/img/pr1.png)',
    'url(./assets/img/pr2.png)',
    'url(./assets/img/pr3.png)',
    'url(./assets/img/pr4.png)',
    'url(./assets/img/pr5.png)',
];

let primgslide = 0;
const portf = document.getElementById('portfolio__container-img');
const btleft = document.getElementById('btleft');
const btright = document.getElementById('btright');

//функция смены картинок банера - автомат 
function showImage() {
    var a = Math.floor(Math.random() * images.length);
    var img = images[a];
    pic.style.backgroundImage = img;
}

setInterval(showImage, 3000);

//функция смены картинок портфолио по нажатию на кнопку 

// Функция для обновления изображения
function updateImage() {
    // Проверка границ индекса
    primgslide = (primgslide + portfimg.length) % portfimg.length;
    portf.style.backgroundImage = portfimg[primgslide];
}

// Обработчик для кнопки "влево"
btleft.addEventListener('click', () => {
    primgslide--;
    updateImage();
});

// Обработчик для кнопки "вправо"
btright.addEventListener('click', () => {
    primgslide++;
    updateImage();
});

// Первоначальное отображение изображения (необязательно)
updateImage();


//открытие модальных окон при нажатии
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
//сами модальные окна
const okno1 = document.getElementById('okno1');
const okno2 = document.getElementById('okno2');
const okno3 = document.getElementById('okno3');
const okno4 = document.getElementById('okno4');
//закрытие модальных окон 
const exitmodal1 = document.getElementById('exitmodal1');
const exitmodal2 = document.getElementById('exitmodal2');
const exitmodal3 = document.getElementById('exitmodal3');
const exitmodal4 = document.getElementById('exitmodal4');
//затемнение экрана
const zatemnenie = document.getElementById('zatemnenie');
//переход к записи на услугу
const zap1 = document.getElementById('zap_cons1');
const zap2 = document.getElementById('zap_cons2');
const zap3 = document.getElementById('zap_cons3');
const zap4 = document.getElementById('zap_cons4');

// событие нажатия
modal1.addEventListener("click", function () {
    // делаем модальное окно видимым
    okno1.style.display = "block";
    zatemnenie.style.display = "block";
});
modal2.addEventListener("click", function () {
    // делаем модальное окно видимым
    okno2.style.display = "block";
    zatemnenie.style.display = "block";
});
modal3.addEventListener("click", function () {
    // делаем модальное окно видимым
    okno3.style.display = "block";
    zatemnenie.style.display = "block";
});
modal4.addEventListener("click", function () {
    // делаем модальное окно видимым
    okno4.style.display = "block";
    zatemnenie.style.display = "block";
});
//действия при закрытии 
exitmodal1.addEventListener("click", function () {
    // делаем модальное окно невидимым
    okno1.style.display = "none";
    zatemnenie.style.display = "none";
});
exitmodal2.addEventListener("click", function () {
    // делаем модальное окно невидимым
    okno2.style.display = "none";
    zatemnenie.style.display = "none";
});
exitmodal3.addEventListener("click", function () {
    // делаем модальное окно невидимым
    okno3.style.display = "none";
    zatemnenie.style.display = "none";
});
exitmodal4.addEventListener("click", function () {
    // делаем модальное окно невидимым
    okno4.style.display = "none";
    zatemnenie.style.display = "none";
});
//запись на услугу переход

zap1.addEventListener("click", function () {
    okno1.style.display = "none";
    zatemnenie.style.display = "none";
});
zap2.addEventListener("click", function () {
    okno2.style.display = "none";
    zatemnenie.style.display = "none";
});
zap3.addEventListener("click", function () {
    okno3.style.display = "none";
    zatemnenie.style.display = "none";
});
zap4.addEventListener("click", function () {
    okno4.style.display = "none";
    zatemnenie.style.display = "none";
});
