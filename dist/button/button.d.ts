import React, { FC } from 'react'
export declare type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dashed'
  | 'link'
  | 'text'
export declare type ButtonSize = 'lg' | 'md' | 'sm'
export declare type ButtonHTMLTypes = 'submit' | 'button' | 'reset'
interface BaseButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  block?: boolean
  className?: string
  href?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}
declare type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes
  target?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>
declare type AnchorButtonProps = {
  href?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
declare const Button: FC<ButtonProps>
export default Button
