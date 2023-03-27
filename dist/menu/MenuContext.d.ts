import React from 'react'
import { MenuMode, SelectCallback } from './menu'
export interface IMenuContext {
  key: string
  onClick?: SelectCallback
  mode?: MenuMode
  defaultOpenKeys?: string[]
}
declare const MenuContext: React.Context<IMenuContext>
export default MenuContext
