import { useAuth } from '../../contexts/AuthContext';
import styles from './styles.module.css'

type LoginButtonProps = {
    iconPath: string
    appName: string
    onServiceSelected?: () => void
}

const LoginButton = ({ iconPath, appName, onServiceSelected }: LoginButtonProps) => {
    const { setUser } = useAuth();

    const handleClick = () => {
        const mockUsername = `user_${appName.replace(' ', '_')}`;
        setUser({
            username: mockUsername,
            service: appName
        });
        onServiceSelected?.();
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            <img className={appName === 'amazon' ? styles.amazon : ''} src={iconPath || "/placeholder.svg"} alt={`Ícone aplicação ${appName}`} />
            <p>Continuar com <span>{appName}</span></p>
        </button>
    )

}

export default LoginButton
