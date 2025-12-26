export interface MenuItem {
  id: string
  label: string
}

export type MenuTab = MenuItem

export interface MenuResponse {
  tabs: MenuTab[]
}
