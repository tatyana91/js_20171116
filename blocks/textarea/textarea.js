(function () {
    'use strict';

    const Block = window.Block;

    class Textarea extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `
            <textarea class="textarea" placeholder="${this.options.placeholder}"></textarea>`;
        }

    }

    window.Textarea = Textarea;
})();