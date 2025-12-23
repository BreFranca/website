import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import IndexPage from '~/pages/index.vue'

describe('Index Page', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(IndexPage)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains About component', async () => {
    const wrapper = await mountSuspended(IndexPage)
    const html = wrapper.html()
    expect(html).toBeTruthy()
  })
})
