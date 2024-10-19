export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center gap-10  min-h-[80vh] bg-white md:bg-hero-banner bg-cover bg-center md:text-white">
      <h4 className="text-app-grey-900 md:text-white font-bold text-2xl lg:text-3xl">
        Food app
      </h4>
      <h1 className="text-app-blue-900 font-extrabold md:text-white text-4xl md:text-6xl text-center max-w-[90vw] lg:max-w-[60vw]">
        Why stay hungry when you can order form Bella Onojie
      </h1>
      <h4 className="text-app-grey-900 text-xl md:text-white md:text-2xl">
        Download the bella onojes food app now on
      </h4>
      <div className="flex flex-col md:flex-row gap-6">
        <button className="btn rounded-full bg-primary border-primary px-20 text-white">
          Playstore
        </button>
        <button className="btn rounded-full text-primary border-primary md:text-white md:border-white px-20">
          App store
        </button>
      </div>
    </section>
  );
}
