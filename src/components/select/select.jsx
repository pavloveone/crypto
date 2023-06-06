import styles from './select.module.css';

export const Select = ({children, onChange}) => {
    return (
        <select onChange={onChange} className={styles.select}>
            {children}
        </select>
    );
}