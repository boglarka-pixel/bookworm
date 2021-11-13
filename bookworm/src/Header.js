import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <div className="header">
                <h1>
                    <Link to="/">
                        Bookworms
                    </Link>
                </h1>

            </div>
        </nav>
    )
}

export default Header;