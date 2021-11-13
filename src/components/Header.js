import { BsGithub } from 'react-icons/bs';

const Header = () => {
    return (
        <header>
            <div className="brand">
            <span>eko-develops</span>
            </div>
            <div className="socials">
            <div className="single-social">
                <a href="#">
                    <BsGithub size={25} />
                    {/* <div className="social-icon">
                    </div> */}
                    <span>GitHub</span>
                </a>
            </div>
            </div>
      </header>
    )
}

export default Header
