export default `
    <div class="profile-header">
        <div class="profile-header__avatar-block">
            {{#if avatar}}
                <img src='{{avatar}}' alt="Аватар" />
            {{/if}}
        </div>
        
        {{{buttonSend}}}
        <div class="profile-header__name">{{{name}}}</div>
    </div>
`;