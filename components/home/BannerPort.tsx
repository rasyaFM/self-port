import Image from 'next/image'
import Design from './Banner/Design'
import Photo from './Banner/Photo'
import VideoPro from './Banner/VideoPro'
import Link from 'next/link'

export default function BannerPort() {
  return (
    <div className="bannerPort flex-col">
        <div className='mb-8 mt-16'>
            <Design/>
        </div>
        <div className='my-7'>
            <Photo/>
        </div>
        <div className='my-7'>
            <VideoPro/>
        </div>
        <div className='mt-8 mb-20 text-center'>
            <h6 className="italic">as Website Developer</h6>
            <h2 className="text-3xl font-semibold">My Website Portfolio</h2>
            <button  className='bg-slate-200 rounded-box px-3 py-2 mt-3 hover:bg-blue-950 hover:text-white '> Check Here</button>
        </div>
    </div>
  )
}
