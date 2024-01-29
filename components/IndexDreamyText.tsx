
import Image from 'next/image'
import AbletonImage from 'public/ableton.png'
import DancyMan from 'public/dancyman.gif'
import DataImage from 'public/data.gif'
import StayedGesture from 'public/stayed.gif'
import BrainActiv from 'public/brain.gif'
import FullBodyDance from 'public/fullBody.gif'
import BodyDance from 'public/bodydance.gif'



export default function DreamyText(){
    const imSize = 470;
    const oddSize = 470;
    const videoH = 450;
    const videoV = 270;
    return <>
        <h1 className=' pb-0 pt-5'>Gestures to MIDI</h1>
        <hr />

                    {/* <div className='flex flex-row flex-shrink p-0'>
                        <Image src={DancyMan} alt='Hand Landmarks Image' width={imSize} height={imSize}/>
                    </div> */}
                    <div className='flex flex-row'>
                        {/* <Image src="/one.png" alt="one" width={oddSize} height={imSize}></Image>
                    <Image src="/two.png" alt="one" width={oddSize} height={imSize}></Image> */}
                    <Image src="/three.png" alt="one" width={oddSize} height={imSize}></Image>

                    </div>
                    

<p className='prose'>
    Imagine having a small desktop device or app that linked with Ableton Live or any
synthesizer or drum machine, by using gestures you may switch parameters, play notes, play
chords, rotate knobs on a virtual synthesizer or drum machine. Sounds good !
</p>
<div className='pb-2'></div>

<iframe
    width={videoH}
    height={videoV}
    src="https://www.youtube.com/embed/wMKDv2Fauus?si=yJYUSP3Qj6_jdbCT"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
<br></br>
<div className='prose'>
Currently I have created the first and main part of the application. 
This is the beginning step and I am working on it constantly
improving my knowledge in the field of image recognition technologies and sound
design.
 As the project develops, I am ready to expand it, and as the next stage of development,
I want to use the Computer Brain Interface in order to better understand what
music is and what is the neural activity in the human cerebral cortex while
listening to it. 
<div className='pb-2'></div>
<Image src={BrainActiv} alt='Brain Activity Image' width={imSize} height={imSize}/> 
<div className='pb-2'></div>
I never had musical education and I have always dreamed of
having a device that would help send music which sounds into my head directly to
my speakers. Growing up as a lover and enthusiast in the field of music and
technology, it seemed to me that now there are already exist sensors and auxiliary
devices that will help make a childhood dream come true. As in any endeavor, the
first step is needed and most often it is the most difficult to take. 
</div>
      
            </>
}
