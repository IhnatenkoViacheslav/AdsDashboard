import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip
} from 'chart.js'
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'
import { options } from './chart.options'

import { useQuery } from '@tanstack/react-query'
import { StatisticsService } from '../../../../services/StatisticsService'
import Loader from '../../../ui/Loader'
import styles from './VerticalBarChart.module.scss'

ChartJS.register(CategoryScale, BarElement, LinearScale, Tooltip)

const VerticalBarChart: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get bar statistics'],
    queryFn: () => StatisticsService.getBarStats()
  })

  return (
    <div className={styles.chart}>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <Bar
          options={options}
          data={{
            labels: data.map((item) => item.name),
            datasets: [
              {
                label: 'Views',
                data: data.map((item) => item.views),
                borderWidth: 1,
                backgroundColor: '#7a94fe'
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

export default VerticalBarChart
