import * as homeActionTypes from '../constants/home';
import demoApi from '../../api/demo';

export const fetchOne = () => {
    return {
        type: [homeActionTypes.HOME_FETCH_REQUEST, homeActionTypes.HOME_FETCH_SUCCESS, homeActionTypes.HOME_FETCH_ERROR],
        promise: () => {
            return demoApi.fetchHome();
        }
    };
};
