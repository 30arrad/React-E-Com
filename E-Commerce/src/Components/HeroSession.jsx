import styles from "./HeroSession.module.css";

const HeroSession = () => {
    return (
        <center  className={styles.ALL}>
        <h1>BEST CLOTHING COLLECTION</h1>
        <p>Discover quality styles and fashion trends for every occasion.</p>
        <div className={styles.BUTTON}>
            <button type="button" className="btn btn-secondary">T-SHIRTS</button>
            <button type="button" className="btn btn-secondary">JACKETS</button>
            <button type="button" className="btn btn-secondary">PANTS</button>
            <button type="button" className="btn btn-secondary">HOODIES</button>
            <button type="button" className="btn btn-secondary">SHIRTS</button>
        </div>   
        </center> 
    )
}

export default HeroSession;