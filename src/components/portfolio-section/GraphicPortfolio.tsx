import './GraphicPortfolio.css';

// artworks
import Artwork6 from '@/assets/images/artworks/Artwork-6.jpg';
import TheWall from '@/assets/images/artworks/the-wall.jpg';
import Cybership from '@/assets/images/artworks/cybership.jpg';
import SigmaLand1 from '@/assets/images/artworks/sigma-land-1.jpg';
import DigitalRuins from '@/assets/images/artworks/digital-ruins.jpg';
import SmokyTown from '@/assets/images/artworks/smoky-town.jpg';
import QuanticLight from '@/assets/images/artworks/quantic-light.jpg';
import CellShading from '@/assets/images/artworks/cell-shading.jpg';
import CouvSigma from '@/assets/images/artworks/couv-sigma.jpg';
import CouvSigma2 from '@/assets/images/artworks/couv-sigma-2.jpg';
import Musicians from '@/assets/images/artworks/musicians.jpg';
import SigmaLand2 from '@/assets/images/artworks/sigma-land-2.jpg';

// graphics
import SingleChevron from '@/assets/graphic-elements/single-chevron.svg';
import Chevrons from '@/assets/graphic-elements/chevrons.svg';
import Button from '../common/button/Button';
import MarqueeCarousel from '../common/ui/carousels/MarqueeCarousel';

const theWallImages = [TheWall, DigitalRuins, SmokyTown];
const cybershipImages = [Cybership, QuanticLight, CellShading];
const sigmaLandImages = [SigmaLand1, CouvSigma, CouvSigma2];
const bigTriangleImages = [Artwork6, Musicians, SigmaLand2];

type FadeCycleStyle = React.CSSProperties & { '--fade-duration'?: string };

function fadeCycleStyle(duration: string): FadeCycleStyle {
  return { '--fade-duration': duration };
}

const graphicSkills: string[] = [
  'Suite Adobe',
  'Cinema4D',
  'Octane Render',
  'Ui/Ux',
  '3D Temps réel',
  'Unreal Engine 5',
  'Vray',
  'Archviz',
];

export default function GraphicPortfolio() {
  return (
    <section id="graphic-portfolio">
      <div className="mt-20 flex flex-col items-center">
        <img src={SingleChevron} className="max-w-6 rotate-180 mx-auto" />
        <h3 className="max-w-64 text-center! my-6!">Creative background</h3>
        <img src={Chevrons} className="max-w-20 mx-auto mb-12" />
      </div>
      <div className="mb-20 flex flex-col items-center">
        <MarqueeCarousel type="text" items={graphicSkills} hasBlur />
        <Button
          cta="Voir le portfolio"
          href="https://jeremielevy.github.io/segments-studio-portfolio/"
          target="_blank"
        />
      </div>

      <div className="mosaic-container pt-20 pb-48">
        <div className="mosaic ">
          <div
            className="triangle"
            style={{ width: '45%', left: '-3%', top: '4%' }}
          >
            <div className="fade-cycle" style={fadeCycleStyle('11s')}>
              {theWallImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`fade-item fade-item-${index + 1} object-cover object-center`}
                />
              ))}
            </div>
          </div>
          <div
            className="triangle--down opacity-30"
            style={{ width: '45%', left: '-3%', top: '61.15%' }}
          ></div>
          <div
            className="triangle--down opacity-30"
            style={{ width: '45%', right: '-3%', top: '61.15%' }}
          ></div>
          <div
            className="triangle--down opacity-30"
            style={{ width: '45%', left: '-26%', top: '4%' }}
          ></div>
          <div
            className="triangle--down"
            style={{ width: '18.3%', left: '22%', top: '9%' }}
          ></div>
          <div
            className="triangle opacity-30"
            style={{ width: '18.3%', left: '31.4%', top: '9.6%' }}
          ></div>
          <div
            className="triangle--down z-30"
            style={{ width: '18.3%', left: '31.6%', top: '33.2%' }}
          ></div>
          <div
            className="triangle--down z-30"
            style={{ width: '18.3%', left: '50.04%', top: '33.2%' }}
          ></div>
          <div
            className="triangle opacity-30"
            style={{ width: '18.3%', left: '50.29%', top: '9.6%' }}
          ></div>
          <div
            className="triangle--down "
            style={{ width: '18.3%', left: '59.7%', top: '9%' }}
          ></div>
          <div
            className="triangle"
            style={{ width: '45%', right: '-3%', top: '4%' }}
          >
            <div className="fade-cycle" style={fadeCycleStyle('15s')}>
              {sigmaLandImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`fade-item fade-item-${index + 1} object-cover object-center`}
                />
              ))}
            </div>
          </div>
          <div
            className="triangle--down opacity-30"
            style={{ width: '45%', right: '-26%', top: '4%' }}
          ></div>
          <div
            className="triangle--down"
            style={{ width: '25.5%', left: '37.24%', top: '0%' }}
          >
            <div className="fade-cycle" style={fadeCycleStyle('13s')}>
              {cybershipImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`fade-item fade-item-${index + 1} object-cover object-left`}
                />
              ))}
            </div>
          </div>
          <div
            className="triangle-outline z-30"
            style={{ width: '10%', left: '45%', top: '25%' }}
          >
            <div className="md:block hidden">
              <svg viewBox="0 0 100 87">
                <polygon
                  points="50,0 0,87 100,87"
                  fill="var(--color-light)"
                  stroke="var(--bg)"
                  className="triangle-outline-stroke"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
          <div
            className="triangle-outline z-20"
            style={{ width: '37%', left: '31.45%', top: '33.35%' }}
          >
            <svg viewBox="0 0 100 87">
              <defs>
                <clipPath id="triangle-clip-big">
                  <polygon points="50,0 0,87 100,87" />
                </clipPath>
              </defs>
              <polygon points="50,0 0,87 100,87" fill="var(--color-light)" />
              {bigTriangleImages.map((src, index) => (
                <image
                  key={src}
                  href={src}
                  x="0"
                  y="0"
                  width="100"
                  height="87"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#triangle-clip-big)"
                  className={`object-right fade-item fade-item-${index + 1}`}
                  style={fadeCycleStyle('14s')}
                />
              ))}
              <polygon
                points="50,0 0,87 100,87"
                fill="none"
                stroke="var(--bg)"
                className="triangle-outline-stroke"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
