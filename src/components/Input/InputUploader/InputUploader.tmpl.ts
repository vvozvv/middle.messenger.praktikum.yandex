export default `
  <div class="input-upload-box">
    <label for={{id}} class="input-upload-box__label">
    {{#if fileName}}
        {{{fileName}}}
    {{else}}
        Выбрать файл на компьютере
    {{/if}}
    
    </label>
    <input
      data-input-id={{id}}
      class="input-upload-box__input {{className}} {{#if error}}input--error{{/if}}"
      type="file"
      id={{id}}
      name={{name}}
      required
    />
    
    <p class="input-box__error" data-input-error-id={{id}}>Ошибка</p>
  </div>
`;