import { LitElement, html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

class MyApp extends connect(store)(LitElement) {
    _render({appTitle, _page, _drawerOpened, _nackbarOpened, _offline}) {
        // Anything that's related to rendering should be done in here.
        return html`
        <style>
            :host {
            
            }
            
            app-header {
            
            }
            
            .toolbar-top {
            
            }
            
            [main-title] {
            
            }
            
            .toolbar-list > a {
            
            }
            
            .toolbar-list > a[selected] {
            
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
        `;
    }
}