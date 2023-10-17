import { IconType } from "react-icons"
import { socialMediaLinks } from "../utils/socialMediaLinks";

interface SocialMediaLinkProps {
    Icon: IconType,
    socialMedia: string,
    username: string,
    link: string
}

const Contact: React.FC = () => {
    return (
        <section id="contact" className="h-screen bg-dark px-lg pt-12 flex flex-col">
            <h2 className="text-white text-center text-5xl font-bold mb-16 text-container">
                Let&apos;s <i className="text-gradient">work</i> together!
            </h2>
            <div className="text-white flex flex-col items-center justify-center grow">
                {
                    socialMediaLinks.map(socialMediaLink => (
                        <SocialMediaLink key={socialMediaLink.socialMedia} {...socialMediaLink} />
                    ))
                }
            </div>
            <footer className="text-white text-center mb-4">
                Made with <span className="text-red-500">❤</span> by Chaitanya Giri
            </footer>
        </section>
    )
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ socialMedia, Icon, username, link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer"
         className="flex mb-4 items-end gap-2 text-2xl overflow-hidden group text-container">
                <div className="flex items-center gap-2">
                    <Icon />
                    {socialMedia}
                </div>
            <span
                className="text-white opacity-80 w-0 overflow-hidden group-hover:w-full transition-all duration-700 ease-in-out text-xl whitespace-nowrap">
                /{username}
            </span>
        </a>
    )
}

export default Contact;