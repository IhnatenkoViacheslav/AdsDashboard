import instance from '../api/interceptor'
import { IBarChart } from '../types/bar-chart.interface'
import { IDoughnutChart } from '../types/doughnut-chart.interface'

export const StatisticsService = {
  async getBarStats() {
    return instance.get<IBarChart[]>('/views').then(({ data }) => data)
  },

  async getDoughnutStats() {
    return instance.get<IDoughnutChart[]>('/audience').then(({ data }) => data)
  }
}
