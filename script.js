// Створити пустий масив taskList для задач, які ми будемо писати
const taskItems = [];

// Отримуємо кнопку .add-button
const addButton = document.querySelector('.add-button');

// Дістаємо елемент списку куди бьудемо виводити задачу
const taskList = document.querySelector('.task-list');

// Повісити подію кліку (функцію) на кнопку .add-button
addButton.onclick = function () {

    // Відібрали елемент поля вводу задачі
    const input = document.querySelector('.task-input');

    // Відбираємо назву задачі
    const task = input.value;

    // Добавляти назву задачі до масива taskItems
    taskItems.push(task);

    // Очищуєао список задач
    taskList.innerHTML = ``;

    // Очищуємо поле задачі
    input.value = ``;

    // Викликаємо цикл по масиву taskItems
    taskItems.forEach(function (taskItem) {

        // Створювати новий елемент li з текстовим вмістом задачі
        const item = `<li class="task-item">${taskItem}</li>`;

        // Виводимо задачу до списку
        taskList.insertAdjacentHTML('beforeend', item)
    });

    // Функція повинна робити:
    // + Відбирати назву надачі з поля .task-input
    // + Добавляти назву задачі до масива taskItems
    // + Перебрати циклом всі значення масива taskItems
    // + При ітерації циклу робити:
    // -+ Створювати новий елемент li з текстовим вмістом задачі
    // -+ Додавати новий елемент до списку .task-list
    // - Очищувати поле .task-input
    // - Зберігати масив taskItems у localStorage
}




