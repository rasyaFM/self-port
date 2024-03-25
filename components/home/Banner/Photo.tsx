import Link from "next/link";

export default function Photo() {
  return (
    <div className="photo rounded-box bg-slate-300 shadow-xl shadow-yellow-200 p-5 text-black">
        <div className="carousel carousel-center max-w-2xl h-[270px] p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="" className="rounded-box" />
            </div> 
            <div className="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="" className="rounded-box" />
            </div>
        </div>
        <div className="mr-7 text-right">
            <h6 className="mt-2 italic">as Photographer</h6>
            <h2 className="text-3xl font-semibold">My Photo Gallery</h2>
            <p className="mt-2 text-justify ml-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque odit aliquid, accusamus ab ipsum dolor eaque asperiores atque unde illum excepturi esse dolorem eligendi odio iste nobis modi eveniet deserunt!</p>
            <Link href="/design" className="flex mt-16 text-lg items-center ml-[360px] gap-2 hover:underline"><img width={18} src="left-chev.png" alt="kiri"/> View Projects</Link>
        </div>
    </div>
  )
}
