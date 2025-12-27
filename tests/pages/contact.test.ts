import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Contact from '~/pages/contact.vue'

describe('Contact Page', () => {
  it('renders contact page', async () => {
    const wrapper = await mountSuspended(Contact)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders a section element', async () => {
    const wrapper = await mountSuspended(Contact)
    expect(wrapper.find('section').exists()).toBe(true)
  })
})
