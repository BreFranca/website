import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Footer from '~/components/Footer.vue'

describe('Footer Component', () => {
  it('renders footer with copyright text', async () => {
    const wrapper = await mountSuspended(Footer)

    expect(wrapper.text()).toContain('Breno França')
    expect(wrapper.text()).toContain('All rights reserved')
  })

  it('displays current year', async () => {
    const currentYear = new Date().getFullYear()
    const wrapper = await mountSuspended(Footer)

    expect(wrapper.text()).toContain(currentYear.toString())
  })

  it('has footer element', async () => {
    const wrapper = await mountSuspended(Footer)

    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.find('.footer').exists()).toBe(true)
  })

  it('contains copyright symbol', async () => {
    const wrapper = await mountSuspended(Footer)

    expect(wrapper.text()).toContain('©')
  })
})
