import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ShortExperience from '~/components/experience/ShortExperience.vue'
import type { ExperiencePeriod } from '~/types/experience'

describe('ShortExperience Component', () => {
  it('renders with all props', async () => {
    const period: ExperiencePeriod = {
      start: '2020',
      end: '2023',
    }

    const wrapper = await mountSuspended(ShortExperience, {
      props: {
        role: 'Senior Developer',
        company: 'Tech Company',
        companyUrl: 'https://company.com',
        period,
      },
    })

    expect(wrapper.text()).toContain('Senior Developer')
    expect(wrapper.text()).toContain('Tech Company')
  })

  it('renders link with correct href', async () => {
    const period: ExperiencePeriod = {
      start: '2019',
      end: '2020',
    }

    const wrapper = await mountSuspended(ShortExperience, {
      props: {
        role: 'Developer',
        company: 'Startup',
        companyUrl: 'https://startup.com',
        period,
      },
    })

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('https://startup.com')
  })

  it('renders different experience data', async () => {
    const period: ExperiencePeriod = {
      start: '2018',
      end: '2019',
    }

    const wrapper = await mountSuspended(ShortExperience, {
      props: {
        role: 'Junior Developer',
        company: 'Agency',
        companyUrl: 'https://agency.com',
        period,
      },
    })

    expect(wrapper.text()).toContain('Junior Developer')
    expect(wrapper.text()).toContain('Agency')
  })
})
