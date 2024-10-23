export default function VideoComponent() {
  return (
    <div className="w-app-w mx-auto py-8">
      <video className=""  controls poster="./img/thumbnail.jpg">
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  )
}