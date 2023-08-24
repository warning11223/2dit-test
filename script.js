const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');

        // Закрыть все аккордеоны, кроме текущего
        accordionContents.forEach(content => {
            if (content !== accordionContent) {
                content.style.display = 'none';
            }
        });

        // Переключить состояние аккордеона
        if (accordionContent.style.display === 'block') {
            accordionContent.style.display = 'none';
        } else {
            accordionContent.style.display = 'block';
        }
    });
});

/*form handler*/

document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function () {
        const nameInput = document.getElementById("nameInput");
        const numberInput = document.getElementById("numberInput");
        const emailInput = document.getElementById("emailInput");

        if (nameInput.value === "" || numberInput.value === "" || emailInput.value === "") {
            alert("Пожалуйста, заполните все поля.");
        } else {
            const message = `Имя: ${nameInput.value}\nНомер телефона: ${numberInput.value}\nEmail: ${emailInput.value}`;
            alert(message);

            // Очистка полей ввода
            nameInput.value = "";
            numberInput.value = "";
            emailInput.value = "";
        }
    });
});

/*-----------------------*/

// Получаем ссылку на элемент canvas
const ctx1 = document.getElementById('myDonutChart1').getContext('2d');
const ctx2 = document.getElementById('myDonutChart2').getContext('2d');
const ctx3 = document.getElementById('myDonutChart3').getContext('2d');
const ctx4 = document.getElementById('myDonutChart4').getContext('2d');

// Создаем кольцевую диаграмму
const myDonutChart1 = new Chart(ctx1, {
    type: 'doughnut', // Тип графика (кольцевая диаграмма)
    data: {
            labels: ['Россия', 'Казахстан', 'Узбекистан'],
        datasets: [{
            data: [10, 30, 60],
            backgroundColor: ['black', 'orange', 'red'],
        }]
    },
    options: {
        cutout: '80%',
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Положение легенды
                align: 'start', // Выравнивание легенды по вертикали
                labels: {
                    color: 'black',
                    font: {
                        size: 10
                    },
                    padding: 5 // Отступ между подписями в легенде
                },
                fullSize: true // Легенда будет занимать всю доступную высоту
            }
        }
    }
});

const myDonutChart2 = new Chart(ctx2, {
    type: 'doughnut', // Тип графика (кольцевая диаграмма)
    data: {
        labels: ['Тюмень', 'Нур-Султан', 'Ташкент', 'Петербург', 'Алма-Аты'],
        datasets: [{
            data: [40, 20, 20, 10, 10],
            backgroundColor: ['black', 'orange', 'red', 'blue', 'gray'],
        }]
    },
    options: {
        cutout: '80%',
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Положение легенды
                align: 'start', // Выравнивание легенды по вертикали
                labels: {
                    color: 'black',
                    font: {
                        size: 10
                    },
                    padding: 5 // Отступ между подписями в легенде
                },
                fullSize: true // Легенда будет занимать всю доступную высоту
            }
        }
    }
});


const myDonutChart3 = new Chart(ctx3, {
    type: 'doughnut', // Тип графика (кольцевая диаграмма)
    data: {
        labels: ['Россия', 'Казахстан', 'Узбекистан'],
        datasets: [{
            data: [10, 40, 50],
            backgroundColor: ['black', 'orange', 'red'],
        }]
    },
    options: {
        cutout: '80%',
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Положение легенды
                align: 'start', // Выравнивание легенды по вертикали
                labels: {
                    color: 'black',
                    font: {
                        size: 10
                    },
                    padding: 5 // Отступ между подписями в легенде
                },
                fullSize: true // Легенда будет занимать всю доступную высоту
            }
        }
    }
});


const myDonutChart4 = new Chart(ctx4, {
    type: 'doughnut', // Тип графика (кольцевая диаграмма)
    data: {
        labels: ['Тюмень', 'Нур-Султан', 'Ташкент', 'Петербург', 'Алма-Аты'],
        datasets: [{
            data: [40, 20, 20, 10, 10],
            backgroundColor: ['black', 'orange', 'red', 'blue', 'gray'],
        }]
    },
    options: {
        cutout: '80%',
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Положение легенды
                align: 'start', // Выравнивание легенды по вертикали
                labels: {
                    color: 'black',
                    font: {
                        size: 10
                    },
                    padding: 5 // Отступ между подписями в легенде
                },
                fullSize: true // Легенда будет занимать всю доступную высоту
            }
        }
    }
});






