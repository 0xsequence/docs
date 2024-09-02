import type { Button } from '@0xsequence/design-system'
import { t } from '@lingui/macro'
import type { ComponentProps } from 'react'

import { type AuthContextValue, useAuth } from '../AuthProvider'

import { ButtonWithGlow } from '../ButtonWithGlow/ButtonWithGlow'

type ConnectButtonProps = {
  label?: string
  shape?: 'circle' | 'square'
  size?: 'sm' | 'md' | 'lg'
  variant?: ComponentProps<typeof Button>['variant']
  leftIcon?: React.ReactNode
}

export const ConnectButton = ({
  label = t`Sign In`,
  shape = 'circle',
  size = 'md',
  variant = 'base',
  leftIcon,
}: ConnectButtonProps) => {
  const { onLogin, isLoggingIn } = useAuth() as AuthContextValue

  return (
    <ButtonWithGlow
      label={label}
      onClick={onLogin}
      shape={shape}
      size={size}
      variant={variant}
      disabled={isLoggingIn}
      leftIcon={leftIcon}
    />
  )
}
