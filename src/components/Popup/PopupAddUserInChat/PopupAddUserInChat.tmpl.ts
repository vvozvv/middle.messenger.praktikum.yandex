export default `
    <div class="add-user-popup">
        <p class="add-chat-popup__title">Добавить пользователя в чат "{{activeChat.title}}"</p>
        <form id="add-user-popup">
            {{{input}}}
            {{{buttonCreate}}}
        </form>
    </div>
`;