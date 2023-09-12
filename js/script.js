"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const faqItem = document.querySelectorAll('.FAQ-item');
    const faqIcon = document.querySelectorAll('.FAQ-item__info');


    faqItem.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            item.lastElementChild.classList.toggle('hide');
            item.lastElementChild.classList.toggle('show');
            if (item.lastElementChild.classList.contains('show')) {
                faqIcon[i].lastElementChild.style.transform = "rotate(180deg)";
            } else {
                faqIcon[i].lastElementChild.style.transform = "rotate(0)";
            }
        })
    })

    IMask(
        document.getElementById('phone-mask'),
        {
            mask: '+{7}(000)000-00-00'
        }
    )

    function forms() {
        const form = document.querySelector('#form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            form.classList.add('submitted');
            if (form.checkValidity()) {
                form.reset();
                form.classList.remove('submitted');
                location.reload();
            }
        });
    }
    forms();


    const doughnutCountry = document.getElementById('firstCountry');
    const doughnutCity = document.getElementById('firstCity');
    const doughnutCountrySecond = document.getElementById('secondCountry');
    const doughnutCitySecond = document.getElementById('secondCity');

    new Chart(doughnutCountry, {
        type: 'doughnut',
        data: {
            labels: ['- Россия',   '- Казахстан', '- Узбекистан'],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    '#9D121A',
                    '#DD9622',
                    '#262424'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        color: '#262424',
                        usePointStyle: true,
                    },
                    align: 'start',
                },
                title: {
                    display: true,
                    text: 'Страны',
                    color: '#A7A7A7',
                    align: 'start',
                }
            },
            aspectRatio: 0.75,
            cutout: 60
        },
    });

    new Chart(doughnutCity, {
        type: 'doughnut',
        data: {
            labels: ['- Тюмень',   '-  Петербург', '-  Нур-Султан', '-  Алма-Аты', '-  Ташкент'],
            datasets: [{
                label: 'My First Dataset',
                data: [20, 35, 15, 18, 13],
                backgroundColor: [
                    '#E83D46',
                    '#005FA7',
                    '#F9A620',
                    '#808080',
                    '#000'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        color: '#262424',
                        usePointStyle: true,
                    },
                    align: 'start',
                },
                title: {
                    display: true,
                    text: 'Города',
                    color: '#A7A7A7',
                    align: 'start',
                }
            },
            aspectRatio: 0.7,
            cutout: 60
        },
    });

    new Chart(doughnutCountrySecond, {
        type: 'doughnut',
        data: {
            labels: ['- Россия', '- Казахстан', '- Узбекистан'],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    '#9D121A',
                    '#DD9622',
                    '#262424'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        color: '#262424',
                        usePointStyle: true,
                    },
                    align: 'start',
                },
                title: {
                    display: true,
                    text: 'Страны',
                    color: '#A7A7A7',
                    align: 'start',
                }
            },
            aspectRatio: 0.75,
            cutout: 60
        },
    });

    new Chart(doughnutCitySecond, {
        type: 'doughnut',
        data: {
            labels: ['- Тюмень',   '-  Петербург', '-  Нур-Султан', '-  Алма-Аты', '-  Ташкент'],
            datasets: [{
                label: 'My First Dataset',
                data: [20, 35, 15, 18, 13],
                backgroundColor: [
                    '#E83D46',
                    '#005FA7',
                    '#F9A620',
                    '#808080',
                    '#000'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        color: '#262424',
                        usePointStyle: true,
                    },
                    align: 'start',
                },
                title: {
                    display: true,
                    text: 'Города',
                    color: '#A7A7A7',
                    align: 'start',
                }
            },
            aspectRatio: 0.7,
            cutout: 60
        },
    });


});