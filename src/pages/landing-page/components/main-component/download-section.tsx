export default function DownloadApp () {
  return(
    <section className="md:bg-download-banner bg-app-blue-900 bg-cover bg-center w-full  min-h-[40vh] flex flex-col justify-center items-center gap-4 px-6  text-white">
      <h2 className="font-bold text-3xl w-fit text-nowrap">Download the app now.</h2>
      <h4 className="text-xl text-center">Available on your favorite store. Start your premium experience now</h4>
      <div className="flex gap-4 items-center">
        <button className="btn bg-primary border-primary">Buy now</button>
        <button className="btn">Try for free</button>
      </div>
    </section>
  )
}