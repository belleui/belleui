import {
  customElement,
  LitElement,
  html,
  property,
  TemplateResult,
  CSSResultArray,
  css,
  queryAll
} from 'lit-element'
import style from './belle-datepicker-css'

/**
 * @element belle-datepicker
 */
@customElement('belle-datepicker')
export class BelleDatepicker extends LitElement {
  protected currentIndex = 0

  static styles: CSSResultArray = [
    style,
    css`
      div {
        display: inline-flex;
        border: 1px solid red;
      }
      input {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        outline: none;
        text-align: center;
      }
      .year {
        width: 35px;
      }
      .month {
        width: 20px;
      }
      .day {
        width: 20px;
      }
    `
  ]

  // 获取所有的input
  @queryAll('input') protected inputEles!: HTMLInputElement[]

  @property()

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('keydown', this.handleKeyboardEvent)
  }

  firstUpdated() {
    Array.from(this.inputEles).forEach((inputEle: HTMLInputElement, index: number) => {
      inputEle.addEventListener('focus', () => {
        this.currentIndex = index
      })
    })
  }

  render(): TemplateResult {
    return html`
      <div>
        <input class="year" value="2020" />-
        <input class="month" value="02"/>-
        <input  class="day" value="20" />
      </div>
    `
  }

  // 监听键盘点击
  handleKeyboardEvent(e: KeyboardEvent) {
    const len = this.inputEles.length - 1

    // Left Arrow
    if (e.keyCode === 37) {
      this.currentIndex--
      if (this.currentIndex <= 0) {
        this.currentIndex = 0
      }
      this.inputEles[this.currentIndex].focus()
    }

    // Right Arrow
    if (e.keyCode === 39) {
      this.currentIndex++
      if (this.currentIndex >= len) {
        this.currentIndex = len
      }
      this.inputEles[this.currentIndex].focus()
    }

    // TODO Top Arrow

    // TODO Bottom Arrow
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'belle-datepicker': BelleDatepicker
  }
}
