interface Card {
  img: string;
  productName: string;
  price: string;
  text: string;
  href: string;
  reverse: Boolean;
}

const heroCardItem: Card[] = [
  {
    img: "./img/sub-hero-img.png",
    productName: "Product Name",
    price: "IDR 300.000",
    text: "Shop Now",
    href: "/",
    reverse: false,
  },
  {
    img: "./img/sub-hero-img.png",
    productName: "Product Name",
    price: "IDR 300.000",
    text: "Shop Now",
    href: "/",
    reverse: true,
  },
];
export default function HeroSection() {
  return (
    <section className="w-app-w mx-auto text-white pt-10 md:flow-root min-h-[40vh]">
      <div className="flex flex-col">
        <h4 className="uppercase text-sm md:text-3xl font-playfair">
          made in Indonesia, dedicated to Indonesia
        </h4>
        <h1 className="font-extrabold text-3xl md-lg:text-3xl font-playfair md:text-8xl uppercase w-[85vw] leading-tight">
          Discover the Art of Dressing Up
        </h1>
      </div>
      <div className=" flex flex-col gap-6 md:float-right ">
        {heroCardItem.map(
          ({ img, productName, price, text, href, reverse }) => (
            <div
              key={productName}
              className={`flex bg-white  rounded-sm${reverse ? "flex-row-reverse" : ""}`}
            >
              <img src={img} alt="product image" />
              <div className="flex flex-col gap-6 bg-white text-accent font-playfair p-4">
                <h1 className="font-black">{productName}</h1>
                <h4 className="text-app-grey-400">{price}</h4>
                <a href={href} className="underline">
                  {text}
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
