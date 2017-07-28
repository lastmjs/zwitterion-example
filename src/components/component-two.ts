import {sayGoodbye} from '../services/goodbye-world-service';

class ComponentTwo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>${sayGoodbye()}</div>
        `;
    }
}

window.customElements.define('component-two', ComponentTwo);
