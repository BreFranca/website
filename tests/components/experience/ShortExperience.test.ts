import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ShortExperience from '~/components/experience/ShortExperience.vue'

describe('ShortExperience Component', () => {
  it('renders with all props', async () => {
    const wrapper = await mountSuspended(ShortExperience, {
      props: {
        role: 'Senior Developer',
        company: 'Tech Company',
        companyUrl: 'https://company.com',
        period: '2020-2023',
      },
    })

    expect(wrapper.text()).toContain('Senior Developer')
    expect(wrapper.text()).toContain('Tech Company')
    expect(wrapper.text()).toContain('2020-2023')
  })

  it('renders link with correct href', async () => {
    const wrapper = await mountSuspended(ShortExperience, {
      props: {
        role: 'Developer',
        company: 'Startup',
        companyUrl: 'https://startup.com',
        period: '2019-2020',
      },
    })

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('https://startup.com')
  })

  it('renders different experience data', async () => {
    const wrapper = await mountSuspended(ShortExperience, {
      props: {
        role: 'Junior Developer',
        company: 'Agency',
        companyUrl: 'https://agency.com',
        period: '2018-2019',
      },
    })

    expect(wrapper.text()).toContain('Junior Developer')
    expect(wrapper.text()).toContain('Agency')
  })
})
