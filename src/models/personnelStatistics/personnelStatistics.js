/**
 * @description
 * @Version Created by Stephen on 2019/8/12.
 * @Author Stephen
 * @license dongfangdianzi
 */

import {
    fetchMemberInfo,
    fetchPersonnelList,
    fetchSelectInfo,
    addPersonnelInfo,
    deletePersonnelInfo,
    fetchPersonnelDetailInfo,
    updatePersonnelInfo,
} from '@/services/personnelStatistics/personnelStatistics';
import T from '../../utils/T';

export default {
    namespace: 'personnelStatistics',//要唯一

    state: {
        statisticsList: [
            {
                key: 1,
                totalNum: 10,
                returnNum: 20,
                closeContactsNum: 30,
                partyNum: 40,
                keyEpidemicAreasNum: 50,
                abnormalPhysicalConditionsNum: 60,
                quarantinedOnThatDayNum: 70,
                isolatedTotalNum: 80,
                quarantinedAtHomeOnThatDayNum: 90,
                atHomeTotalNum: 100,
            }
        ],//插件管理表格
    },

    effects: {
        //信息录入
        * addInfoAction({params, resolve, reject}, {call, put}) {
            try {
                const response = yield call(addPersonnelInfo, params);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        },
        * updateInfoAction({params, resolve, reject}, {call, put}) {
            try {
                const response = yield call(updatePersonnelInfo, params);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        },
        //删除功能
        * deleteInfoAction({id, resolve, reject}, {call, put}) {
            try {
                const response = yield call(deletePersonnelInfo, id);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        },
        //查看详情页面
        * fetchDetailInfoAction({id, resolve, reject}, {call, put}) {
            try {
                const response = yield call(fetchPersonnelDetailInfo, id);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        },

        //获取随访人员列表页面
        * fetchCheckRecordListAction({params, resolve, reject}, {call, put}) {
            try {
                const response = yield call(fetchPersonnelList, params);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        },





        //获取下拉选项
        * fetchSelectInfoAction({params, resolve, reject}, {call, put}) {
            try {
                const response = yield call(fetchSelectInfo, params);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        },
        //查看详情页面
        * fetchMemberInfoAction({id, resolve, reject}, {call, put}) {
            try {
                const response = yield call(fetchMemberInfo, id);
                resolve(response);
            } catch (error) {
                reject(error);
            }
        },
    },

    reducers: {
        setStatisticsList(state, {statisticsList}) {
            return {
                ...state,
                statisticsList
            };
        },
    },
};
