import { RiBlurOffLine, RiChatOffLine, RiFilterOffLine, RiWifiOffLine } from 'react-icons/ri'
import styles from './offline.module.css'
import {FaTruckFast } from 'react-icons/fa6'
import { BiUserX } from 'react-icons/bi'
import { MdDisabledByDefault, MdOfflineShare } from 'react-icons/md'
import { GiOffshorePlatform } from 'react-icons/gi'

const Offline = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.container}>
                    <RiWifiOffLine size={30}/>
                    <div className={styles.texts}>
                        <span className={styles.title}>Offline Users</span>
                        <span className={styles.number}>2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offline