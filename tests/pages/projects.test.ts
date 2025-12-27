import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Projects from '~/pages/projects.vue'

describe('Projects Page', () => {
  it('renders projects page with title', async () => {
    const wrapper = await mountSuspended(Projects)
    const section = wrapper.find('section')
    expect(section.exists()).toBe(true)
  })

  it('renders project section', async () => {
    const wrapper = await mountSuspended(Projects)
    expect(wrapper.find('#projects').exists()).toBe(true)
  })
})
