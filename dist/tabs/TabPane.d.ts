import React, { FC } from 'react'
export interface Props {
  tab: React.ReactNode
  disabled?: boolean
}
declare const TabPane: FC<Props>
export default TabPane
