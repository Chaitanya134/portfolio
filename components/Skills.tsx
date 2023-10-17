import WordCloud from "./SkillsCloud";

const Skills: React.FC = () => {
    return (
        <section className="bg-dark px-lg py-16 h-screen flex flex-col">
            <h2 className="text-white text-center text-5xl font-semibold text-container">
                I like to <i className="text-gradient">work</i> with
            </h2>
            <div className='grow flex items-center justify-between'>
                <div className="text-white opacity-70 max-w-[50%] text-container">
                    <p>A skilled software developer with over 3 years of experience in AI/ML, Data Science, Full Stack Development, and Flutter. Proficient in building SaaS for B2C and B2B clients, working closely with the core team throught the journey while also gaining entrepreneurial knowledge.</p>
                    <br />
                    <p>Actively scaled the startups to 6-7+ figure ARR while maintaining code readability, scalability and performance.</p>
                    <br />
                    <p>Made history by being the youngest to win the Amazon ML Challenge 2023 out of 26000+ participants including people from masters and phd, while in my sophomore year. Also won the Morgan Stanley Code to Give 2023 and got an intern opportunity at same.</p>
                </div>
                <WordCloud />
            </div>
        </section>
    )
}

export default Skills;