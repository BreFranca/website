export interface MenuItem {
  id: string
  label: string
}

type MenuTab = MenuItem

interface MenuResponse {
  tabs: MenuTab[]
}

export const useMenu = () => {
  const { t } = useI18n()
  const { data: menuData, pending } = useFetch<MenuResponse>('/api/menu')

  const tabs = computed<MenuItem[]>(() => {
    if (!menuData.value) return []

    return menuData.value.tabs.map(tab => ({
      id: tab.id,
      label: t(tab.label),
    }))
  })

  return {
    tabs,
    isLoading: pending,
  }
}
