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
                
            </style>
        `;
    }
}

window.customElements.define('my-view3', MyView3);