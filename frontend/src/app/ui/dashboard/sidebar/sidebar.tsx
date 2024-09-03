import Image from "next/image";
import { MdDashboard, MdSupervisedUserCircle, MdLogout } from "react-icons/md"
import styles from './sidebar.module.css'
import MenuLink from "./menuLink/menuLink"
import { GrConfigure } from "react-icons/gr";
import Link from "next/link";
const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle/>
            }, 
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <GrConfigure/>
            }, 
        ],
    },
]

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src={"/noavatar.png"}
                    alt=""
                    width="50"
                    height="50"
                    />
                <div className={styles.userDetail}>
                    <span className={styles.userName}>John Doe</span>
                    <span className={styles.userTitle}>Administrador</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map(
                    cat=>(
                        <li key={cat.title}>
                            <span className={styles.cat}>{cat.title}</span>
                            {cat.list.map(item => (
                                <MenuLink item={item} key={item.title}/>
                            ))}
                        </li>
                    ))}
            </ul>
            <Link href="/login">
                <button className={styles.logout}>
                    <MdLogout/>
                    Logout
                </button>
            </Link>
        </div>
    )
}

export default Sidebar