const ChatPageTemplate = `
    <main class="chat">
        {{{uploadImage}}}
        {{{addChatPopup}}}
        <div class="chat__info">
          {{{profileHeader}}}
          <div class="chat__search">
              {{{inputSearch}}}
          </div>
          {{{chatList}}}
          {{{newChatButton}}}
      </div>
			{{{messageContent}}}
    </main>
`;

export default ChatPageTemplate;
