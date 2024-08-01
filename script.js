const telegramBotToken = '7292696878:AAES72CORIpfTibZQY3JvCnogWbg8zw7s0o';
const telegramChatId = '7225535311';

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message !== '') {
        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message
            })
        })
        .then(response => response.json())
        .then((data) => {
            if (data.ok) {
                alert('Message envoyé avec succès!');
                messageInput.value = '';
            } else {
                alert('Erreur lors de l\'envoi du message');
            }
        })
        .catch((error) => {
            console.error(error);
            alert('Erreur lors de l\'envoi du message');
        });
    }
});

