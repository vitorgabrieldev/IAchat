



document.querySelector('#btnSendMsg').addEventListener('click', () => chatSend.verifyMsg());
let textContent = document.querySelector('#commandChat').value;

// Variable Settings Chat
const chatSend = {
    verifyMsg: function() {
        consle.log(textContent)
    },
};