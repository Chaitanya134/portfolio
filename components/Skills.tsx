import WordCloud from "./SkillsCloud";

const Skills: React.FC = () => {
    return (
        <section className="bg-dark px-lg py-12 h-screen flex flex-col">
            <h1 className="text-white text-center text-5xl font-semibold mb-4">I like to work with</h1>
            <div className='grow'>
                <WordCloud />
            </div>
        </section>
    )
}

export default Skills;