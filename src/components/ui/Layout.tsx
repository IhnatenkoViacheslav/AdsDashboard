import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import Navbar from './Navbar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default Layout
