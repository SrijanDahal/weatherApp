import {api__data} from './get_api.js';

export  const dom_manipulation = () => {
    const button = document.querySelector('.search-button');
    const inputOfUser = document.querySelector(".search");

    first();

    async function first() {
        const data = await api__data('Uganda');
        
        updateElement('.place', capitalizeFirstLetter(data.address), data.timezone.split('/')[0]);
        updateElement('.dateandtime', '', `${data.days[0].datetime} <br> ${data.currentConditions.datetime}`);
        updateElement('.tempmax', 'Max Temp', data.days[0].tempmax);
        updateElement('.temp', 'Temp', data.days[0].temp);
        updateElement('.tempmin', 'Min Temp', data.days[0].tempmin);
        updateElement('.humidity', 'Humidity', data.days[0].humidity);
        updateElement('.wind', 'Wind Speed', data.days[0].windspeed);
        updateElement('.conditions', 'Condition', data.days[0].conditions);
        updateElement('.description', 'Description', data.description);

        upcomingDays(data);
    }

    // adding a event listener to the button
    button.addEventListener("click", async (e) => {
        e.preventDefault();
        if(inputOfUser.value === "" || inputOfUser.value === null) {
            alert("Bruhh!! Don't joke around!!");
        }

        else {
            const data = await api__data(inputOfUser.value);
            console.log(data);
            updateElement('.place', capitalizeFirstLetter(data.address), data.timezone.split('/')[0]);
            updateElement('.dateandtime', '', `${data.days[0].datetime} <br> ${data.currentConditions.datetime}`);
            updateElement('.tempmax', 'Max Temp', data.days[0].tempmax);
            updateElement('.temp', 'Temp', data.days[0].temp);
            updateElement('.tempmin', 'Min Temp', data.days[0].tempmin);
            updateElement('.humidity', 'Humidity', data.days[0].humidity);
            updateElement('.wind', 'Wind Speed', data.days[0].windspeed);
            updateElement('.conditions', 'Condition', data.days[0].conditions);
            updateElement('.description', 'Description', data.description);

            upcomingDays(data);
        }
        inputOfUser.value = "";
    })
    
    
    function updateElement(selector, title, value) {
        const element = document.querySelector(selector);
        element.innerHTML = `<h3>${title}</h3> <p>${value}</p>`;
    }

    function capitalizeFirstLetter(str) {
        if (str.length === 0) return str; // Check if the string is empty
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    function upcomingDays(data) {
        const arrOfDays = [".day1", '.day2', '.day3', '.day4', '.day5', '.day6', '.day7'];

        for(let i = 0; i < 7; i++) {
            const element = document.querySelector(arrOfDays[i]);
            element.innerHTML = `<h3>${data.days[i + 1].datetime}</h3> <p>${data.days[i + 1].temp}</p>`;
        };
    }

    function gif_api(data) {
        
    }
}