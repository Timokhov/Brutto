import { AvailableUrls } from '../../utils/constants';
import { History } from 'history';

let _history: History;

export const init = (history: History) => {
  _history = history
};

export const push = (url: AvailableUrls) => {
  if (_history) {
    _history.push(url);
  }
};
