import { customElement, LitElement, html, css, TemplateResult } from 'lit-element';
import '@belleui/belle-button'

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    .home-body {
      text-align: center;
    }
    .title {
      margin-top: 48px;
      font-size: 48px;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .introduce {
      box-sizing: border-box;
      padding: 10px;
      font-size: 18px;
    }
    .img {
      width: 100%;
      height: 350px;
      background: url('http://qgy3nib4w.hn-bkt.clouddn.com/demo.png') no-repeat center;
      background-size: contain;
    }
  `
  render(): TemplateResult {
    return html`
      <section class="home-body">
        <h1 class="title">Belle Design</h1>
        <div class="img"></div>
        <div class="introduce">
          <p>Bellui是一个基于 Web Components 的 UI 组件库，您可以在HTML中，或者任何框架（如React, Vue, Angular）中使用。引入组件后，你可以随时随地的像使用原生html标签一样使用组件。</p>
          <belle-button type="primary">
            <a href="/components">开始使用</a>
          </belle-button>
        </div>
      </section>
    `
  }
}
