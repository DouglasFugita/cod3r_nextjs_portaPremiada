import styles from '../styles/EntradaNumerica.module.css'

interface EntradaNumericaProps{
    text: string;
    value: number;
    onChange: (newValue: number) => void;
}

export default function EntradaNumerica(props) {
    return(
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.botao} onClick={() => props.onChange(props.value - 1)}>-</button>
                <button className={styles.botao} onClick={() => props.onChange(props.value + 1)}>+</button>
            </div>

        </div>
    )
}
