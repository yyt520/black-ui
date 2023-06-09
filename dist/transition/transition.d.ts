import { FC } from 'react'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
declare type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'
declare type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName
  wrapper?: boolean
  classNames?: string
}
declare const Transition: FC<TransitionProps>
export default Transition
