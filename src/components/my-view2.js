import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element';
import { connect } from 'pwa-helpers/connect-mixin';

// This elements is connected to Redux store.
import { store } from '../store';

// There are the actions needed by the element.
import { inclement, decrement} from '../actions/counter';

// We are lazy loading its reducer.
import counter from '../reducers/counter';
store.addReducers({
    counter
                  });

// These are the elements needed by this elements.
import './counter-element.js';

// There are the shared styles needed by this element.
import { SharedStyles } from './shared-styles';

class MyView2 extends connect(store)(PageViewElement) {
    _render(props) {
        return html`
            ${SharedStyles}
            <section>
                <h2>Redux example: simple counter</h2>
                <div class="circle">${props._value}</div>
                <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
                element is not built in a Redux-y way (you can think of it as being a
                third-party element you got from someone else), but this page is connected to the
                Redux store. When the element updates its counter, this page updates the values
                in the Redux store, and you can see the current value of the counter reflected in
                the bubble above.</p>
                <br><br>
            </section>
            <section>
                <p>
                    <counter-element value="${props._value}" clicks="${props._clicks}"
                        on-counter-increment="${() => store.dispatch(inclement())}"
                        on-counter-decrement="${() => store.dispatch(decrement())}">
                    </counter-element>
                </p>
            </section>
        `;
    }

    static get properties() {return {
        // This is the data from store.
        _clicks: Number,
        _value: Number
    }}

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this._clicks = state.counter.clicks;
        this._value  = state.counter.value;
    }
}

window.customElements.define('my-view2', MyView2);