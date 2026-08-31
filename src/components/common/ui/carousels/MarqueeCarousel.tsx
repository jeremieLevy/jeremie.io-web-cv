import './MarqueeCarousel.css'

type Props = {
  images: string[]
}
export default function MarqueeCarousel({ images }: Props) {
  return (
    <div className="carousel">
      <div className="images-group">
        {images.map((image, index) => (
          <img src={image} key={`a-${index}`} alt="" className="image" />
        ))}
      </div>
      <div aria-hidden className="images-group">
        {images.map((image, index) => (
          <img src={image} key={`b-${index}`} alt="" className="image" />
        ))}
      </div>
    </div>
  )
}
