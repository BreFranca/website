import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Project from '~/components/Project.vue'

describe('Project Component', () => {
  const defaultProps = {
    title: 'Test Project',
    description: 'A test project description',
    link: 'https://example.com',
    technologies: ['Vue', 'TypeScript', 'Nuxt'],
  }

  it('renders project title', async () => {
    const wrapper = await mountSuspended(Project, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('Test Project')
  })

  it('renders project description', async () => {
    const wrapper = await mountSuspended(Project, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('A test project description')
  })

  it('renders all technologies', async () => {
    const wrapper = await mountSuspended(Project, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('Vue')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('Nuxt')
  })

  it('renders correct link with target and rel attributes', async () => {
    const wrapper = await mountSuspended(Project, {
      props: defaultProps,
    })

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('https://example.com')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })

  it('renders with single technology', async () => {
    const wrapper = await mountSuspended(Project, {
      props: {
        ...defaultProps,
        technologies: ['React'],
      },
    })

    expect(wrapper.text()).toContain('React')
  })

  it('renders with multiple technologies separated by bullet', async () => {
    const wrapper = await mountSuspended(Project, {
      props: defaultProps,
    })

    const text = wrapper.text()
    expect(text).toContain('•')
  })

  it('renders with empty technologies array', async () => {
    const wrapper = await mountSuspended(Project, {
      props: {
        ...defaultProps,
        technologies: [],
      },
    })

    const tagDiv = wrapper.find('.project-tags')
    expect(tagDiv.exists()).toBe(true)
  })

  it('applies correct CSS classes', async () => {
    const wrapper = await mountSuspended(Project, {
      props: defaultProps,
    })

    expect(wrapper.find('.project-card').exists()).toBe(true)
    expect(wrapper.find('.project-tags').exists()).toBe(true)
  })
})
