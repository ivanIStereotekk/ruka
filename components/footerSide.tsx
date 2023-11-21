import telegram from "public/telegram.svg"
import facebook from "public/facebook.svg"
import instagram from "public/instagram.svg"
import whatsapp from "public/whatsapp.svg"
import soundcloud from "public/soundcloud.svg"
import envelope from "public/envelope-solid.svg"
import youtube from "public/youtube.svg"
import gitfork from "public/gitfork.svg"
import star from "public/star.svg"

import Image from 'next/image'
import Link from 'next/link'

export default function FooterComponent(){
    const iconSize = 30;
    return<>
    <footer className='flex flex-row space-x-10 pt-16 pb-16 align-center'>
        <Link href={'tg://resolve?domain=EwanPotterman'}>
            <Image src={telegram} width={iconSize} height={iconSize} alt='Telegram widget'>
            </Image>
        </Link>
        <Link href='https://www.instagram.com/ivan_stereotekk'>
            <Image src={instagram} width={iconSize} height={iconSize} alt='Instagram widget'>
            </Image>
        </Link>
        <Link href={'https://www.facebook.com/IvanStereotekk'}>
            <Image src={facebook} width={iconSize} height={iconSize} alt='Facebook widget'>
            </Image>
        </Link>
        <Link href={'https://wa.me/+79855203082'}>
            <Image src={whatsapp} width={iconSize} height={iconSize} alt='Whatsapp widget'>
            </Image>
        </Link>
        <Link href={'https://soundcloud.com/ivanstereotekk'}>
            <Image src={soundcloud} width={iconSize} height={iconSize} alt='SoundCloud widget'>
            </Image>
        </Link>
        <Link href={'mailto:ivan.stereotekk@gmail.com'}>
            <Image src={envelope} width={iconSize} height={iconSize} alt='Email widget'>

            </Image>
        </Link>
        <Link href={'https://www.youtube.com/channel/UCg-Hb0H3Zee487dMMuptV9g'}>
            <Image src={youtube} width={iconSize} height={iconSize} alt='YouTube widget'>
            </Image>
        </Link>
        

    </footer>
     <div className='flex flex-row justify-items-center pb-2 text-gray-800'> 

     <b>Forks: 55</b>
     <Link href={'https://github.com/ivanIStereotekk?tab=repositories'}/>
            <Image src={gitfork} width={iconSize} height={iconSize} alt='git-fork widget'> 
    </Image>
    <Link href={'https://github.com/ivanIStereotekk?tab=repositories'}>
            <Image src={star} width={iconSize} height={iconSize} alt='git-star widget'>
            </Image>
    </Link>
    <b>Stars: 98</b>

    
     </div>
         <a className="justify-items-stretch" href='https://github.com/ivanIStereotekk?tab=repositories'><small>этот сайт, и сайты еще лучше</small></a> 
     
            
    </>
}
