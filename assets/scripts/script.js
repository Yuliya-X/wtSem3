// Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции.
let userName = prompt("Как вас зовут? ", 'Имя');

function showName() {
    let helloUserName = "Привет, " + userName + "!";
    alert(helloUserName);
}

showName();

// Перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.

let age = +(prompt("Сколько вам лет? ", '101'));
switch (age) {
    case 18: {
        alert("Вы совершеннолетний, всё можно!");
        break;
    }
    case 10: {
        alert("Вам надо учить уроки!");
        break;
    }
    case 30: {
        alert("Ложитесь спасть, завтра на работу!");
        break;
    }
    default: {
        alert("Мы не знаем, что вам делать!");
        break;
    }
}

function changerColor() {
    let elemtnt2 = document.getElementById('el');
    let elemtnt3 = document.getElementById('t');
    console.log(elemtnt2);
    elemtnt2.classList.toggle('ice');
    elemtnt3.classList.toggle('t');
    elemtnt2.textContent = elemtnt2.textContent == 'Рассказ о себе (МАКСИ)' ? 'Рассказ о себе (мини)' : 'Рассказ о себе (МАКСИ)';
    elemtnt3.textContent = elemtnt3.textContent == 'Желаемая зарплата от 1 000 000$' ? 'Желаемая зарплата от 1000$' : 'Желаемая зарплата от 1 000 000$';
}

let btn1 = document.getElementById('btn1');
console.log(btn1);
btn1.addEventListener('click', changerColor)

function changerColor2() {
    let elemtnt4 = document.getElementById('for_btn2');
    console.log(elemtnt4);
    elemtnt4.classList.toggle('nice');
}
let btn2 = document.getElementById('btn2');
console.log(btn2);
btn2.addEventListener('click', changerColor2)

