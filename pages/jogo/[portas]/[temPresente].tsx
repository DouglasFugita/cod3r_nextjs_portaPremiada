import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from '../../../styles/Jogo.module.css'
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Jogo() {
    const router = useRouter()
    const [valido, setValido] = useState(true)
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const numPortas = +router.query.portas
        const temPresente = +router.query.temPresente

        const portasValidas = numPortas >= 3 && numPortas <= 20
        const temPresenteValido = temPresente >= 1 && temPresente <= numPortas

        if (!(portasValidas && temPresenteValido)) setValido(false);

    }, [portas, router.query.portas, router.query.temPresente])

    useEffect(() => {
        const numPortas = +router.query.portas
        const temPresente = +router.query.temPresente

        setPortas(criarPortas(numPortas, temPresente))

    }, [router?.query])

    function renderizarPortas() {
      return portas.map((porta, index) => <Porta value={porta} key={index}
        onChange={novaPorta =>
          setPortas(atualizarPortas(portas, novaPorta))
        } />)
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                { valido? renderizarPortas()
                : <h2> Valores invalidos</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}