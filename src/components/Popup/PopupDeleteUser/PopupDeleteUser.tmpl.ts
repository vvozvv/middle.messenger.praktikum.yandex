export default `
    <div class="delete-user-popup">
        <p class="add-chat-popup__title delete-user-popup__title">Удалить пользователя с чата "{{active.title}}"</p>
        <form id="delete-user-popup-form" class="delete-user-popup__row">
            {{#each user}}
                <div class="form-control">
                    <input
                        type="checkbox"
                        id="checkbox-checked-{{this.id}}"
                        name="checkbox-checked-{{this.id}}"
                        value="{{this.id}}"
                    />
                    <label for="checkbox-checked-{{this.id}}">{{this.first_name}} {{this.second_name}} (@{{this.login}})</label>
                </div>
            {{/each}}
        </form>
        {{{deleteButton}}}
    </div>
`;
