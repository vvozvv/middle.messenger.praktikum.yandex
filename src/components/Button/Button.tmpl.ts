const button = `
  <button
    type={{type}}
    class="{{page}}__button button button--{{appearance}}"
    name="button"
    {{#if isLoading}}disabled{{/if}}
  >
    {{#if isLoading}}
        <div class="button__spinner">
            {{{spinner}}}
        </div>
    {{else}}
        {{title}}
    {{/if}}
  </button>
`;

export default button;
