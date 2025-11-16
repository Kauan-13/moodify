import styles from './styles.module.css'

type LoginButtonProps = {
    iconPath: string
    appName: string
}

const LoginButton = ({ iconPath, appName }: LoginButtonProps) => {

    return (
        <button className={styles.button}>
            <img className={appName === 'amazon music' ? styles.amazon : ''} src={iconPath} alt={`Ícone aplicação ${appName}`} />
            <p>Continuar com <span>{appName}</span></p>
        </button>
    )

}

export default LoginButton