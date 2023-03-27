import { FC, CSSProperties } from 'react'
import { MenuItemProps } from './MenuItem'
import { SubMenuProps } from './SubMenu'
export declare type MenuMode = 'horizontal' | 'inline'
export declare type SelectCallback = (selectedKey: string) => void
export interface MenuProps {
  className?: string
  style?: CSSProperties
  mode?: MenuMode
  onClick?: SelectCallback
  defaultSelectedKey?: string
  defaultOpenKeys?: string[]
}
export declare type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}
declare const Menu: IMenuComponent
export default Menu
