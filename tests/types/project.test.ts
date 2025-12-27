import { describe, it, expect } from 'vitest'
import type { Project, ApiProjectResponse } from '~/types/project'

describe('Project Types', () => {
  it('should create a valid Project object', () => {
    const project: Project = {
      name: 'My Project',
      description: 'A test project',
      link: 'https://example.com',
      technologies: ['Vue', 'TypeScript'],
    }

    expect(project).toBeDefined()
    expect(project.name).toBe('My Project')
    expect(project.description).toBe('A test project')
    expect(project.link).toBe('https://example.com')
    expect(project.technologies).toEqual(['Vue', 'TypeScript'])
  })

  it('should create a Project with optional image', () => {
    const project: Project = {
      name: 'Project with Image',
      description: 'Has an image',
      link: 'https://example.com',
      technologies: ['React'],
      image: '/path/to/image.png',
    }

    expect(project.image).toBe('/path/to/image.png')
  })

  it('should create a Project without image', () => {
    const project: Project = {
      name: 'Project without Image',
      description: 'No image',
      link: 'https://example.com',
      technologies: ['Angular'],
    }

    expect(project.image).toBeUndefined()
  })

  it('should create a valid ApiProjectResponse', () => {
    const response: ApiProjectResponse = {
      projects: [
        {
          name: 'Project 1',
          description: 'First project',
          link: 'https://example1.com',
          technologies: ['Vue'],
        },
        {
          name: 'Project 2',
          description: 'Second project',
          link: 'https://example2.com',
          technologies: ['React', 'Node.js'],
          image: '/image.png',
        },
      ],
    }

    expect(response.projects).toHaveLength(2)
    expect(response.projects[0].name).toBe('Project 1')
    expect(response.projects[1].image).toBe('/image.png')
  })

  it('should allow empty technologies array', () => {
    const project: Project = {
      name: 'No Tech Project',
      description: 'No technologies listed',
      link: 'https://example.com',
      technologies: [],
    }

    expect(project.technologies).toEqual([])
    expect(project.technologies).toHaveLength(0)
  })

  it('should allow ApiProjectResponse with empty projects', () => {
    const response: ApiProjectResponse = {
      projects: [],
    }

    expect(response.projects).toEqual([])
    expect(response.projects).toHaveLength(0)
  })
})
