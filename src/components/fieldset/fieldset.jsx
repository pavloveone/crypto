import styles from './fieldset.module.css';

export const Fieldset = ({children}) => {
    return (
        <fieldset className={styles.tab}>
            {children}
        </fieldset>
    );
}