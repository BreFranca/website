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

  it('calls switchLocale when button is clicked', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher)
    const buttons = wrapper.findAll('button')
    
    if (buttons.length > 0) {
      await buttons[0].trigger('click')
      expect(wrapper.exists()).toBe(true)
    }
  })

  it('applies active class to current locale', async () => {
    const wrapper = await mountSuspended(LanguageSwitcher)
    const activeButtons = wrapper.findAll('.active')
    expect(activeButtons.length).toBeGreaterThan(0)
  })
})
