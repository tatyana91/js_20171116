(function () {
    'use strict';

    const Block = window.Block;
    const Input = window.Input;
    const Button = window.Button;
    const Textarea = window.Textarea;

    class App extends Block {
        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `
                <div class="app">
                    <div class="messages">
                        <div class="messages__item messages__item_recieve">                        
                            Гость: Хай
                        </div>
                        <div class="messages__item messages__item_send">  
                            Вы: Привет                      
                        </div>
                        <div class="messages__item messages__item_send">  
                            Вы: Я рад: наша беседа приобретает невинный светский стиль и продолжается в мажорном тоне. Все, что мы можем сделать – это продолжать задавать себе вопрос: «Это – Сообщение?» – по поводу каждого аспекта своего дела, своего ремесла, своей цели жизни и т.д.                     
                        </div>
                        <div class="messages__item messages__item_recieve">                        
                            Гость: «Если часто увлекаться, в Сообщение можно потеряться»...
                        </div>
                         <div class="messages__item messages__item_send">  
                            Вы: Я рад: наша беседа приобретает невинный светский стиль и продолжается в мажорном тоне. Все, что мы можем сделать – это продолжать задавать себе вопрос: «Это – Сообщение?» – по поводу каждого аспекта своего дела, своего ремесла, своей цели жизни и т.д.                     
                        </div>
                        <div class="messages__item messages__item_recieve">                        
                            Гость: «Если часто увлекаться, в Сообщение можно потеряться»...
                        </div>
                    </div>
                    <div class="auth">
                        <div class="auth__name js-name"></div>
                        <div class="auth__submit js-submit-name"></div>
                    </div>
                    <div class="new-message">
                        <div class="new-message__textarea js-textarea"></div>
                        <div class="new-message__submit js-submit-message"></div>
                    </div>
                </div>`;

            let button = new Button(this.node.querySelector('.js-submit-name'), {
                text: 'Войти'
            });

            let input = new Input(this.node.querySelector('.js-name'), {
                value: '',
                placeholder: 'Введите имя'
            });

            let textarea = new Textarea(this.node.querySelector('.js-textarea'), {
                placeholder: 'Текст сообщения'
            });

            let buttonSendMessage = new Button(this.node.querySelector('.js-submit-message'), {
                text: 'Отправить'
            });

            input.render();
            button.render();
            textarea.render();
            buttonSendMessage.render();
        }
    }

    window.App = App;
})();