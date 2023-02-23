import ImageNotFound from '../../assets/image/icon/image-not-found.svg';

const template = `
  <div class="profile-image-block">
    <div class="profile-image-block__image">
      <img
        src="{{#if avatarLink}}
        {{{avatarLink}}}
        {{else}}
        ${ImageNotFound}
        {{/if}}"
        alt=""
      >
    </div>
    <div class="profile-image-block__name">{{{name}}}</div>
  </div>
`;

export default template;