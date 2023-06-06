import styles from './input-element.module.css';

export const InputElement = ({ title, children }) => {

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            {children}
        </section>
    )
}