ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
					center: [55.751574, 37.573856],
					zoom: 9,
					wheel: false
			}, {
					searchControlProvider: 'yandex#search'
			}),

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Собственный значок метки',
					balloonContent: 'Это красивая метка'
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'src/img/contacts/map-point.png',
					// Размеры метки.
					iconImageSize: [67, 100],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [0, -100],
					wheel: false
			});

			myMap.behaviors.disable('scrollZoom');

	myMap.geoObjects
			.add(myPlacemark);
});