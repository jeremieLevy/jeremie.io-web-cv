import './GraphicPortfolio.css';

export default function GraphicPortfolio() {
  return (
    <>
      <div className="mb-20">Title</div>
      <div className="mosaic-container mb-20">
        <div className="mosaic">
          <div
            className="triangle md:block hidden"
            style={{ width: '50%', left: '-4.5%', top: '0%' }}
          ></div>
          <div
            className="triangle--down md:block hidden"
            style={{ width: '50%', left: '-30%', top: '0%' }}
          ></div>
          <div
            className="triangle--down md:block hidden"
            style={{ width: '50%', left: '80%', top: '0%' }}
          ></div>
          <div className="triangle--down bg-light! top-10 left-[23%] w-48 lg:w-64"></div>
          <div className="triangle--down bg-light! -top-14 left-[50%] translate-x-[-50%] w-48 lg:w-96 z-30"></div>
          <div className="triangle--down bg-light! top-10 right-[23%] w-48 lg:w-64"></div>
          <div
            className="triangle md:block hidden"
            style={{ width: '50%', right: '-4.5%', top: '0%' }}
          ></div>
        </div>
      </div>
    </>
  );
}
