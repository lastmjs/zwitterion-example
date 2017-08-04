import {sayHowdy} from '../services/howdy-service';

class DisplayHowdy extends HTMLElement {
    innerHTML: string;

    connectedCallback() {
        this.innerHTML = `
            <div>${sayHowdy()}</div>
            <br>
        `;
    }
}

window.customElements.define('display-howdy', DisplayHowdy);
