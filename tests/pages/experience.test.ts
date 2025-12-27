import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Experience from '~/pages/experience.vue'

describe('Experience Page', () => {
  it('renders experience page', async () => {
    const wrapper = await mountSuspended(Experience)
    expect(wrapper.text()).toContain('Experience')
  })

  it('renders a div element', async () => {
    const wrapper = await mountSuspended(Experience)
    expect(wrapper.find('div').exists()).toBe(true)
  })
})
