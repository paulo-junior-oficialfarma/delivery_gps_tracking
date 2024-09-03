import styles from '@/app/ui/login/login.module.css'

const Login = () => {
    return (
        <div className={styles.container}>
            <form action="/dashboard" method="post" className={styles.form}>
            <h1>Login</h1>
            <input type="email" placeholder='E-mail' required/>
            <input type="password" placeholder='Senha' required/>
            <button type="submit">Acessar</button>
            </form>
        </div>
    )
}

export default Login;