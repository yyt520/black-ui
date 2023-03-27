import React, { InputHTMLAttributes, ReactNode } from 'react'
export declare type InputSize = 'lg' | 'md' | 'sm'
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix' | 'suffix'> {
  size?: InputSize
  disabled?: boolean
  prefix?: ReactNode
  suffix?: ReactNode
  icon?: ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
declare const Input: React.ForwardRefExoticComponent<InputProps &
  React.RefAttributes<HTMLInputElement>>
export default Input
