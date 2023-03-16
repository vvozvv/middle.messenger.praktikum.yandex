export default `
    <div class="chat-content__bottom">
        <form action='#' name="login" id='chat-message' class="form chat-content__control">
            <div class="chat-content__files">
                <div class="chat-content__icon">
                    {{{fileIcon}}}
                </div>
            </div>
            <div class="chat-content__input-box">
                {{{inputSearch}}}
            </div>
            <div class="chat-content__send">
                <button type='submit'>
                    <div class="chat-content__icon">
                        {{{sendFile}}}
                    </div>
                </button>
            </div>
        </form>
    </div>
`;
