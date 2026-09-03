import clsx from 'clsx';
import './Button.css';

type Props = {
  cta: string;
  theme?: 'base' | 'outline' | 'discret' | 'liquid';
  href?: string;
};

export default function Button({ cta, theme, href }: Props) {
  return (
    <div
      className={clsx('base-button', { 'outline-button': theme === 'outline' })}
    >
      {href ? <a href={href}>{cta}</a> : <div>{cta}</div>}
    </div>
  );
}
