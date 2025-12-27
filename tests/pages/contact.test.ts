import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Contact from '~/pages/contact.vue'

describe('Contact Page', () => {
  it('renders contact page', async () => {
    const wrapper = await mountSuspended(Contact)
    expect(wrapper.text()).toContain('Contact')
  })

  it('renders a div element', async () => {
    const wrapper = await mountSuspended(Contact)
    expect(wrapper.find('div').exists()).toBe(true)
  })
})
