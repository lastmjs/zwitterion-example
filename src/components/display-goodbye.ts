import {sayGoodbye} from '../services/goodbye-service';

class DisplayGoodbye extends HTMLElement {
    innerHTML: string;

    connectedCallback() {
        this.innerHTML = `
            <div>${sayGoodbye()}</div>
        `;
    }
}

window.customElements.define('display-goodbye', DisplayGoodbye);
