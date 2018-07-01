import { LitElement, html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

class MyApp extends connect(store)(LitElement) {

}