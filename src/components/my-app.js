import { LitElement, html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';
import {updateDrawerState} from '../actions/app';

class MyApp extends connect(store)(LitElement) {
    _render({appTitle, _page, _drawerOpened, _nackbarOpened, _offline}) {
        // Anything that's related to rendering should be done in here.
        return html`
        <style>
            :host {
                --app-drawer-width: 256px;
                display: block;
                
                --app-primary-color: #E91E63;
                --app-secondary-color: #293237;
                --app-dark-text-color: var(--app-secondary-color);
                --app-light-text-color: white;
                --app-section-even-color: #f7f7f7;
                --app-section-odd-color: white;
                
                --app-header-background-color: white;
                --app-header-text-color: var(--app-dark-text-color);
                --app-header-selected-color: var(--app-primary-color);
                
                --app-drawer-background-color: var(--app-secondary-color);
                --app-drawer-text-color: var(--app-light-text-color);
                --app-drawer-selected-color: #78909C;
            }
            
            app-header {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                text-align: center;
                background-color: var(--app-header-background-color);
            }
            
            .toolbar-top {
                background-color: var(--app-header-background-color);
            }
            
            [main-title] {
                font-family: 'Pacifico';
                text-transform: lowercase;
                font-size: 30px;
                /* In the narrow layout, the toolbar is offset by the width of the
                drawer button, and the text looks not created. Add a padding to
                match that button */
                padding-right: 44px;  
            }
            
            .toolbar-list > a {
                display: block;
                text-decoration: none;
                color: var(--app-drawer-text-color);
                line-height: 40px;
                padding: 0 24px;
            }
            
            .toolbar-list > a[selected] {
                color: var(--app-drawer-selected-color);
            }
            
            .menu-btn {
            
            }
            
            .drawer-list {
            
            }
            
            .drawer-list > a {
            
            }
            
            .drawer-list > a[selected] {
            
            }
            
            /* Workaround for IE11 displaying <main> as inline */
            main {
            
            }
            
            .main-content {
            
            }
            
            .page {
            
            }
            
            .page[active] {
            
            }
            
            footer {
            
            }
            
            /* Wide layout: when the viewport width is bigger than 460px, layout changes to a wide layout. */
            @media (min-width: 460px) {
                .toolbar-list {}
                
                .menu-btn {}
                
                .main-content {}
                
                /* The drawer button isn't shown in the wide layout, so we don't need to offset the title */
                [main-title] {}
            }
        </style>
        
        <!-- Header -->
        <app-header condenses reveals effects="waterfall">
            <app-toolbar class="toolbar-top">
                <button class="menu-btn" title="Menu" on-click="${_ => store.dispatch(updateDrawerState(true))}">${menuIcon}</button>
                <div main-title>${appTitle}</div>
            </app-toolbar>
        </app-header>
        `;
    }
}