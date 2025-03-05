document.addEventListener('DOMContentLoaded', function() {
    const sendMessageButton = document.getElementById('sendMessage');
    const commentNameInput = document.getElementById('comment-name');
    const commentTextInput = document.getElementById('comment-text');
    const commentList = document.getElementById('comment-list');

    // Load existing comments from local storage
    function loadComments() {
        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        savedComments.forEach(({ name, text }) => addCommentToList(name, text));
    }

    // Save comment to local storage
    function saveComment(name, text) {
        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        savedComments.push({ name, text });
        localStorage.setItem('comments', JSON.stringify(savedComments));
    }

    // Add comment to the list
    function addCommentToList(name, text) {
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('comment-item');

        const nameElement = document.createElement('strong');
        nameElement.textContent = name + ': ';

        const textElement = document.createElement('span');
        textElement.textContent = text;

        commentContainer.appendChild(nameElement);
        commentContainer.appendChild(textElement);
        commentList.appendChild(commentContainer);
    }

    sendMessageButton.addEventListener('click', function() {
        const name = commentNameInput.value.trim();
        const text = commentTextInput.value.trim();

        if (name && text) {
            addCommentToList(name, text);
            saveComment(name, text);

            // Clear input fields
            commentNameInput.value = '';
            commentTextInput.value = '';
        } else {
            alert('Please enter both your name and message.');
        }
    });

    loadComments(); 
});
