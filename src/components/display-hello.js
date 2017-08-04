import {sayHello} from '../services/hello-service';

class DisplayHello extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>${sayHello()}</div>
            <br>
        `;
    }
}

window.customElements.define('display-hello', DisplayHello);
