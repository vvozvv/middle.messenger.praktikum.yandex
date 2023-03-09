export default `
    <div class="chat-header__row">
        {{{popupAddUser}}}
        {{{popupDeleteChat}}}
        {{{popupDeleteUser}}}
        <div class="chat-header__user">
            <div class="chat-header__image"></div>
            <p class="chat-header__username">{{activeChat.title}}</p>
        </div>
        
        <div class="chat-header__actions">
            {{{buttonAdd}}}
            {{{buttonDeleteProfile}}}
            {{{buttonDelete}}}
        </div>
    </div>
`;
