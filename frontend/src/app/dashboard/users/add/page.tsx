import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {

    return (
        <div className={styles.container}>
            <form action="/dashboard/users" method="post" className={styles.form}>
                <input type="text" name="" id="name" placeholder='Nome' required/>
                <input type="email" name="" id="email" placeholder='E-mail' required/>
                <input type="telephone" name="" id="phone" placeholder='Telefone' required/>
                <input type="text" name="" id="taxvat" placeholder='CPF/CNPJ' required/>
                <button type="submit">Criar</button>

            </form>
        </div>
    )
}

export default AddUserPage