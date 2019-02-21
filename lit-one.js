import { html, LitElement } from 'lit-element';
import style from './lit-one-styles.js';

class LitOne extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Otra cosa';
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello}</h2>
      `;
    }
}

window.customElements.define("lit-one", LitOne);
