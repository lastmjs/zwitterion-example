import {sayHello} from '../services/hello-world-service';

class ComponentOne extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>${sayHello()}</div>
        `;
    }
}

window.customElements.define('component-one', ComponentOne);
