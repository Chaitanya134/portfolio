const Hero: React.FC = () => {
    return (
        <main className="flex items-center justify-between px-lg">
            <div className="flex flex-col items-start gap-4">
                <h1 className="font-bold text-5xl">
                    Hey,<br />
                    I'm <span className="text-blue"><i>Chaitanya</i> Giri</span>
                </h1>
                <p className="text-lg">
                    A Full Stack Developer and AI/ML enthusiast, making great<br />
                    things happen
                </p>
                <button className="bg-blue text-white rounded py-2 px-4 font-semibold mt-2">
                    Say Hello <span className="-rotate-[20deg] inline-block">🖐</span>
                </button>
            </div>
        </main>
    )
}

export default Hero;