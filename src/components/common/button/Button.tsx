import clsx from 'clsx'
import './Button.css'

type Props = {
  cta: string
  theme?: 'base' | 'outline' | 'discret' | 'liquid'
}

export default function Button({ cta, theme }: Props) {
  return (
    <div className={clsx('base-button', { 'outline-button': theme === 'outline' })}>
      <div>{cta}</div>
    </div>
  )
}
