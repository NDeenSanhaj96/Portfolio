import "./Navbar.css";
import logo from "../../assets/Images/nkdatti-logo.png";

function Navbar() {
    return (
        <header className="navbar"><a href="#home" className="navbar--logo">
           <img src={logo} alt="NKDatti logo" /> 
        </a>
            <nav className="navbar--links">
                <ul className="navbar_links--lists">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className="navbar--btn">Let's Talk</button>
        </header>
    );
}
export default Navbar;