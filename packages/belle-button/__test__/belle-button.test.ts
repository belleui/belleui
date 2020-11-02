import { fixture, expect, elementUpdated } from '@open-wc/testing'

import '@belleui/belle-button'

let el: HTMLButtonElement & { outline: boolean }

describe('belle-button', () => {
  it('Default Button', async () => {
    el = await fixture('<belle-button>button</belle-button>')
    expect(el.type).to.equal('default')
  })

  it('Different button type', async () => {
    el = await fixture('<belle-button type="primary">Primary</belle-button>')
    expect(el.type).to.equal('primary')
  })

  it('Disable button', async () => {
    el = await fixture('<belle-button></belle-button>')

    expect(el.disabled).to.be.false

    el.disabled = true
    await elementUpdated(el)

    expect(el.disabled).to.be.true
  })

  it('Outline Button', async () => {
    el = await fixture('<belle-button></belle-button>')

    expect(el.outline).to.be.false

    el.outline = true
    await elementUpdated(el)

    expect(el.outline).to.be.true
  })
})
