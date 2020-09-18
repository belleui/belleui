import { LitElement, html, css } from 'lit-element'

class HomePage extends LitElement {
  static styles = css`
    .container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
    }
    h1 {
      font-size: 40px;
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
  `

  render() {
    return html`
      <div class="container">
        <section>
          <h1 class="title">Belle UI</h1>
          <div>
            Bellui是一个Web-Components的UI组件库，您可以在HTML中或者其他任何框架如：<a href="https://github.com/facebook/react">React</a>, <a href="https://github.com/vuejs/vue">Vue</a>, <a href="https://github.com/angular/angular">Angular</a>中使用。
          </div>
        </section>
        <section>
        </section>
      </div>
    `
  }
}

customElements.define('home-page', HomePage)
