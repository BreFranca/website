import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ArticleSection from '~/components/ArticleSection.vue'

describe('ArticleSection Component', () => {
  it('renders section with title and id', async () => {
    const wrapper = await mountSuspended(ArticleSection, {
      props: {
        title: 'About Me',
        sectionId: 'about',
      },
    })

    expect(wrapper.text()).toContain('About Me')
    expect(wrapper.find('section').attributes('id')).toBe('about')
  })

  it('renders slot content', async () => {
    const wrapper = await mountSuspended(ArticleSection, {
      props: {
        title: 'Experience',
        sectionId: 'experience',
      },
      slots: {
        default: '<p>This is experience content</p>',
      },
    })

    expect(wrapper.text()).toContain('This is experience content')
  })

  it('applies correct classes', async () => {
    const wrapper = await mountSuspended(ArticleSection, {
      props: {
        title: 'Projects',
        sectionId: 'projects',
      },
    })

    expect(wrapper.find('section').exists()).toBe(true)
    expect(wrapper.find('.section-title').exists()).toBe(true)
    expect(wrapper.find('.container').exists()).toBe(true)
  })
})
