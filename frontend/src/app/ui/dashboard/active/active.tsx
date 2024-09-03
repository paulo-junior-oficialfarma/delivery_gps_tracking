import styles from './active.module.css'
import {FaTruckFast } from 'react-icons/fa6'

const Active = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.container}>
                    <FaTruckFast size={30}/>
                    <div className={styles.texts}>
                        <span className={styles.title}>Active Users</span>
                        <span className={styles.number}>5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Active