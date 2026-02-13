import imgLogo from '../assets/logo.jpg';
import Button from "./UI/Button";

export default function Header() {
    return <header id="main-header">
        <div id="title">
            <img src={imgLogo} alt="Delicious Food Logo" />
            <h1>Delicious Food</h1>
        </div>
        <nav>
            <Button textOnly >Cart (0)</Button>
        </nav>
    </header>;
}