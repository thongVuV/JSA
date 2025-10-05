        const btn = document.getElementById('chatbot-btn');
        const box = document.getElementById('chatbox');
        btn.onclick = () => {
            box.style.display = box.style.display === 'none' ? 'block' : 'none';
        };
