import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'

vi.mock('#app', () => ({
  useFetch: vi.fn(() => ({
    data: ref(null),
    pending: ref(true),
    error: ref(null),
    refresh: vi.fn(),
    execute: vi.fn(),
    clear: vi.fn(),
    status: ref('pending'),
  })),
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
  }),
}))

describe('useMenu composable', () => {
  it('should return isLoading as true when pending', async () => {
    const { useMenu } = await import('~/composables/useMenu')
    const { isLoading } = useMenu()

    expect(isLoading.value).toBe(true)
  })
})
