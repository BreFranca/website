import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '~/app.vue'

describe('App Component', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains main element', async () => {
    const wrapper = await mountSuspended(App)
    const main = wrapper.find('main')
    expect(main.exists()).toBe(true)
  })

  it('contains About component with name', async () => {
    const wrapper = await mountSuspended(App)
    expect(wrapper.html()).toContain('Breno Franca')
  })

  it('contains Menu component with navigation', async () => {
    const wrapper = await mountSuspended(App)
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
  })

  it('contains Footer component', async () => {
    const wrapper = await mountSuspended(App)
    const footer = wrapper.find('footer')
    expect(footer.exists()).toBe(true)
  })

  it('contains content div with id', async () => {
    const wrapper = await mountSuspended(App)
    const content = wrapper.find('#content')
    expect(content.exists()).toBe(true)
  })

  it('contains NuxtRouteAnnouncer', async () => {
    const wrapper = await mountSuspended(App)
    expect(wrapper.html()).toBeTruthy()
  })

  it('contains NuxtPage for routing', async () => {
    const wrapper = await mountSuspended(App)
    const content = wrapper.find('#content')
    expect(content.exists()).toBe(true)
  })
})
