import React, { FC } from 'react'
export declare type AlertType = 'success' | 'info' | 'warning' | 'error'
export interface AlertProps {
  message: string
  description?: string
  type?: AlertType
  closable?: boolean
  className?: string
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
declare const Alert: FC<AlertProps>
export default Alert
