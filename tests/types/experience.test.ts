import { describe, it, expect } from 'vitest'
import type { Experience } from '~/types/experience'

describe('Experience Type', () => {
  it('should create a valid Experience object', () => {
    const experience: Experience = {
      id: '1',
      role: 'Senior Developer',
      company: 'Tech Company',
      companyUrl: 'https://company.com',
      period: '2020-2023',
      techStack: ['Vue', 'Nuxt', 'TypeScript'],
    }

    expect(experience).toBeDefined()
    expect(experience.id).toBe('1')
    expect(experience.role).toBe('Senior Developer')
    expect(experience.company).toBe('Tech Company')
    expect(experience.companyUrl).toBe('https://company.com')
    expect(experience.period).toBe('2020-2023')
    expect(experience.techStack).toHaveLength(3)
  })

  it('should allow empty tech stack', () => {
    const experience: Experience = {
      id: '2',
      role: 'Junior Developer',
      company: 'Startup',
      companyUrl: 'https://startup.com',
      period: '2019-2020',
      techStack: [],
    }

    expect(experience.techStack).toHaveLength(0)
  })
})
