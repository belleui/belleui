import { LitElement, html, css } from 'lit-element'

import '@belleui/belle-button'

class HomePage extends LitElement {
  static styles = css`
    .container {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
    a {
      text-decoration: none;
      color: #007bff;
      transition: all .3s;
    }
    a:hover{
      color: #0056b3;
      text-decoration: underline;
    }
    h1 {
      font-size: 50px;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 26px;
      color: #fff;
    }
    .flex > div {
      flex: 1;
    }
    .code-example img {
      width: 100%;
    }

  `

  render() {
    return html`
      <div class="container">
        <section>
          <div class="flex">
            <div>
              <h1>Belleui</h1>
              <p>Bellui是一个Web-Components的UI组件库，您可以在HTML中或者其他任何框架如：<a href="https://github.com/facebook/react">React</a>, <a href="https://github.com/vuejs/vue">Vue</a>, <a href="https://github.com/angular/angular">Angular</a>中使用。我们提供了日常开发中常见的组件，如果button，input等。</p>
              <app-link href="/components">
                <belle-button type="primary">开始使用</belle-button>
              </app-link>
            </div>
            <div class="code-example">
              <img src="http://qgy3nib4w.hn-bkt.clouddn.com/example_code.png" />
            </div>
          </div>
        </section>
      </div>
    `
  }
}

customElements.define('home-page', HomePage)
