import { FC, CSSProperties } from 'react'
export interface MenuItemProps {
  index?: string
  className?: string
  style?: CSSProperties
  disabled?: boolean
}
declare const MenuItem: FC<MenuItemProps>
export default MenuItem
