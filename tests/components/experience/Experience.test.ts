import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Experience from '~/components/experience/Experience.vue'
import type { ExperiencePeriod } from '~/types/experience'

describe('Experience Component', () => {
  const mockPeriod: ExperiencePeriod = {
    start: 'Jan 2020',
    end: 'Dec 2023',
  }

  const mockProps = {
    role: 'Senior Software Engineer',
    company: 'Tech Company',
    companyUrl: 'https://techcompany.com',
    period: mockPeriod,
    description: 'Developed and maintained web applications using Vue.js and Node.js',
  }

  it('renders correctly', async () => {
    const wrapper = await mountSuspended(Experience, {
      props: mockProps,
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the role', async () => {
    const wrapper = await mountSuspended(Experience, {
      props: mockProps,
    })
    const heading = wrapper.find('h3')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe(mockProps.role)
  })

  it('displays the period', async () => {
    const wrapper = await mountSuspended(Experience, {
      props: mockProps,
    })
    const period = wrapper.find('.experience-period')
    expect(period.exists()).toBe(true)
    expect(period.text()).toBeTruthy()
  })

  it('displays the company', async () => {
    const wrapper = await mountSuspended(Experience, {
      props: mockProps,
    })
    const company = wrapper.find('.company')
    expect(company.exists()).toBe(true)
    expect(company.text()).toBe(mockProps.company)
  })

  it('displays the description', async () => {
    const wrapper = await mountSuspended(Experience, {
      props: mockProps,
    })
    const description = wrapper.find('.description')
    expect(description.exists()).toBe(true)
    expect(description.text()).toBe(mockProps.description)
  })

  it('renders the experience structure', async () => {
    const wrapper = await mountSuspended(Experience, {
      props: mockProps,
    })
    expect(wrapper.find('article').exists()).toBe(true)
    expect(wrapper.find('.experience-content').exists()).toBe(true)
    expect(wrapper.find('.experience-header').exists()).toBe(true)
  })
})
