import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from 'next/link'
import { RxAvatar } from 'react-icons/rx'

const UsersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user"/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>
                        Add New
                    </button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <RxAvatar width={50} height={50}/>
                                John Doe
                            </div>
                        </td>
                        <td>jhon.doe@platform.com</td>
                        <td>(11) 912345678</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/users/1">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default UsersPage