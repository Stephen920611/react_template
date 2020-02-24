/**
 * @description
 * @Version Created by Stephen on 2019/8/12.
 * @Author Stephen
 * @license dongfangdianzi
 */
import EnumAPI from './../../constants/EnumAPI';
import {postJSON, post, get,del,put} from './../../utils/core/requestTj';
import T from './../../utils/T';

//信息录入
export async function addPersonnelInfo(params = {}) {
    return postJSON(EnumAPI.addPersonnelInfo, params);
    // return post(EnumAPI.addPersonnelInfo, params);
}
//编辑信息录入
export async function updatePersonnelInfo(params = {}) {
    return put(EnumAPI.updatePersonnelInfo, params);
}
export async function deletePersonnelInfo(id) {
    return del(EnumAPI.deletePersonnelInfo(id));
}
//获取详情
export async function fetchPersonnelDetailInfo(id) {
    return get(EnumAPI.fetchPersonnelDetailInfo(id));
}
//获取摸排记录查询列表
export async function fetchPersonnelList(params = {}) {
    return post(EnumAPI.fetchPersonnelList, params);
}



//查看详情页面
export async function fetchMemberInfo(id) {
    return get(EnumAPI.fetchMemberInfo(id));
}



//获取下拉选项
export async function fetchSelectInfo(params = {}) {
    return post(EnumAPI.fetchSelectInfo, params);
}