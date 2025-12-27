import { describe, it, expect } from 'vitest'
import type { Contact } from '~/types/contacts'

describe('Contact Type', () => {
  it('should create a valid Contact object', () => {
    const contact: Contact = {
      type: 'email' as any,
      icon: 'mdi:email',
      label: 'Email',
      url: 'test@example.com',
    }

    expect(contact).toBeDefined()
    expect(contact.type).toBe('email')
    expect(contact.icon).toBe('mdi:email')
    expect(contact.label).toBe('Email')
    expect(contact.url).toBe('test@example.com')
  })

  it('should create different contact types', () => {
    const linkedin: Contact = {
      type: 'linkedin' as any,
      icon: 'mdi:linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/user',
    }

    const github: Contact = {
      type: 'github' as any,
      icon: 'mdi:github',
      label: 'GitHub',
      url: 'https://github.com/user',
    }

    expect(linkedin.type).toBe('linkedin')
    expect(github.type).toBe('github')
  })
})
