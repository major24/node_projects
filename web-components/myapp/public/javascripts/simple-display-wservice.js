// https://alligator.io/web-components/attributes-properties/

(function() {
    const tmpl = document.createElement('template');

    tmpl.innerHTML = `
        <div>
            <span>...</span>
        </div>
    `;

    class SimpleDisplayWservice extends HTMLElement {
        constructor() {
            console.log('init popup');
            super();

            // create shasow root
            this.attachShadow = this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

            this.displayVal = this.shadowRoot.querySelector('span');
        } //endof ctor

        connectedCallback() {
            console.log('in connected-cb');
            if (!this.hasAttribute('value')) {
                //console.log('setting def value');
                this.setAttribute('value', 100);
            }
        }

        static get observedAttributes() {
            return ['value'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            console.log('in attributeChanged-cb');
            this.displayVal.innerText = this.value;
        }

        get value() {
            return this.getAttribute('value');
        }
        set value(newValue) {
            this.setAttribute('value', newValue);
        }
    }

    window.customElements.define('simple-display-wservice', SimpleDisplayWservice);
})();
