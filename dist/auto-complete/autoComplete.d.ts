import { FC, ReactElement } from 'react'
import { InputProps } from '../input/input'
interface DataSourceObject {
  value: string
}
export declare type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /** 搜索补全项的时候调用 */
  onSearch: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  /** 选中下拉选项时触发的回调 */
  onSelect?: (item: DataSourceType) => void
  /** 自定义渲染下拉选项，返回 ReactElement */
  renderOption?: (item: DataSourceType) => ReactElement
}
declare const AutoComplete: FC<AutoCompleteProps>
export default AutoComplete
