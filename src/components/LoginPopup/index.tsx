import { IoIosClose } from 'react-icons/io'
import LoginButton from '../LoginButton'

import styles from './styles.module.css'

const LoginPupup = () => {

    return (
        <div className={styles.card}>

            <IoIosClose className={styles.close} />

            <div className={styles.top}>
                <h3>Entrar ou Cadastrar</h3>
                <p>Você vai poder aproveitar playlists geradas de forma inteligentes e aproveitar músicas de uma nova maneira</p>
            </div>

            <LoginButton appName='spotify' iconPath='src/assets/react.svg' />
            <LoginButton appName='deezer' iconPath='src/assets/react.svg' />
            <LoginButton appName='amazon music' iconPath='src/assets/react.svg' />
            <LoginButton appName='apple music' iconPath='src/assets/react.svg' />
            <LoginButton appName='youtube music' iconPath='src/assets/react.svg' />
        </div>
    )

}

export default LoginPupup