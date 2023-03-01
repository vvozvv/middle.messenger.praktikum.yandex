export default `
<div class="chat-content__scroll">
    {{#each messages}}
        <div class="message {{#if me}}message--current{{/if}}">
            <p class="message__item">{{this.content}}</p>
            <p class="message__date">{{this.time}}</p>
          </div>
    {{/each}}
</div>
`;