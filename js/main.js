const navBtn = document.querySelector(".nav__mobile");
const nav = document.querySelector(".header__top-row");
const btnElem = document.querySelector(".nav__mobile-elem");

navBtn.onclick = (e) => {
  if (e.target) {
    document.body.classList.toggle("overflowY-none");
    navBtn.classList.toggle("nav__mobile--active");
    nav.classList.toggle("header__top-row--mobile");
    btnElem.classList.toggle("nav__mobile--active");
  }
};

//maskPhone
mask("[data-phone]");

const inputPhone = document.querySelectorAll("[data-phone]");

inputPhone.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  }),
    input.addEventListener("blur", function () {
      if (input.value == "+") input.value = "";
    });
});

//map

ymaps.ready(init);
function init() {
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.943543, 30.338928],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
    controls: ["zoomControl"],
  });

  // Создание геообъекта с типом точка (метка).
  let myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [59.943543, 30.338928], // координаты точки
    },
  });

  // Отключеник скрола на карте
  myMap.behaviors.disable(["scrollZoom"]);
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
}
