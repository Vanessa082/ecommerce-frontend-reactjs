export default function Footer() {
  return (
    <footer className="w-app-w mx-auto flex flex-col md:flex-row  items-center gap-10 p-6 bg-primary text-white">
     <div className="flex flex-col md:flex-row items-center md:gap-32 gap-8 font-lato">
     <div>
        <img src="/flogo.svg" alt="footer logo" />
        <ul className="flex flex-col gap-4 items-start">
          <li>WhatsApp<span>: +237 671-49-20-13</span></li>
          <li>Email<span>: hello@modeva.com</span></li>
          <h4>Address<span className="">: Lorem ipsum street Block B Number 08,<br/> Jakarta, Indonesia, 12345</span></h4>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row font-lato gap-12 text-xl">
        <ul className="flex flex-col gap-4 items-start">
          <span className="font-extrabold font-lato text-2xl ">Menu</span>
          <li>Sale</li>
          <li>New Arrival</li>
          <li>Formal Men</li>
          <li>Formal Woman</li>
          <li>Casual Men</li>
          <li>Casual Women</li>
        </ul>

        <ul className="flex flex-col gap-4 items-start">
          <span className="font-extrabold font-lato text-2xl">Get Help</span>
          <li>FAQ</li>
          <li>Customer Service</li>
          <li>Refund and Return</li>
          <li>Terms and Condition</li>
          <li>Shipping</li>
        </ul>

        <ul className="flex flex-col gap-4 items-start">
          <span className="font-extrabold font-lato text-2xl">Acount</span>
          <li>My Account</li>
          <li>My Orders</li>
          <li>Vouchers and Discounts</li>
        </ul>
      </div>
     </div>
    </footer>
  );
}
