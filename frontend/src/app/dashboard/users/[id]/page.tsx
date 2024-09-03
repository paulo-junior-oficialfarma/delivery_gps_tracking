import styles from '@/app/ui/dashboard/users/viewUser/viewUser.module.css'
import Image from 'next/image'

const ViewUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="User Image" fill/>
                </div>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Nome</label>
                    <input type="text" name="name" id="" placeholder='John Doe'/>
                    <label>Username</label>
                    <input type="text" name="username" id="" placeholder='john.doe'/>
                    <label>E-mail</label>
                    <input type="email" name="email" id="" placeholder='email@email.com'/>
                    <label>Senha</label>
                    <input type="password" name="password" id=""/>
                    <label>CPF/CNPJ</label>
                    <input type="text" name="taxvat" id="" placeholder='123456789-10'/>
                    <label>Telefone</label>
                    <input type="phone" name="phone" id="" placeholder='(11) 91234-5678'/>
                    <button type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    )
}

export default ViewUserPage