const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// Parte 1:
  
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
    let getDaysList = document.querySelector('#days');
    for (let i = 0; i < decemberDaysList.length; i ++) {
        let day = decemberDaysList[i];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        if (day === 24 || day === 31) {
            dayItem.className = ('day holiday');
            getDaysList.appendChild(dayItem);
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = ('day friday');
            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = ('day friday holiday');
            getDaysList.appendChild(dayItem);
        } else {
            dayItem.className = ('day');
            getDaysList.appendChild(dayItem);
        }
    }
}

// Parte 2:

createDaysOfTheMonth();

const createButtonHolyday = (buttonName) => {
    let divDad = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let buttonID = 'btn-holiday';

    button.innerHTML = buttonName;
    button.id = buttonID;

    divDad.appendChild(button);
};

createButtonHolyday('Feriados');

// Parte 3:

const showHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHoliday = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'red';
    let color = 'white';

    getHolidayButton.addEventListener('click', () => {
        for (let i = 0; i < getHoliday.length; i ++) {
            if (getHoliday[i].style.backgroundColor === setNewColor) {
                getHoliday[i].style.backgroundColor = backgroundColor;
                getHoliday[i].style.color = '#777';
            } else {
                getHoliday[i].style.backgroundColor = setNewColor;
                getHoliday[i].style.color = color;
            }
        }
    })
}

showHolidays();

// Parte 4:

const buttonFriday = (buttonName) => {
    let divDad = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let buttonID = 'btn-friday';

    button.innerHTML = buttonName;
    button.id = buttonID;

    divDad.appendChild(button);
}

buttonFriday('Sexta-Feira');

// Parte 5:

const changeFriday = () => {
    let button = document.querySelector("#btn-friday");
    let fridays = document.querySelectorAll('.friday');
    let newText = 'Uhuuuuuuuu';
    button.addEventListener('click', () => {
        for (let i = 0; i < fridays.length; i ++) {
            if (fridays[i].innerHTML !== newText) {
                fridays[i].innerHTML = newText;
            } else {
                fridays[i].innerHTML = fridays[i];
            }
        }
    })
}

changeFriday();

// Parte 6:

const zoomEfect = () => {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', () => {
        event.target.style.fontSize = '40px';
        event.target.style.fontWeight = '600';
    })
}

const zoomDefect = () => {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', () => {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    })
}

zoomEfect();
zoomDefect();

// Parte 7:

const tasks = (task) => {
    let divDad = document.querySelector('.my-tasks');
    let taskTag = document.createElement('span');

    taskTag.innerHTML = task;
    divDad.appendChild(taskTag);
}

tasks('Dia 5.3');

// Parte 8:

const taskColor = (color) => {
    let divDad = document.querySelector('.my-tasks');
    let taskColorDiv = document.createElement('div');
    let backgroundColor = color;

    taskColorDiv.className = 'task';
    taskColorDiv.style.backgroundColor = backgroundColor;
    divDad.appendChild(taskColorDiv);
}

taskColor('red');

// Parte 9:

const selectTask = () => {
    let selected = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    
    myTasks.addEventListener('click', (event) => {
        if (selected.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    });
}

selectTask();