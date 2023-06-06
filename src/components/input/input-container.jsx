import styles from './input-container.module.css';

export const InputContainer = ({children}) => {
    return (
        <div className={styles.input_container}>
            <input className={styles.input} type='text' />
            {children}
        </div>
    );
}