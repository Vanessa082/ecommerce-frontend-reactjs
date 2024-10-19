interface Card {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  alt: string;
  reverse: boolean;
}
const Cards: Card[] = [
  {
    title: "Create an account",
    subtitle: "Create/login to an existing account to get started",
    description: "An account is created with your email and a desired password",
    imageUrl: "/img/create-account.svg",
    alt: "Authentication screen",
    reverse: true,
  },
  {
    title: "Explore varieties",
    subtitle: "Shop for your favorites meal as e dey hot.",
    description:
      "Shop for your favorite meals or drinks and enjoy while doing it.",
    imageUrl: "/img/explore.svg",
    alt: "Food varieties screen",
    reverse: false,
  },
  {
    title: "Checkout",
    subtitle: "When you done check out and get it delivered.",
    description: "When you done checkout and get it delivered with ease.",
    imageUrl: "/img/checkout.svg",
    alt: "Checkout screen",
    reverse: true,
  },
];
export default function HowTheAppWorks() {
  return (
    <section className="w-full">
      <div className="flex flex-col-reverse md:flex-col justify-center items-center gap-9">
        <hr className=" w-full md:w-[70vw] h-1 bg-app-grey-900 content-center font-bold" />
        <h1 className="text-black font-bold text-2xl">How the app works</h1>
      </div>
      <div className="flex flex-col justify-center items-center py-8 md:gap-10">
        {Cards.map(
          ({ title, subtitle, description, imageUrl, alt, reverse }) => (
            <div
              key={title}
              className={`flex  flex-col md:flex-row md:gap-32 ${reverse ? "md:flex-row-reverse" : ""} items-center`}
            >
              <div className="md:max-w-[35vw] max-w-[78vw] flex flex-col items-center  text-center gap-4">
                <h3 className="text-app-orange-900 font-semibold ">{title}</h3>
                <h2 className="text-2xl font-bold text-app-blue-900 ">
                  {subtitle}
                </h2>
                <p className="text-app-grey-900">{description}</p>
              </div>
              <img src={imageUrl} alt={alt} className="md:w-[30vw]" />
            </div>
          )
        )}
      </div>
    </section>
  );
}
