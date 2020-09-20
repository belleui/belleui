import { LitElement, html, css } from 'lit-element'
import { router } from 'lit-element-router'
import { changeRoute } from './utils'

import './components/app-main'
import './components/app-nav'

import './container/home-page'
import './container/components-page'

import './examples/button-example'

class MyApp extends router(LitElement) {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `

  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object }
    };
  }

  static get routes() {
    return [
      { name: 'home', pattern: changeRoute() },
      { name: 'components', pattern: changeRoute('/components') },
      { name: 'not-found', pattern: '*' }
    ]
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    return html`
      <div class="container">
        <app-nav></app-nav>
        <app-main active-route=${this.route}>
          <home-page route="home"></home-page>
          <components-page route="components"></components-page>
          <button-example route="not-found"></button-example>
        </app-main>
      </div>
    `
  }

}

customElements.define('my-app', MyApp)
