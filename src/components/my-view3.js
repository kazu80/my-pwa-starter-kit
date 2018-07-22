import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element';
import { connect } from 'pwa-helpers/connect-mixin';

// This element is connected to the Redux store.
import { store } from '../store';

// These are the actions needed by the element
import { checkout } from '../actions/shop.js';

// We are lazy loading its reducer.
import shop, { cartQuantitySelector } from '../reducers/shop';
store.addReducers({
    shop
                  });

// There are the elements needed by this element.
import './shop-products';
import './shop-cart';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles';
import { ButtonSharedStyles } from './button-shared-style';
import { addToCartIcon } from './my-icons';

class MyView3 extends connect(store)(PageViewElement) {
    _render({_quantity, _error}) {
        return html`
            ${SharedStyles}
            ${ButtonSharedStyles}
            <style>
                /* Add more specificity(.checkout) to workaround an issue in lit-element:
                   https://github.com/PolymerLabs/lit-element/issues/34 */
                button.checkout {
                    border: 2px solid var(--app-dark-text-color);
                    border-radius: 3px;
                    padding: 8px 16px;
                }
                button.checkout:hover {
                    border-color: var(--app-primary-color);
                }
                .cart, .cart svg {
                    fill: var(--app-primary-color);
                    width: 64px;
                    height: 64px;
                }
                .circle.small {
                    margin-top: -72px;
                    width: 64px;
                    height: 64px;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 30px;
                }
            </style>
            
            <section>
                <h2>Redux example: shopping cart</h2>
                <div class="cart">${addToCartIcon}><div class="circle small">${_quantity}</div></div>
                <p>This is a slightly more advanced Redux example, that simulates a
                   shopping cart: getting the products, adding/removing items to the
                   cart, and a checkout action, that can sometimes randomly fail (to
                   simulate where you would add failure handling).</p>
                <p>This view, as well as its 2 child element, <code>&lt;shop-products&gt;</code> and
                <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>     
            </section>
            <section>
                <h3>Products</h3>
                <shop-products></shop-products>
                
                <div>${_error}</div>
                <br>
                <p>
                    <button class="checkout" hidden="${_quantity === 0}"
                        on-click="${() => store.dispatch(checkout())}">
                        Checkout
                    </button>
                </p>
            </section>
        `;
    }

    static get properties() { return {
        // This is the data from the store.
        _quantity: Number,
        _error: String
    }}

    // This is called every time something is updated in the store.
    _stateChanged(state) {
        this._quantity = cartQuantitySelector(state);
        this._error = state.shop.error;
    }
}

window.customElements.define('my-view3', MyView3);