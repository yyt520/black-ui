import { FC } from 'react'
import { Props as TabPaneProps } from './TabPane'
export declare type TabsType = 'line' | 'card'
export interface TabsProps {
  className?: string
  defaultActiveKey?: number
  type?: TabsType
  onTabClick?: (selectedKey: number) => void
}
export declare type ITabComponent = FC<TabsProps> & {
  TabPane: FC<TabPaneProps>
}
declare const Tabs: ITabComponent
export default Tabs
