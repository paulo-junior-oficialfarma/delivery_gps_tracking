import Active from "../ui/dashboard/active/active";
import Standby from "../ui/dashboard/standby/standby";
import styles from '../ui/dashboard/dashboard.module.css'
import Offline from "../ui/dashboard/offline/offline";
import { MapProvider } from "../providers/map-provider";
import { MapComponent } from "../components/map";

const Dashboard = () => {
    return (
        <div className={styles.content}>
            <div className={styles.cards}>
                <Active/>
                <Standby/>
                <Offline/>
            </div>

            <div className={styles.map}>
                <MapProvider>
                    <MapComponent/>
                </MapProvider>
            </div>
        </div>
    )
}

export default Dashboard;