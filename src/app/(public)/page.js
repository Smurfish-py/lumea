import { poppins, inter } from "../fonts"

export default function Page() {
  return (
    <>  
      <div className="hero min-h-screen" style={{backgroundImage: "url('/images/man-with-camera.jpg')"}}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content w-full flex flex-col lg:items-start lg:px-16">
          <div className="lg:w-1/2">
            <h1 className={`${poppins.className} text-5xl font-light mb-8`}>
                Buat portofolio-mu <span className="text-rotate">
                <span>
                  <span>di mana saja</span>
                  <span>kapan saja</span>
                </span>
              </span>
            </h1>
            <p className={`${inter.className}`}>
              Bangun portofolio online dengan mudah menggunakan Lumea. Cukup tulis dalam format Markdown, dan biarkan kami mengubahnya menjadi halaman portofolio yang bersih, elegan, dan siap dipublikasikan — tanpa coding.
            </p>
            <div className={`${poppins.className} mt-8 flex gap-4`}>
              <a className="btn">Buat Portofolio</a>
              <a className="btn btn-outline">Panduan</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}