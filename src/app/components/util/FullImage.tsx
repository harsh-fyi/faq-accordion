import Image from "next/image";

/*
* An Image that takes up the entire size of the div.
*/
export default function FullImage({ src, alt }: { src: string, alt: string }) {
    return (
        <Image src={src} alt={alt}
            width={0} height={0} sizes="100vw"
            style={{ width: '100%', height: 'auto' }} />
    )
}