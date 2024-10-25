export default function Category() {
  return (
    <section
      id="category"
      className="w-app-w min-h-[100vh] mx-auto py-8 flex flex-col md:flex-row justify-center items-center gap-8 text-white font-playfair"
    >
      <div className="w-full h-full flex flex-col flex-1 min-h-[100vh] gap-8">
        <div className="relative w-full h-full flex-1 bg-formal-women bg-cover bg-center">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            <p className="text-2xl font-bold">FORMAL WOMAN</p>
          </div>
        </div>

        <div className="relative w-full h-full flex-1 bg-formal-men bg-cover bg-center">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            <p className="text-2xl font-bold">FORMAL MAN</p>
          </div>
        </div>
      </div>

      <div className="relative w-full flex-1 bg-formal-casual bg-cover bg-center bg-no-repeat min-h-[100vh]">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <p className="text-2xl font-bold">FORMAL CASUAL</p>
        </div>
      </div>
    </section>
  );
}
