import { fixture, expect, html } from '@open-wc/testing'

import '@belleui/belle-button'

describe('belle-card', () => {
  it('loads', async () => {
    const el = await fixture(html`
      <belle-card>
        <div>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </div>
      </belle-card>
    `)
    await expect(el).to.be.accessible()
  })

  it('card title', async () => {
    const el = await fixture(html`
      <belle-card title="Card">
        <div>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </div>
      </belle-card>
    `)

    await expect(((el) as HTMLElement).title).to.equal('Card')
  })
})
