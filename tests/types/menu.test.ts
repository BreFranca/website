import { describe, it, expect } from 'vitest'
import type { MenuItem, MenuTab, MenuResponse } from '~/types/menu'

describe('Menu Types', () => {
  it('should create a valid MenuItem object', () => {
    const menuItem: MenuItem = {
      id: 'home',
      label: 'Home',
    }

    expect(menuItem).toBeDefined()
    expect(menuItem.id).toBe('home')
    expect(menuItem.label).toBe('Home')
  })

  it('should create a valid MenuTab object', () => {
    const menuTab: MenuTab = {
      id: 'about',
      label: 'About',
    }

    expect(menuTab).toBeDefined()
    expect(menuTab.id).toBe('about')
    expect(menuTab.label).toBe('About')
  })

  it('should create a valid MenuResponse object', () => {
    const menuResponse: MenuResponse = {
      tabs: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
      ],
    }

    expect(menuResponse).toBeDefined()
    expect(menuResponse.tabs).toHaveLength(3)
    expect(menuResponse.tabs[0].id).toBe('home')
    expect(menuResponse.tabs[1].id).toBe('about')
    expect(menuResponse.tabs[2].id).toBe('contact')
  })

  it('should allow empty tabs array', () => {
    const menuResponse: MenuResponse = {
      tabs: [],
    }

    expect(menuResponse.tabs).toHaveLength(0)
  })
})
