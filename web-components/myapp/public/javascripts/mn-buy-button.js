//https://alligator.io/web-components/attributes-properties/

(function() {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
    </style>
    <div">
        <button type="button" id="submit">Buy</button>
    </div>
  `;

  class MnBuyButton extends HTMLElement {
    constructor() {
      super();

        this.submit = this.submit.bind(this);

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.submitBtn = this.shadowRoot.querySelector('#submit');
        this.productId = 'aa';

        // adding custom events
        // Create a new event, allow bubbling, and provide any data you want to pass to the "details" property
        this.eventBuy = new CustomEvent('buy', {
            bubbles: true,
            detail: { text: () => 'this.textValue.value' }
        });


    }

    static get observedAttributes() {
      return ['product-id'];
    }

    connectedCallback() {
        this.submitBtn.addEventListener('click', this.submit);
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    disconnectedCallback() {
      this.submitBtn.removeEventListener('click', this.submit);
    }


    submit() {
        console.log('submit buy button..');
        this.dispatchEvent(this.eventBuy);
    }
  }

  window.customElements.define('mn-buy-button', MnBuyButton);
})();