import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element';

// These are the shared styles needed by this element
import { SharedStyles } from './shared-styles';

class MyView1 extends PageViewElement {

}

window.customElements.define('my-view1', MyView1);
