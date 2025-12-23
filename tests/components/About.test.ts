import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import About from '~/components/About.vue'

describe('About Component', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(About)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct heading', async () => {
    const wrapper = await mountSuspended(About)
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
  })
})
