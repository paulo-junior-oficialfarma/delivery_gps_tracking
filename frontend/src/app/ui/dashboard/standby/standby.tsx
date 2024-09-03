import { BiStopwatch } from 'react-icons/bi'
import styles from './standby.module.css'
import {FaClockRotateLeft, FaTruckFast } from 'react-icons/fa6'
import { MdModeStandby, MdOfflineBolt, MdOutlineModeStandby } from 'react-icons/md'
import { CiNoWaitingSign } from 'react-icons/ci'
import { PiClockUser } from 'react-icons/pi'

const Standby = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.container}>
                    <PiClockUser size={30}/>
                    <div className={styles.texts}>
                        <span className={styles.title}>Standby Users</span>
                        <span className={styles.number}>1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Standby