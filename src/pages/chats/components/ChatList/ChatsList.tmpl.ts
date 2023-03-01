export default `
    <div class="chat__chat-list">
        {{#each chat}}            
            <div data-chat-id={{id}} class="chat-item {{#if active}} chat-item--active {{/if}}">
                <div class="chat-item__image">
                    {{#if this.avatar}}
                        <img src='{{this.avatar}}' alt="Аватар чата {{this.title}}" />
                    {{/if}}
                </div>
                <div class="chat-item__content">
                    <p class="chat-item__name">{{this.title}}</p>
                    <p class="chat-item__message">{{this.last_message.content}}</p>
                </div>
                <div class="chat-item__settings">
                    <div class="chat-item__header">
                        <p class="chat-item__date">{{last_message.time}}</p>
                    </div>
                    {{#if this.unread_count}}
                        <div class="chat-item__count-message">{{this.unread_count}}</div>
                    {{/if}}
                </div>
            </div>
        {{/each}}
    </div>
`;