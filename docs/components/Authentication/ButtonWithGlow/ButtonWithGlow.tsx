import { Button } from '@0xsequence/design-system'
import { clsx } from 'clsx'
import { ComponentProps } from 'react'

import styles from './ButtonWithGlow.module.css'

type Props = {
  label: string
  shape?: ComponentProps<typeof Button>['shape']
  size?: ComponentProps<typeof Button>['size']
  variant?: ComponentProps<typeof Button>['variant']
  leftIcon?: React.ReactNode
} & JSX.IntrinsicElements['button']

export function ButtonWithGlow(props: Props) {
  const {
    label,
    className,
    shape = 'circle',
    size = 'md',
    variant = 'base',
    leftIcon,
    ...restProps
  } = props

  return (
    <button
      className={clsx(
        styles.button,
        shape && styles[`button--${shape}`],
        size && styles[`button--${size}`],
        variant && styles[`button--${variant}`],
        leftIcon && styles['button--with-icon'],
        className
      )}
      aria-label={label}
      {...restProps}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <div className={styles.label}>
        <span data-label={label}>{label}</span>
      </div>
    </button>
  )
}
