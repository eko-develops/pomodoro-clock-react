import { BsGithub } from 'react-icons/bs';

const Header = () => {
    return (
        <header>
            <div className="brand">
            <span>eko-develops</span>
            </div>
            <div className="socials">
            <div className="single-social">
                <a target="_blank" href="https://github.com/eko-develops">
                    <BsGithub size={25} />
                    <span>GitHub</span>
                </a>
            </div>
            </div>
      </header>
    )
}

export default Header
