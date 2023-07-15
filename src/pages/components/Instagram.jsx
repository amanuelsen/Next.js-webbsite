
import igimg1 from "../public/ig-img-1.jpeg";
import igimg2 from "../public/ig-img-2.jpeg";
import igimg3 from "../public/ig-img-3.jpeg";
import igimg4 from "../public/ig-img-4.jpeg";
import igimg5 from "../public/ig-img-5.jpeg";
import igimg6 from "../public/ig-img-6.jpeg";
import Instagraming from "./Instagraming";


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <Instagraming socialImg={igimg1} />
            <Instagraming socialImg={igimg2} />
            <Instagraming socialImg={igimg3} />
            <Instagraming socialImg={igimg4} />
            <Instagraming socialImg={igimg5} />
            <Instagraming socialImg={igimg6} />
        </div>
    </div>
  )
}

export default Instagram
