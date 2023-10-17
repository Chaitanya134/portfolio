import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <main className="flex items-center justify-between px-lg">
            <div className="flex flex-col items-start gap-4 text-container">
                <h1 className="font-bold text-6xl">
                    Hey,<br />
                    I&apos;m <span className="text-gradient"><i>Chaitanya Giri</i></span>
                </h1>
                <p className="text-lg">
                    A Full Stack Developer and AI/ML enthusiast, making great<br />
                    things happen
                </p>
                <button className="bg-gradient text-white rounded-md py-2 px-4 font-semibold mt-2">
                    Say Hello <span className="-rotate-[20deg] inline-block">🖐</span>
                </button>
            </div>
            <div className="relative h-[350px] aspect-square drop-shadow-2xl">
                <Image src="/photo.png" alt="Chaitanya Photo"
                 objectFit="cover" layout="fill" priority />
            </div>
        </main>
    )
}

export default Hero;