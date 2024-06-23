import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip
} from 'chart.js'
import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { options } from './chart.options'

import { useQuery } from '@tanstack/react-query'
import { StatisticsService } from '../../../../services/StatisticsService'
import Loader from '../../../ui/Loader'
import styles from './CircularChart.module.scss'

ChartJS.register(CategoryScale, ArcElement, LinearScale, Tooltip)

const CircularChart: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get circular statistics'],
    queryFn: () => StatisticsService.getDoughnutStats()
  })

  return (
    <div className={styles.chart}>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <Doughnut
          options={options}
          data={{
            labels: data.map((item) => item.gender),
            datasets: [
              {
                label: 'Average age',
                data: data.map((item) => item.avgAge),
                borderWidth: 1,
                backgroundColor: ['#7a94fe', '#F7464A']
              }
            ]
          }}
        />
      ) : (
        <div>Error loading data</div>
      )}
    </div>
  )
}

export default CircularChart
