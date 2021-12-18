import { route } from '../constants/index.js';
import { setEvent } from '../eventBus/index.js';
import Component from '../interface/Component.js';
import { getState, setState } from '../store/index.js';
import ManageCrew from './ManageCrew.js';
import ManageTeam from './ManageTeam.js';

export default class App extends Component {
    setup() {
        const Components = [ManageCrew, ManageTeam];

        this.route = route.map((item, idx) => ({
            ...item,
            Component: new Components[idx](`#${this.selectors.ID.TARGET}`, { key: item.key }),
        }));
        this.delegateEvent();
    }

    willmount() {
        this.tabIdx = getState((state) => state.tabIdx);
    }

    mount() {
        this.route[this.tabIdx].Component.render();
    }

    delegateEvent() {
        setEvent('click', this.selectors.EVENT_KEY.BUTTON, (ev) => {
            const idx = this.selectors.ID.BUTTONS.findIndex((button) => button === ev.target.id);
            if (this.tabIdx === idx) return;
            setState('tabIdx', idx);
        });
    }

    buttonListTemplate() {
        return this.route
            .map(
                (item, idx) => `
                    <li>
                        <button
                            id="${this.selectors.ID.BUTTONS[idx]}"
                            ${this.eventAttr}="${this.selectors.EVENT_KEY.BUTTON}">
                            ${item.label}
                        </button>
                    </li>
                `
            )
            .join('');
    }

    template() {
        return `
            <header>
                <h1>${this.resources.HEADER}</h1>
                <nav>
                    <ul>${this.buttonListTemplate()}</ul>
                </nav>
            </header>

            <main id="${this.selectors.ID.TARGET}"></main>
        `;
    }
}
