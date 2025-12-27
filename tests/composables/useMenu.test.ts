import { describe, it, expect } from 'vitest'
import { defineComponent } from 'vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { useMenu } from '~/composables/useMenu'
import type { MenuItem } from '~/types/menu'

interface TestComponentProps {
  tabs: MenuItem[]
  isLoading: boolean
}

describe('useMenu composable', () => {
  it('should return tabs and isLoading', async () => {
    const TestComponent = defineComponent({
      setup() {
        const { tabs, isLoading } = useMenu()
        return { tabs, isLoading }
      },
      template: '<div></div>',
    })

    const wrapper = await mountSuspended(TestComponent)
    const vm = wrapper.vm as TestComponentProps

    expect(vm.tabs).toBeDefined()
    expect(vm.isLoading).toBeDefined()
  })

  it('should return tabs as array', async () => {
    const TestComponent = defineComponent({
      setup() {
        const { tabs } = useMenu()
        return { tabs }
      },
      template: '<div></div>',
    })

    const wrapper = await mountSuspended(TestComponent)
    const vm = wrapper.vm as { tabs: MenuItem[] }

    expect(Array.isArray(vm.tabs)).toBe(true)
  })

  it('should return tabs with id and label properties', async () => {
    const TestComponent = defineComponent({
      setup() {
        const { tabs } = useMenu()
        return { tabs }
      },
      template: '<div></div>',
    })

    const wrapper = await mountSuspended(TestComponent)
    const vm = wrapper.vm as { tabs: MenuItem[] }

    if (vm.tabs.length > 0) {
      expect(vm.tabs[0]).toHaveProperty('id')
      expect(vm.tabs[0]).toHaveProperty('label')
    }
  })

  it('should return isLoading as boolean', async () => {
    const TestComponent = defineComponent({
      setup() {
        const { isLoading } = useMenu()
        return { isLoading }
      },
      template: '<div></div>',
    })

    const wrapper = await mountSuspended(TestComponent)
    const vm = wrapper.vm as { isLoading: boolean }

    expect(typeof vm.isLoading).toBe('boolean')
  })
})
