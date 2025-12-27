import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import TechStack from '~/components/TechStack.vue'

describe('TechStack Component', () => {
  it('renders tech stack with name and years', async () => {
    const wrapper = await mountSuspended(TechStack, {
      props: {
        expName: 'Vue.js',
        expYears: 3,
      },
    })

    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('3')
  })

  it('renders with different tech stack values', async () => {
    const wrapper = await mountSuspended(TechStack, {
      props: {
        expName: 'TypeScript',
        expYears: 5,
      },
    })

    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('5')
  })

  it('renders with zero years of experience', async () => {
    const wrapper = await mountSuspended(TechStack, {
      props: {
        expName: 'New Tech',
        expYears: 0,
      },
    })

    expect(wrapper.text()).toContain('New Tech')
    expect(wrapper.text()).toContain('0')
  })
})
