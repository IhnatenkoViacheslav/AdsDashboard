import { FC } from 'react'
import Layout from '../../ui/Layout'
import styles from './Dashboard.module.scss'
import CircularChart from './circular-chart/CircularChart'
import VerticalBarChart from './vertical-bar-chart/VerticalBarChart'

const Dashboard: FC = () => {
  return (
    <Layout>
      <h2>Dashboard</h2>
      <div className={styles.content}>
        <VerticalBarChart />
        <CircularChart />
      </div>
    </Layout>
  )
}

export default Dashboard
