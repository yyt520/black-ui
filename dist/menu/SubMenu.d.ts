import React, { FC } from 'react'
export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  style?: React.CSSProperties
}
declare const SubMenu: FC<SubMenuProps>
export default SubMenu
