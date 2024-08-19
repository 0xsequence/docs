import { atoms } from '@0xsequence/design-system'
import { style } from '@vanilla-extract/css'

export const connectButton = style([
  atoms({
    backdropFilter: 'blur',
    background: 'gradientSecondary',
    color: 'white',
  }),
  style({
    outline: '2px solid rgba(255, 255, 255, 0.1)',
    outlineOffset: '-2px',
  }),
])
