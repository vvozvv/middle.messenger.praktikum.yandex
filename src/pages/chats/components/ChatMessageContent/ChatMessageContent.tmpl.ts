export default `
    <div class="chat__main {{#if active.id}}chat__main--content{{/if}}">
        {{#if isLoadingChat}}
            {{{spinner}}}
        {{else if active.id}}
            <div class="chat-header chat__header">
                {{{chatHeader}}}
            </div>
            
            <div class="chat-content">
                {{{content}}}
            </div>
            {{{bottomPanel}}}
        {{else}}
            <p class="chat__empty-text">Выберите чат чтобы отправить сообщение</p>
        {{/if}}  
    </div>
`;
