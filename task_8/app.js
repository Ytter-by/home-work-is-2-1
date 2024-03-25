const addMeetingBtn = document.querySelector('#addMeetingBtn');
const meetingsContainer = document.querySelector('#meetingsContainer');

const checkInput = () => {
    const title = document.querySelector('#meetingTitle').value;
    const place = document.querySelector('#meetingPlace').value;
    const time = document.querySelector('#meetingTime').value;
    const description = document.querySelector('#meetingDescription').value;
    const participants = document.querySelector('#meetingParticipants').value;

    const button = document.querySelector('#addMeetingBtn');
    if (title !== "" && place !== "" && time !== "" && description !== "" && participants !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const addTask = () => {
    const title = document.querySelector('#meetingTitle').value;
    const place = document.querySelector('#meetingPlace').value;
    const time = document.querySelector('#meetingTime').value;
    const description = document.querySelector('#meetingDescription').value;
    const participants = document.querySelector('#meetingParticipants').value;

    const card = document.createElement('div');
    card.classList.add('card');
  
    const colorClasses = ['green', 'blue', 'red'];
    const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
  
    card.classList.add(randomColorClass);
  
    card.innerHTML =` 
        <h2>${title}</h2>
        <p><strong>Место:</strong> ${place}</p>
        <p><strong>Время:</strong> ${time}</p>
        <p><strong>Описание:</strong> ${description}</p>
        <p><strong>Участники:</strong> ${participants}</p>
    `;
  
    meetingsContainer.appendChild(card);
}

addMeetingBtn.disabled = true;

document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('input', checkInput);
});

