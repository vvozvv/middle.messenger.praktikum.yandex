export const InputTmpl = `
  <div class="input-box" >
    {{#if label}}
      <label for="password" class="input-box__title">
        {{label}}
        <span class="input-box__required">{{#if validation.required}}*{{/if}} </span>
      </label>
    {{/if}} 
    <input
      data-input-id={{id}}
      class="{{name}}__input input {{className}} {{#if error}}input--error{{/if}}"
      type={{type}}
      name={{name}}
      placeholder={{placeholder}}
      required={{validation.required}}
      value={{value}}
    >
    <p class="input-box__error" data-input-error-id={{id}}>Ошибка</p>
  </div>
`;
