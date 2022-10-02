import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }

    return (
        <header className="bg-dark flex items-center justify-between px-lg text-white">
            <h2 className="text-xl font-semibold cursor-pointer" onClick={handleClick}>Chaitanya Giri</h2>
            <nav className="flex items-center gap-6">
                <Link href="/project">
                    <a>Projects</a>
                </Link>
                <Link href="#contact">
                    <a>Hire Me!</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;