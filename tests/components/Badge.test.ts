import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Badge from '~/components/Badge.vue'

describe('Badge Component', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(Badge, {
      props: {
        label: 'Test Label',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the label text', async () => {
    const wrapper = await mountSuspended(Badge, {
      props: {
        label: 'Vue.js',
      },
    })
    expect(wrapper.text()).toContain('Vue.js')
  })

  it('renders with different label values', async () => {
    const wrapper = await mountSuspended(Badge, {
      props: {
        label: 'TypeScript',
      },
    })
    expect(wrapper.text()).toBe('TypeScript')
  })

  it('applies correct CSS class', async () => {
    const wrapper = await mountSuspended(Badge, {
      props: {
        label: 'React',
      },
    })
    const span = wrapper.find('.skill-tag')
    expect(span.exists()).toBe(true)
  })

  it('renders empty string label', async () => {
    const wrapper = await mountSuspended(Badge, {
      props: {
        label: '',
      },
    })
    expect(wrapper.text()).toBe('')
  })

  it('renders with special characters', async () => {
    const wrapper = await mountSuspended(Badge, {
      props: {
        label: 'C++ & C#',
      },
    })
    expect(wrapper.text()).toContain('C++ & C#')
  })
})
