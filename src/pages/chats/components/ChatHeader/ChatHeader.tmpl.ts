export default `
    <div class="chat-header__row">
        {{{uploadImage}}}
        {{{popupAddUser}}}
        {{{popupDeleteChat}}}
        {{{popupDeleteUser}}}
        <div class="chat-header__user">
            {{{imageChange}}}
            <p class="chat-header__username">{{active.title}}</p>
        </div>
        
        <div class="chat-header__actions">
            {{{buttonAdd}}}
            {{{buttonDeleteProfile}}}
            {{{buttonDelete}}}
        </div>
    </div>
`;
