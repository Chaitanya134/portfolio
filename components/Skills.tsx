import WordCloud from "./SkillsCloud";

const Skills: React.FC = () => {
    return (
        <section className="bg-dark px-lg py-16 h-screen flex flex-col">
            <h2 className="text-white text-center text-5xl font-semibold">
                I like to <i className="text-blue">work</i> with
            </h2>
            <div className='grow flex items-center justify-between'>
                <div className="text-white opacity-70 max-w-[50%]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint blanditiis autem quaerat, delectus et quibusdam voluptate. Architecto molestiae quos mollitia voluptates assumenda ipsum quisquam veniam eaque alias voluptate possimus dolorum unde aliquid, magni ullam ipsam atque sit delectus. Delectus totam possimus officia vel provident ullam maxime tempora, eaque tenetur.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et soluta rem. Aperiam obcaecati aspernatur earum reprehenderit voluptatem ex, expedita quam soluta illo nemo consequuntur.</p>
                </div>
                <WordCloud />
            </div>
        </section>
    )
}

export default Skills;