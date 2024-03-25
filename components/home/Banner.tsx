import Image from "next/image";

export default function Banner() {
  return (
    <div className="hero">
        <div className="banner gap-3 mb-12">
            <div className="bannerText flex-col">
                <div className="flex-row bannerImage mb-2">
                    <Image src="/4x5.jpg" width={220} height={250} alt="profile" className="rounded-full max-w-sm shadow-2xl " />
                </div>
                <h1 className="text-5xl font-bold mt-2">Muhammad Fadhli Rahmansyah</h1>
                <p className="py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni velit, dicta aperiam ad dolores odit ipsum quis, debitis iste doloremque hic placeat ex fugit saepe omnis unde porro voluptatibus fuga!.</p>
            </div>
            <div className="bannerImage flex-col mt-5 bg-slate-300 rounded-ss-full rounded-ee-full">
                <Image src="/animation.png" width={370} height={350} alt="character" className="max-w-sm rounded-ee-5xl" />
                <button className="btn btn-primary mt-3">Get CV</button>
            </div>
        </div>
    </div>
  )
}
