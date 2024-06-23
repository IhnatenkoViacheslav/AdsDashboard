import { Link } from 'react-router-dom'
import Layout from '../../ui/Layout'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <Layout>
      <h2>Home</h2>
      <div className={styles.home}>
        <p>
          Optimize Your Campaigns with <span>Real-Time</span> Ad Metrics!
        </p>
        <Link to="/dashboard">
          <button>Let's start</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Home
