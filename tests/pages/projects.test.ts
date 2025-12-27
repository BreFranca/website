import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Projects from '~/pages/projects.vue'

describe('Projects Page', () => {
  it('renders projects page', async () => {
    const wrapper = await mountSuspended(Projects)
    expect(wrapper.text()).toContain('Projetos')
  })

  it('renders a div element', async () => {
    const wrapper = await mountSuspended(Projects)
    expect(wrapper.find('div').exists()).toBe(true)
  })
})
