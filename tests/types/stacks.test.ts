import { describe, it, expect } from 'vitest'
import { StackCategory } from '~/types/stacks'
import type { Stack } from '~/types/stacks'

describe('Stack Types', () => {
  it('should have all StackCategory enum values', () => {
    expect(StackCategory.FRONTEND).toBe('frontend')
    expect(StackCategory.BACKEND).toBe('backend')
    expect(StackCategory.DEVOPS).toBe('devops')
    expect(StackCategory.DATABASE).toBe('database')
    expect(StackCategory.MOBILE).toBe('mobile')
    expect(StackCategory.TESTING).toBe('testing')
  })

  it('should create a valid Stack object', () => {
    const stack: Stack = {
      id: '1',
      name: 'Vue.js',
      experience: 3,
      category: StackCategory.FRONTEND,
    }

    expect(stack).toBeDefined()
    expect(stack.id).toBe('1')
    expect(stack.name).toBe('Vue.js')
    expect(stack.experience).toBe(3)
    expect(stack.category).toBe(StackCategory.FRONTEND)
  })

  it('should create stacks for different categories', () => {
    const frontend: Stack = {
      id: '1',
      name: 'React',
      experience: 2,
      category: StackCategory.FRONTEND,
    }

    const backend: Stack = {
      id: '2',
      name: 'Node.js',
      experience: 4,
      category: StackCategory.BACKEND,
    }

    const database: Stack = {
      id: '3',
      name: 'PostgreSQL',
      experience: 5,
      category: StackCategory.DATABASE,
    }

    expect(frontend.category).toBe('frontend')
    expect(backend.category).toBe('backend')
    expect(database.category).toBe('database')
  })

  it('should allow zero experience', () => {
    const stack: Stack = {
      id: '4',
      name: 'New Tech',
      experience: 0,
      category: StackCategory.TESTING,
    }

    expect(stack.experience).toBe(0)
  })
})
