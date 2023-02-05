const template = `
  <div class="message {{#if me}}message--current{{/if}}">
    <p class="message__item">{{text}}</p>
    <p class="message__date">{{date}}</p>
  </div>
`;

export default template;
