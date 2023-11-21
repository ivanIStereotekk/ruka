import Image from 'next/image';
import IvanImage from 'public/ivan.jpeg';


export default function IvanComponent(){
    return <>
    <Image src={IvanImage} width={200} height={200} alt='Ivan Image'></Image>
    </>
}