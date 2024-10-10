import type { ReactNode } from 'react'
import clsx from 'clsx'

export function GradientBackground({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={clsx('relative', className)}>
      <div className="absolute inset-0 z-0 flex items-center">
        <div className="w-full h-full max-h-[600px] dark:bg-gradient-dark bg-gradient-light" />

        <div
          className="clouds animate-clouds"
          style={{ backgroundImage: 'url(/img/bot/clouds.svg)' }}
          aria-label="Animated Clouds"
        />

        <div
          className="clouds2 animate-clouds2"
          style={{ backgroundImage: 'url(/img/bot/clouds2.svg)' }}
          aria-label="Animated Clouds 2"
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
