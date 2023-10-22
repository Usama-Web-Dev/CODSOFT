const display = document.querySelector('.display');
const btn = document.querySelector('.btn');
const listContainer = document.querySelector('.list-container');


btn.addEventListener('click', ()=>{
    if(display.value === ''){
        alert('Please Enter the Value');
    }else{
        const li = document.createElement('li');
        li.textContent = display.value;
        listContainer.appendChild(li);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        }
        display.value = '';
        saveData();
})

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('active');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
    }
    saveData();
})

const saveData = ()=>{
    localStorage.setItem('data', listContainer.innerHTML)
}
const showData = ()=>{
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();


// DAys

const day = document.querySelector('.day');
const today = new Date().getDay();
const days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'];
day.innerHTML = days[today];


