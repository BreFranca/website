import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { useMenu } from '~/composables/useMenu'

const mockUseFetch = vi.fn()

vi.mock('#app', () => ({
  useFetch: mockUseFetch,
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
  }),
}))

describe('useMenu composable', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it.skip('should return empty tabs when menuData is null', () => {
    mockUseFetch.mockReturnValue({
      data: ref(null),
      pending: ref(false),
      error: ref(null),
      refresh: vi.fn(),
      execute: vi.fn(),
      clear: vi.fn(),
      status: ref('success'),
    })

    const { tabs, isLoading } = useMenu()

    expect(tabs.value).toEqual([])
    expect(isLoading.value).toBe(false)
  })

  it.skip('should return tabs with translated labels', () => {
    const mockMenuData = {
      tabs: [
        { id: 'home', label: 'menu.home' },
        { id: 'projects', label: 'menu.projects' },
      ],
    }

    mockUseFetch.mockReturnValue({
      data: ref(mockMenuData),
      pending: ref(false),
      error: ref(null),
      refresh: vi.fn(),
      execute: vi.fn(),
      clear: vi.fn(),
      status: ref('success'),
    })

    const { tabs } = useMenu()

    expect(tabs.value).toHaveLength(2)
    expect(tabs.value[0]).toEqual({ id: 'home', label: 'menu.home' })
    expect(tabs.value[1]).toEqual({ id: 'projects', label: 'menu.projects' })
  })

  it('should return isLoading as true when pending', () => {
    mockUseFetch.mockReturnValue({
      data: ref(null),
      pending: ref(true),
      error: ref(null),
      refresh: vi.fn(),
      execute: vi.fn(),
      clear: vi.fn(),
      status: ref('pending'),
    })

    const { isLoading } = useMenu()

    expect(isLoading.value).toBe(true)
  })

  it.skip('should map all menu items correctly', () => {
    const mockMenuData = {
      tabs: [
        { id: 'home', label: 'menu.home' },
        { id: 'projects', label: 'menu.projects' },
        { id: 'experience', label: 'menu.experience' },
        { id: 'contact', label: 'menu.contact' },
      ],
    }

    mockUseFetch.mockReturnValue({
      data: ref(mockMenuData),
      pending: ref(false),
      error: ref(null),
      refresh: vi.fn(),
      execute: vi.fn(),
      clear: vi.fn(),
      status: ref('success'),
    })

    const { tabs } = useMenu()

    expect(tabs.value).toHaveLength(4)
    expect(tabs.value).toEqual([
      { id: 'home', label: 'menu.home' },
      { id: 'projects', label: 'menu.projects' },
      { id: 'experience', label: 'menu.experience' },
      { id: 'contact', label: 'menu.contact' },
    ])
  })
})
