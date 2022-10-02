const socket = io();

const chatForm = {
    HTMLelement : document.getElementById('form'),
    inputField : document.getElementById('input'),
} 

chatForm.HTMLelement.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (chatForm.inputField.value) {
        socket.emit('chat message', chatForm.inputField.value);
        chatForm.inputField.value = '';
    }
});