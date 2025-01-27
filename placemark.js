ymaps.ready(init);

        function init() {
            // Создание карты
            const map = new ymaps.Map("map", {
                center: [55.751837, 48.751597],
                zoom: 15 // Масштаб карты
            });

            // Создание метки
            const placemark = new ymaps.Placemark([55.751837, 48.751597], {
                hintContent: 'Наш адрес',
                balloonContent: 'Наш адрес'
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            });

            // Добавление метки на карту
            map.geoObjects.add(placemark);
        }
