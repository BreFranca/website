import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

describe('LanguageSwitcher Component', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays language buttons', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })
})
