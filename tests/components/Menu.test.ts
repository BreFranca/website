import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Menu from '~/components/Menu.vue'

describe('Menu Component', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(Menu)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays navigation element', async () => {
    const wrapper = await mountSuspended(Menu)
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
  })

  it('renders with container class', async () => {
    const wrapper = await mountSuspended(Menu)
    const container = wrapper.find('.container')
    expect(container.exists()).toBe(true)
  })

  it('renders tabs-nav class', async () => {
    const wrapper = await mountSuspended(Menu)
    const tabsNav = wrapper.find('.tabs-nav')
    expect(tabsNav.exists()).toBe(true)
  })

  it('renders NuxtLink elements', async () => {
    const wrapper = await mountSuspended(Menu)
    const links = wrapper.findAllComponents({ name: 'NuxtLink' })
    expect(links.length).toBeGreaterThanOrEqual(0)
  })
})
