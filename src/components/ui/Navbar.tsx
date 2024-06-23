import { FC } from 'react'
import { AiFillDashboard, AiFillSetting } from 'react-icons/ai'
import { HiMiniHome, HiMiniIdentification } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import styles from './Layout.module.scss'

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <p className={styles.icon}>
          <HiMiniHome size={30} />
        </p>
      </Link>
      <Link to="/dashboard">
        <p className={styles.icon}>
          <AiFillDashboard size={30} />
        </p>
      </Link>
      <Link to="/">
        <p className={styles.icon}>
          <HiMiniIdentification size={30} />
        </p>
      </Link>
      <Link to="/">
        <p className={styles.icon}>
          <AiFillSetting size={30} />
        </p>
      </Link>
    </div>
  )
}

export default Navbar
