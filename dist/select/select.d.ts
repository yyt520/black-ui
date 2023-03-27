import React, { FC } from 'react'
import { SelectOptionProps } from './Option'
export interface SelectProps {
  /** 默认选中的选项 可以是字符串或者字符串数组 */
  defaultValue?: string | string[]
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否支持多选 */
  multiple?: boolean
  /** input 的 name 属性 */
  name?: string
  /** 选中值发生变化时触发 */
  onChange?: (selectedValue: string, selectedValues: string[]) => void
  /** 下拉框出现/隐藏时触发 */
  onVisibleChange?: (visible: boolean) => void
}
export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void
  selectedValues: string[]
  multiple?: boolean
}
export declare const SelectContext: React.Context<ISelectContext>
export declare const RootSelect: FC<SelectProps>
export declare type ISelectComponent = FC<SelectProps> & {
  Option: FC<SelectOptionProps>
}
declare const Select: ISelectComponent
export default Select
