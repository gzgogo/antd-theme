import { extendObservable, action } from 'mobx';
import { getReportData } from 'util/api';

export default class ReportStore {
  constructor() {
    this.reset(true);

    this.planId = undefined;
  }

  @action
  reset = (init) => {
    const state = {
      name: '',
      data: [],
      dashboardData: {},
      chartOptions: this.transform2Chart('图表标题', { xAxis: [], series: [] }),
      loading: true
    };

    if (init) {
      extendObservable(this, state);
    } else {
      Object.keys(state).forEach(key => (this[key] = state[key]));
    }
  }

  @action
  onWillMount = async (id) => {
    this.reset();

    this.planId = id;

    this.loading = true;
    await this.getReportData();
    this.loading = false;
  }

  @action
  getReportData = async (rangeStart, rangeEnd) => {
    const res = await getReportData(this.planId, rangeStart, rangeEnd);
    if (res.code === 0 && res.data) {
      const { name, indicator1, indicator2, indicator3, details } = res.data;
      this.name = name;
      this.data = details;
      this.dashboardData = {
        indicator1,
        indicator2,
        indicator3
      };
      this.chartOptions = this.transform2Chart('图表标题', details);
    }
  }

  transform2Chart = (title, data) => {
    if (!Array.isArray(data)) {
      data = [];
    }

    const categories = [];

    const series = [{
      name: '指标1',
      data: []
    }];

    data.forEach((item) => {
      categories.push(item.time);
      series[0].data.push(Number(item.value));
    });

    const chartOptions = {
      title: {
        text: title
      },
      xAxis: {
        categories
      },
      yAxis: {
        title: '',
        gridLineDashStyle: 'Dot'
      },
      credits: false,
      series
    };

    return chartOptions;
  }
}
