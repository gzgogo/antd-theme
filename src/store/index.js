import BasicFormStore from './BasicFormStore';
import StepFormStore from './StepFormStore';
import SearchListStore from './SearchListStore';
import LoginStore from './LoginStore';
import HomeStore from './HomeStore';
import ReportStore from './ReportStore';

export default {
  basicFormStore: new BasicFormStore(),
  stepFormStore: new StepFormStore(),
  searchListStore: new SearchListStore(),
  loginStore: new LoginStore(),
  homeStore: new HomeStore(),
  reportStore: new ReportStore()
};
