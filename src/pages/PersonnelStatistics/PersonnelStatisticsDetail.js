import React, {PureComponent, Fragment} from 'react';
import {connect} from 'dva';
import styles from './PersonnelStatisticsDetail.less';
import T from './../../utils/T';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import CustomBreadcrumb from '@/templates/ToolComponents/CustomBreadcrumb';

import {
    Row,
    Col,
    Card,
} from 'antd';

/* eslint react/no-multi-comp:0 */
@connect(({personnelStatistics, loading}) => ({
    personnelStatistics,
    fetchStatus: loading.effects['personnelStatistics/fetchDetailInfoAction'],
}))
class PersonnelStatisticsDetail extends PureComponent {
    constructor() {
        super();
        this.state = {
            activities: {},
            currentInfo: {},
            member: {},
            touch: [],
            detailData:{
                "batchNumber": "string",
                "city": "string",
                "controlMeasure": "string",
                "controlPerson": "string",
                "controlTelephone": "string",
                "dateArrive": "2020-02-13T07:25:28.927Z",
                "dateConvertConfirm": "2020-02-13T07:25:28.927Z",
                "dateConvertSuspect": "2020-02-13T07:25:28.927Z",
                "dateLeftPass": "2020-02-13T07:25:28.927Z",
                "dateRelease": "2020-02-13T07:25:28.927Z",
                "districts": "string",
                "dutyPolice": "string",
                "dutyPoliceTelephone": "string",
                "id": 0,
                "idCard": "string",
                "isCloser": "string",
                "isFromOtherProvince": "string",
                "isSymptom": "string",
                "leftPlace": "string",
                "regDate": "2020-02-13T07:25:28.928Z",
                "relationSuspector": "string",
                "residenceAddress": "string",
                "residenceType": "string",
                "routeDetail": "string",
                "suspectorIdcard": "string",
                "suspectorName": "string",
                "telephone": "string",
                "temperature": "string",
                "timeLeftShangdong": "2020-02-13T07:25:28.928Z",
                "touchDate": "2020-02-13T07:25:28.928Z",
                "typeArrvie": "string"
            },
        }
    }

    componentDidMount() {
        const {dispatch, location} = this.props;
        let self = this;
        //验证是否刷新页面
        T.auth.returnSpecialMainPage(location, '/personnelStatistics');
        // console.log('location',location["params"]);
        if (location.hasOwnProperty("params") && location["params"].hasOwnProperty("data")) {
            new Promise((resolve, reject) => {
                dispatch({
                    type: 'personnelStatistics/fetchDetailInfoAction',
                    id: location["params"]["data"]["id"],
                    resolve,
                    reject,
                });
            }).then(response => {
                // const {currnets, member, touch, activities} = response.data;
                if (response.code === 0) {
                    self.setState({
                        detailData: response.data,
                    })
                } else {
                    T.prompt.error(response.msg);
                }
            });
        }
    }

    render() {
        const {fetchStatus} = this.props;
        const {
            activities,
            currentInfo,
            member,
            touch,
            detailData
        } = this.state;
        const breadcrumbDetail = [
            {
                linkTo: '/personnelStatistics',
                name: '随访人员记录',
            },
            {
                name: '随访人员详情界面',
            },
        ];

        return (
            <PageHeaderWrapper
                title={"随访人员详情界面"}
                isSpecialBreadcrumb={true}
                breadcrumbName={<CustomBreadcrumb dataSource={breadcrumbDetail}/>}
            >
                <div>
                    <div className={styles.detailItem}>
                        <div className={styles.detailTitleName}>
                            基本信息
                        </div>
                        <Card
                            style={{marginBottom: 20}}
                            loading={fetchStatus}
                        >
                            <Row className={styles.detailTitle}>
                                <Col span={6} className={styles.detailBtns}>
                                    <span>姓名：</span>
                                    <span>
                                        {
                                            detailData.hasOwnProperty('name') ? detailData.name : '---'
                                        }
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>身份证号：</span>
                                    <span>
                                        {
                                            detailData.hasOwnProperty('idCard') ? detailData.idCard : '---'
                                        }
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>手机号：</span>
                                    <span>
                                        {
                                            detailData.hasOwnProperty('telephone') ? detailData.telephone : '---'
                                        }
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>居住类型：</span>
                                    <span>
                                        {
                                            detailData.hasOwnProperty('residenceType') ? detailData.residenceType : '---'
                                        }
                                    </span>
                                </Col>
                            </Row>
                            <Row className={styles.detailTitle}>
                                <Col span={6} className={styles.detailBtns}>
                                    <span>当前居住地址：</span>
                                    <span>
                                        {detailData.hasOwnProperty('residenceAddress') ? detailData.residenceAddress : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>登记日期：</span>
                                    <span>
                                        {detailData.hasOwnProperty('regDate') ?detailData.regDate===null?'': T.helper.dateFormat(detailData.regDate,'YYYY-MM-DD') : '---'}
                                    </span>
                                </Col>
                            </Row>
                        </Card>
                        <div className={styles.detailTitleName}>
                            活动信息
                        </div>
                        <Card
                            style={{marginBottom: 20}}
                            loading={fetchStatus}
                        >
                            <Row className={styles.detailTitle}>
                                <Col span={6}>
                                    <span>离开（经过）湖北日期：</span>
                                    <span>
                                        {detailData.hasOwnProperty('dateLeftPass') ? detailData.dateLeftPass===null?'': T.helper.dateFormat(detailData.dateLeftPass,'YYYY-MM-DD') : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>离开湖北地点：</span>
                                    <span>
                                        {detailData.hasOwnProperty('leftPlace') ? detailData.leftPlace===null?'':detailData.leftPlace : '---'}
                                    </span>
                                </Col>
                                <Col span={6} className={styles.detailBtns}>
                                    <span>到达本地日期：</span>
                                    <span>
                                        {detailData.hasOwnProperty('dateArrive') ? detailData.dateArrive===null?'':T.helper.dateFormat(detailData.dateArrive,'YYYY-MM-DD') : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>来鲁方式：</span>
                                    <span>
                                        {detailData.hasOwnProperty('typeArrvie') ? detailData.typeArrvie : '---'}
                                    </span>
                                </Col>
                            </Row>
                            <Row className={styles.detailTitle}>
                                <Col span={6}>
                                    <span>是否从外省反乡：</span>
                                    <span>
                                        {detailData.hasOwnProperty('isFromOtherProvince') ? detailData.isFromOtherProvince : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>离开山东时间：</span>
                                    <span>
                                        {detailData.hasOwnProperty('timeLeftShangdong') ? detailData.timeLeftShangdong===null?'':T.helper.dateFormat(detailData.timeLeftShangdong,'YYYY-MM-DD') : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>行程详情：</span>
                                    <span>
                                        {detailData.hasOwnProperty('routeDetail') ? detailData.routeDetail : '---'}
                                    </span>
                                </Col>
                            </Row>
                        </Card>
                        <div className={styles.detailTitleName}>
                            防控信息
                        </div>
                        <Card
                            style={{marginBottom: 20}}
                            loading={fetchStatus}
                        >
                            <Row className={styles.detailTitle}>
                                <Col span={6}>
                                    <span>体温：</span>
                                    <span>
                                        {detailData.hasOwnProperty('temperature') ? detailData.temperature : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>有无咳嗽、胸闷等症状：</span>
                                    <span>
                                        {detailData.hasOwnProperty('isSymptom') ? detailData.isSymptom : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>防控措施：</span>
                                    <span>
                                        {detailData.hasOwnProperty('controlMeasure') ? detailData.controlMeasure : '---'}
                                    </span>
                                </Col>
                                <Col span={6} className={styles.detailBtns}>
                                    <span>是否密切接触者：</span>
                                    <span>
                                        {detailData.hasOwnProperty('isCloser') ? detailData.isCloser : '---'}
                                    </span>
                                </Col>

                            </Row>

                            <Row className={styles.detailTitle}>
                                <Col span={6}>
                                    <span>与确诊（疑似）病例关系</span>
                                    <span>
                                        {detailData.hasOwnProperty('relationSuspector') ? detailData.relationSuspector : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>确诊（疑似）病例人员姓名：</span>
                                    <span>
                                        {detailData.hasOwnProperty('suspectorName') ? detailData.suspectorName : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>确诊（疑似）病例身份证号：</span>
                                    <span>
                                        {detailData.hasOwnProperty('suspectorIdcard') ? detailData.suspectorIdcard : '---'}
                                    </span>
                                </Col>
                                <Col span={6} className={styles.detailBtns}>
                                    <span>批次号：</span>
                                    <span>
                                        {detailData.hasOwnProperty('batchNumber') ? detailData.batchNumber : '---'}
                                    </span>
                                </Col>
                            </Row>

                            <Row className={styles.detailTitle}>
                                <Col span={6}>
                                    <span>解除隔离日期：</span>
                                    <span>
                                        {detailData.hasOwnProperty('dateRelease') ? detailData.dateRelease===null?'':T.helper.dateFormat(detailData.dateRelease,'YYYY-MM-DD') : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>接触日期：</span>
                                    <span>
                                        {detailData.hasOwnProperty('touchDate') ? detailData.touchDate===null?'':T.helper.dateFormat(detailData.touchDate,'YYYY-MM-DD') : '---'}
                                    </span>
                                </Col>
                                <Col span={6} className={styles.detailBtns}>
                                    <span>转为疑似日期：</span>
                                    <span>
                                        {detailData.hasOwnProperty('dateConvertSuspect') ? detailData.dateConvertSuspect===null?'':T.helper.dateFormat(detailData.dateConvertSuspect,'YYYY-MM-DD') : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>转为确诊日期：</span>
                                    <span>
                                        {detailData.hasOwnProperty('dateConvertConfirm') ? detailData.dateConvertConfirm===null?'':T.helper.dateFormat(detailData.dateConvertConfirm,'YYYY-MM-DD') : '---'}
                                    </span>
                                </Col>
                            </Row>
                        </Card>
                        <div className={styles.detailTitleName}>
                            监督人员信息
                        </div>
                        <Card
                            style={{marginBottom: 20}}
                            loading={fetchStatus}
                        >
                            <Row className={styles.detailTitle}>
                                <Col span={6}>
                                    <span>社区防控联系人：</span>
                                    <span>
                                        {detailData.hasOwnProperty('controlPerson') ? detailData.controlPerson : '---'}
                                    </span>
                                </Col>
                                <Col span={6} className={styles.detailBtns}>
                                    <span>社区防控联系人电话：</span>
                                    <span>
                                        {detailData.hasOwnProperty('controlTelephone') ? detailData.controlTelephone : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>责任民警：</span>
                                    <span>
                                        {detailData.hasOwnProperty('dutyPolice') ? detailData.dutyPolice : '---'}
                                    </span>
                                </Col>
                                <Col span={6}>
                                    <span>责任民警电话：</span>
                                    <span>
                                        {detailData.hasOwnProperty('dutyPoliceTelephone') ? detailData.dutyPoliceTelephone : '---'}
                                    </span>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </div>
            </PageHeaderWrapper>
        );
    }
}

export default PersonnelStatisticsDetail;
