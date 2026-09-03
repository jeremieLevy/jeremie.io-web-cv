type Size = 'small' | 'mid' | 'large'

type Props = {
  size: Size
  children?: React.ReactNode
}

const paddingBySize: Record<Size, string> = {
  small: 'px-4 md:px-16 lg:px-36 xl:px-80',
  mid: 'px-4 md:px-4 lg:px-28 xl:px-48',
  large: 'px-4 md:px-8 lg:px-16',
}


export default function ContainerTemplate({ size, children }: Props) {
  return (
    <div className={paddingBySize[size]}>
      {children}
    </div>
  )
}
