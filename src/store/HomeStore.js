import { extendObservable, action } from 'mobx';
import moment from 'moment';
import { getSummary, getData } from 'util/api';

export default class HomeStore {
  constructor() {
    this.reset(true);
  }

  @action
  reset = (init) => {
    const state = {
      amount: 0,
      pv: 0,
      count: 0,
      rate: 0,
      indicators: [],
      chartOptions: {},
      currentIndicator: null,
      currentRange: [moment().format('YYYY-HH-mm'), moment().format('YYYY-HH-mm')],
      loading: true
    };

    if (init) {
      extendObservable(this, state);
    } else {
      Object.keys(state).forEach(key => (this[key] = state[key]));
    }
  }

  @action
  onWillMount = async () => {
    this.reset();

    this.loading = true;
    await this.getSummary();
    await this.getData();
    this.loading = false;
  }

  @action
  getSummary = async () => {
    const res = await getSummary();
    if (res.code === 0) {
      const { data } = res;

      this.amount = data.amount;
      this.pv = data.pv;
      this.count = data.count;
      this.rate = data.rate;
    }
  }

  @action
  changeIndicator = async (indicatorId) => {
    this.currentIndicator = indicatorId;
    await this.getData();
  }

  @action
  changeDateRange = async (_, rangeStr = []) => {
    this.currentRange = rangeStr;
    await this.getData();
  }

  getData = async () => {
    const res = await getData(this.currentIndicator, this.currentRange);
    if (res.code === 0 && res.data) {
      const { indicators, categories, series } = res.data;
      this.indicators = indicators;
      this.chartOptions = this.transform2Chart('图表数据', categories, series);
    } else {
      this.chartOptions = this.transform2Chart('图表数据', [], []);
    }
  }

  transform2Chart = (title, categories, series) => {
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
