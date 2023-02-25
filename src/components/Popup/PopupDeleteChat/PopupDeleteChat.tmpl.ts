export default `
    <div class="delete-chat">
        <p class="delete-chat__title">Удалить чат "{{activeChat.title}}"?</p>
        <div class="delete-chat__row">
            {{{closeButton}}}
            {{{deleteButton}}}
        </div>
    </div>
`;