const socket = io();

const chatForm = {
    HTMLelement : document.getElementById('form'),
    inputField : document.getElementById('input'),
    ulMessages: document.getElementById('messages'),
} 

chatForm.HTMLelement.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (chatForm.inputField.value) {
        socket.emit('chat message', chatForm.inputField.value);
        chatForm.inputField.value = '';
    }
});

socket.on('chat message', (message)=>{
    let item = document.createElement('li');
    item.textContent = message;
    chatForm.ulMessages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})
