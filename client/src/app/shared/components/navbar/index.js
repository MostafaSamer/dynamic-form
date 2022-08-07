import { Link } from "react-router-dom";
import styles from './style.module.scss'

function Navbar() {
    return (
        <nav className={styles.navbar + " navbar navbar-expand-lg px-4"}>
            <a className="navbar-brand" href="/">Form Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                </ul>
                <Link to="/forms/create">
                    <button className={styles.createButton + " btn btn-outline-success mr-sm-2 my-2 my-sm-0"} type="submit">Create Form</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;