import * as SettingsIcon from '../../assets/image/icon/dot-menu-more.svg';

const template = `
  <div class="chat-item {{#if active}} chat-item--active {{/if}}">
    <div class="chat-item__image"></div>
      <div class="chat-item__content">
        <p class="chat-item__name">{{name}}</p>
        <p class="chat-item__message">{{text}}</p>
      </div>
      <div class="chat-item__settings">
        <div class="chat-item__header">
          <p class="chat-item__date">{{time}}</p>
          <div class="chat-item__setting-icon">
            <img src="${SettingsIcon}" alt="Настройки" class="chat-item__setting-icon-image">
          </div>
        </div>
        <div class="chat-item__active">
          <div class="chat-item__count-message">{{count}}</div>
        </div>
      </div>
  </div>
`;

export default template;
