import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SmallConnect from '~/components/connect/SmallConnect.vue'

describe('SmallConnect Component', () => {
  it('renders with icon and label', async () => {
    const wrapper = await mountSuspended(SmallConnect, {
      props: {
        icon: 'mdi:linkedin',
        label: 'LinkedIn',
      },
    })

    expect(wrapper.text()).toContain('LinkedIn')
  })

  it('renders with different icons and labels', async () => {
    const wrapper = await mountSuspended(SmallConnect, {
      props: {
        icon: 'mdi:github',
        label: 'GitHub',
      },
    })

    expect(wrapper.text()).toContain('GitHub')
  })

  it('has connect-card class', async () => {
    const wrapper = await mountSuspended(SmallConnect, {
      props: {
        icon: 'mdi:email',
        label: 'Email',
      },
    })

    expect(wrapper.find('.connect-card').exists()).toBe(true)
  })
})
