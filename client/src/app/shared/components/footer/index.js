import styles from './style.module.scss'

function Footer() {
    return (
        <footer className={styles.footer + " text-center text-lg-start"}>
            <div className="text-center p-3">
                © {new Date().getFullYear()} Copyright: Form
            </div>
        </footer>
    )
}

export default Footer;