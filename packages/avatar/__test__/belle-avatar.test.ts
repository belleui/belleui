import { fixture, expect, elementUpdated } from '@open-wc/testing'

import '../lib/belle-avatar.js'

let el: HTMLElement & {
  shape: boolean,
  src: string
}

describe('belle-avatar', () => {

  it('Default Shape', async () => {
    el = await fixture('<belle-avatar></belle-avatar>')
    expect(el.shape).to.equal('circle')
  })

  it('The square shape', async () => {
    el = await fixture('<belle-avatar shape="square"></belle-button>')
    expect(el.shape).to.equal('square')
  })

  it('Has src attritube', async () => {
    let src = 'https://avatars0.githubusercontent.com/u/21070775?s=460&u=c736c1e65eae03fdf68b4565fb610d411f86fe7c&v=4'
    el = await fixture(`<belle-avatar .src=${src}></belle-avatar>`)
    expect(el.src).to.equal(src)

    expect(el).shadowDom.to.equal(`
      <span class="belle-avatar belle-avatar-img">
        <img src=${src} />
      </span>
    `)
  })
})
