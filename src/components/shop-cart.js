import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

// This element is connected to the Redux store.
import { store } from '../store';

// These are the elements needed by element.
import { removeFromCartIcon } from './my-icons';
import './shop-item.js'

// These are the actions needed by element.
import { removeFromCart } from '../actions/shop';

// These are the reducers needed by this element.
import { cartItemsSelector, cartTotalSelector } from '../reducers/shop';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './button-shared-style';


class ShopCart extends connect(store)(LitElement) {
    _render({_items, _total}) {
        return html`
            ${ButtonSharedStyles}
            <style>
                :host { display: block }
            </style>
            <p hidden="${_items.length !== 0}">Please add some products to cart.</p>
            ${_items.map((item) =>
                html`
                    <div>
                        <shop-item name="${item.title}" amount="${item.amount}" price="${item.price}"></shop-item>
                        <button
                            on-click="${(e) => store.dispatch(removeFromCart(e.currentTarget.dataset['index']))}"
                            data-index$="${item.id}"
                            title="Remove from cart">
                            ${removeFromCartIcon}
                        </button>
                    </div>
                `
            )}
           <p hidden="${!_items.length}"><b>Total:</b> ${_total}</p>
        `;
    }

    static get properties() { return {
        _items: Array,
        _total: Number
    }}

    // This is called every time something is updated the store.
    _storeChanged(state) {
        this._items = cartItemsSelector(state);
        this._total = cartTotalSelector(state);
    }
}

window.customElements.define('shop-cart', ShopCart);