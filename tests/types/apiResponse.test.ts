import { describe, it, expect } from 'vitest'
import type { ApiResponse } from '~/types/apiResponse'
import type { Contact } from '~/types/contacts'
import type { Experience } from '~/types/experience'
import type { Stack } from '~/types/stacks'
import { StackCategory } from '~/types/stacks'

describe('ApiResponse Type', () => {
  it('should create a valid ApiResponse object', () => {
    const contact: Contact = {
      type: 'email' as any,
      icon: 'mdi:email',
      label: 'Email',
      url: 'test@example.com',
    }

    const experience: Experience = {
      id: '1',
      role: 'Developer',
      company: 'Company',
      companyUrl: 'https://company.com',
      period: '2020-2021',
      techStack: ['Vue', 'Nuxt'],
    }

    const stack: Stack = {
      id: '1',
      name: 'Vue.js',
      experience: 3,
      category: StackCategory.FRONTEND,
    }

    const apiResponse: ApiResponse = {
      experiences: [experience],
      stacks: [stack],
      contacts: [contact],
    }

    expect(apiResponse).toBeDefined()
    expect(apiResponse.experiences).toHaveLength(1)
    expect(apiResponse.stacks).toHaveLength(1)
    expect(apiResponse.contacts).toHaveLength(1)
  })

  it('should allow empty arrays', () => {
    const apiResponse: ApiResponse = {
      experiences: [],
      stacks: [],
      contacts: [],
    }

    expect(apiResponse.experiences).toHaveLength(0)
    expect(apiResponse.stacks).toHaveLength(0)
    expect(apiResponse.contacts).toHaveLength(0)
  })
})
