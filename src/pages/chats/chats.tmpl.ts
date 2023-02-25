const ChatPageTemplate = `
    <main class="chat">
        {{{addChatPopup}}}
    	<div class="chat__info">
        {{{profileHeader}}}
        <div class="chat__search">
            {{{inputSearch}}}
        </div>
        {{{chatList}}}
        {{{newChatButton}}}
		</div>
			
    	<div class="chat__main">
    	    <div class="chat-header chat__header">
                {{{chatHeader}}}
            </div>
            <div class="chat-content">
                {{{content}}}
            </div>
            {{{bottomPanel}}}
        </div>
    </main>
`;

export default ChatPageTemplate;
