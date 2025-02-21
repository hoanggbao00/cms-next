import type { ReactElement } from 'react'

export interface Submenu {
  name: string
  path: string
  pathIcon?: ReactElement
}
export interface DataSidebar {
  name: string
  path: string
  pathIcon?: ReactElement
  subMenu?: Submenu[]
}
export interface CurrApp {
  name: string
  link: string
  dataSidebar?: DataSidebar[]
  icon?: string | { src: string }
}