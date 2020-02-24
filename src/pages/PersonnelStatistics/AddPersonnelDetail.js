import React, {PureComponent, Fragment} from 'react';
import {connect} from 'dva';
import styles from './AddPersonnelDetail.less';
import T from './../../utils/T';
import router from 'umi/router';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import CustomBreadcrumb from '@/templates/ToolComponents/CustomBreadcrumb';

import {
    Row,
    Col,
    Card,
    Form,
    Input,
    Select,
    DatePicker,
    Button,
    Radio,
} from 'antd';

const FormItem = Form.Item;
const {Option} = Select;
const {TextArea} = Input;

/* eslint react/no-multi-comp:0 */
@connect(({addInfo, personnelStatistics, loading}) => ({
    addInfo,
    personnelStatistics,
    fetchEditStatus: loading.effects['personnelStatistics/fetchDetailInfoAction'],
}))
@Form.create()
class AddPersonnelDetail extends PureComponent {
    constructor() {
        super();
        this.state = {
            formItemLayout: {
                labelCol: {
                    xs: {span: 24},
                    sm: {span: 6},
                },
                wrapperCol: {
                    xs: {span: 24},
                    sm: {span: 16},
                    md: {span: 16},
                },
            },
            formItemHalf: {
                labelCol: {
                    xs: {span: 24},
                    sm: {span: 3},
                },
                wrapperCol: {
                    xs: {span: 24},
                    sm: {span: 19},
                    md: {span: 19},
                },
            },
            submitFormLayout: {
                wrapperCol: {
                    xs: {span: 24, offset: 0},
                    sm: {span: 24, offset: 0},
                },
            },
            baseInfoSelect: [],     //被调查人基本情况
            bodyConditionSelect: [],     //身体状况
            activities: {},
            currentInfo: {},
            member: {},
            touch: [],
            residenceTypeData:[//居住地类型
                {
                    name:'自家'
                },
                {
                    name:'亲朋家'
                },
                {
                    name:'单位'
                },
                {
                    name:'旅馆和宿舍'
                },
                {
                    name:'其他'
                },
            ],
            typeArrvieData:[//居住地类型
                {
                    name:'火车'
                },
                {
                    name:'民航'
                },
                {
                    name:'长途汽车'
                },
                {
                    name:'自驾车'
                },
                {
                    name:'其他'
                },
            ],
            temperatureData:[
                {
                    name:'正常'
                },
                {
                    name:'发烧'
                },

            ],
            controlMeasureData:[
                {
                    name:'居家隔离'
                },
                {
                    name:'集中隔离'
                },
                {
                    name:'医院隔离'
                },
                {
                    name:'解除隔离'
                },
            ],
            infoEdit:false,
            id:0,
        }
    }

    componentDidMount() {
        const {dispatch, location} = this.props;
        let self = this;
        //验证是否刷新页面
        T.auth.returnSpecialMainPage(location, '/personnelStatistics');
        if (location.hasOwnProperty("params") && location["params"].hasOwnProperty("data")) {
            self.setState({
                infoEdit:true
            });
            new Promise((resolve, reject) => {
                dispatch({
                    type: 'personnelStatistics/fetchDetailInfoAction',
                    id: location["params"]["data"]["id"],
                    resolve,
                    reject,
                });
            }).then(response => {
                let data= response.data;
                self.setState({
                    id:T.lodash.isUndefined(data.id) ? 0 : data.id,
                });
                // console.log('1111',T.moment(new Date(data.regDate).getTime()));
                if (response.code === 0) {
                    self.props.form.setFieldsValue({
                        name: T.lodash.isUndefined(data.name) ? '' : data.name,
                        // districts: T.lodash.isUndefined(data.districts) ? '' : data.districts,
                        // city: T.lodash.isUndefined(data.city) ? '' : data.city,
                        batchNumber: T.lodash.isUndefined(data.batchNumber) ? '' : data.batchNumber,
                        controlMeasure: T.lodash.isUndefined(data.controlMeasure) ? '' : data.controlMeasure,
                        controlPerson: T.lodash.isUndefined(data.controlPerson) ? '' : data.controlPerson,
                        controlTelephone: T.lodash.isUndefined(data.controlTelephone) ? '' : data.controlTelephone,
                        dateArrive: T.lodash.isUndefined(data.dateArrive) ? '' :  data.dateArrive === null ?  null : T.moment(new Date(data.dateArrive).getTime()),
                        dateConvertConfirm: T.lodash.isUndefined(data.dateConvertConfirm) ? '' : data.dateConvertConfirm === null ?  null : T.moment(new Date(data.dateConvertConfirm).getTime()),
                        dateConvertSuspect: T.lodash.isUndefined(data.dateConvertSuspect) ? '' : data.dateConvertSuspect === null ?  null : T.moment(new Date(data.dateConvertSuspect).getTime()),
                        dateLeftPass: T.lodash.isUndefined(data.dateLeftPass) ? '' :data.dateLeftPass === null ?  null : T.moment(new Date(data.dateLeftPass).getTime()),
                        dateRelease: T.lodash.isUndefined(data.dateRelease) ? '' : data.dateRelease === null ?  null : T.moment(new Date(data.dateRelease).getTime()),
                        timeLeftShangdong: T.lodash.isUndefined(data.timeLeftShangdong) ? '' :data.timeLeftShangdong === null ?  null : T.moment(new Date(data.timeLeftShangdong).getTime()),
                        touchDate: T.lodash.isUndefined(data.touchDate) ? '' : data.touchDate === null ?  null : T.moment(new Date(data.touchDate).getTime()),
                        regDate: T.lodash.isUndefined(data.regDate) ? '' : data.regDate === null ?  null :T.moment(new Date(data.regDate).getTime()),

                        dutyPolice: T.lodash.isUndefined(data.dutyPolice) ? '' : data.dutyPolice,
                        dutyPoliceTelephone: T.lodash.isUndefined(data.dutyPoliceTelephone) ? '' : data.dutyPoliceTelephone,
                        idCard:T.lodash.isUndefined(data.idCard) ? '' : data.idCard,
                        isCloser: T.lodash.isUndefined(data.isCloser) ? '' : data.isCloser,
                        isFromOtherProvince: T.lodash.isUndefined(data.isFromOtherProvince) ? '' : data.isFromOtherProvince,
                        isSymptom: T.lodash.isUndefined(data.isSymptom) ? '' : data.isSymptom,
                        leftPlace: T.lodash.isUndefined(data.leftPlace) ? '' : data.leftPlace,
                        relationSuspector: T.lodash.isUndefined(data.relationSuspector) ? '' : data.relationSuspector,
                        residenceAddress: T.lodash.isUndefined(data.residenceAddress) ? '' : data.residenceAddress,
                        residenceType: T.lodash.isUndefined(data.residenceType) ? '' : data.residenceType,
                        routeDetail: T.lodash.isUndefined(data.routeDetail) ? '' : data.routeDetail,
                        suspectorIdcard: T.lodash.isUndefined(data.suspectorIdcard) ? '' : data.suspectorIdcard,
                        suspectorName: T.lodash.isUndefined(data.suspectorName) ? '' : data.suspectorName,
                        telephone: T.lodash.isUndefined(data.telephone) ? '' : data.telephone,
                        temperature: T.lodash.isUndefined(data.temperature) ? '' : data.temperature,
                        typeArrvie: T.lodash.isUndefined(data.typeArrvie) ? '' : data.typeArrvie,

                    });
                    // console.log('2222');
                } else {
                    T.prompt.error(response.msg);
                }
            });
        }

        //获取被调查人基本情况
        /*new Promise((resolve, reject) => {
            dispatch({
                type: 'checkRecord/fetchSelectInfoAction',
                params: {
                    type: 'BASE_INFO'
                },
                resolve,
                reject,
            });
        }).then(response => {
            if (response.code === 0) {
                self.setState({
                    baseInfoSelect: response.data
                })
            } else {
                T.prompt.error(response.msg);
            }
        });
*/
        //获取身体情况列表
       /* new Promise((resolve, reject) => {
            dispatch({
                type: 'checkRecord/fetchSelectInfoAction',
                params: {
                    type: 'BODY_CONDITION'
                },
                resolve,
                reject,
            });
        }).then(response => {
            if (response.code === 0) {
                self.setState({
                    bodyConditionSelect: response.data
                });
            } else {
                T.prompt.error(response.msg);
            }
        });*/
    }

    //提交功能
    onSubmitData = (e) => {
        let self = this;
        const {dispatch, form, addRow} = this.props;
        const {id,infoEdit} = this.state;
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                // let loginInfo = T.auth.getLoginInfo();
                // let userId = loginInfo.data.id;
                // console.log('values',values);
                let params = {
                    districts: T.lodash.isUndefined(values.districts) ? '' : values.districts,
                    name: T.lodash.isUndefined(values.name) ? '' : values.name,
                    city: T.lodash.isUndefined(values.city) ? '' : values.city,
                    batchNumber: T.lodash.isUndefined(values.batchNumber) ? '' : values.batchNumber,
                    controlMeasure: T.lodash.isUndefined(values.controlMeasure) ? '' : values.controlMeasure,
                    controlPerson: T.lodash.isUndefined(values.controlPerson) ? '' : values.controlPerson,
                    controlTelephone: T.lodash.isUndefined(values.controlTelephone) ? '' : values.controlTelephone,

                    touchDate: T.lodash.isUndefined(values.touchDate) ? '' : values.touchDate === null ?  null :T.helper.dateFormat(values.touchDate,'YYYY-MM-DD'),
                    timeLeftShangdong: T.lodash.isUndefined(values.timeLeftShangdong) ? '' :  values.timeLeftShangdong === null ?  null: T.helper.dateFormat( values.timeLeftShangdong,'YYYY-MM-DD'),
                    regDate: T.lodash.isUndefined(values.regDate) ? '' : values.regDate === null ?  null: T.helper.dateFormat(values.regDate,'YYYY-MM-DD'),
                    dateArrive: T.lodash.isUndefined(values.dateArrive) ? '' : values.dateArrive === null ?  null : T.helper.dateFormat(values.dateArrive,'YYYY-MM-DD'),
                    dateConvertConfirm: T.lodash.isUndefined(values.dateConvertConfirm) ? '' :values.dateConvertConfirm === null ?  null : T.helper.dateFormat(values.dateConvertConfirm,'YYYY-MM-DD'),
                    dateConvertSuspect: T.lodash.isUndefined(values.dateConvertSuspect) ? '' : values.dateConvertSuspect === null ?  null : T.helper.dateFormat(values.dateConvertSuspect,'YYYY-MM-DD'),
                    dateLeftPass: T.lodash.isUndefined(values.dateLeftPass) ? '' : values.dateLeftPass === null ?  null : T.helper.dateFormat(values.dateLeftPass,'YYYY-MM-DD'),
                    dateRelease: T.lodash.isUndefined(values.dateRelease) ? '' : values.dateRelease === null ?  null :  T.helper.dateFormat(values.dateRelease,'YYYY-MM-DD'),

                    dutyPolice: T.lodash.isUndefined(values.dutyPolice) ? '' : values.dutyPolice,
                    dutyPoliceTelephone: T.lodash.isUndefined(values.dutyPoliceTelephone) ? '' : values.dutyPoliceTelephone,
                    id: infoEdit ? id : 0,
                    idCard:T.lodash.isUndefined(values.idCard) ? '' : values.idCard,
                    isCloser: T.lodash.isUndefined(values.isCloser) ? '' : values.isCloser,
                    isFromOtherProvince: T.lodash.isUndefined(values.isFromOtherProvince) ? '' : values.isFromOtherProvince,
                    isSymptom: T.lodash.isUndefined(values.isSymptom) ? '' : values.isSymptom,
                    leftPlace: T.lodash.isUndefined(values.leftPlace) ? '' : values.leftPlace,
                    relationSuspector: T.lodash.isUndefined(values.relationSuspector) ? '' : values.relationSuspector,
                    residenceAddress: T.lodash.isUndefined(values.residenceAddress) ? '' : values.residenceAddress,
                    residenceType: T.lodash.isUndefined(values.residenceType) ? '' : values.residenceType,
                    routeDetail: T.lodash.isUndefined(values.routeDetail) ? '' : values.routeDetail,
                    suspectorIdcard: T.lodash.isUndefined(values.suspectorIdcard) ? '' : values.suspectorIdcard,
                    suspectorName: T.lodash.isUndefined(values.suspectorName) ? '' : values.suspectorName,
                    telephone: T.lodash.isUndefined(values.telephone) ? '' : values.telephone,
                    temperature: T.lodash.isUndefined(values.temperature) ? '' : values.temperature,
                    typeArrvie: T.lodash.isUndefined(values.typeArrvie) ? '' : values.typeArrvie,
                };
                // console.log(params);
                new Promise((resolve, reject) => {
                    dispatch({
                        type:infoEdit ? 'personnelStatistics/updateInfoAction' :'personnelStatistics/addInfoAction',
                        params,
                        resolve,
                        reject,
                    });
                }).then(response => {
                    if (response.code === 0) {
                        T.prompt.success("提交成功");
                        self.resetForm();
                        router.push({
                            pathname: '/personnelStatistics',
                        });
                    } else {
                        T.prompt.error(response.msg);
                    }
                });
            }
        })
    };

    //重置功能
    resetForm = () => {
        this.props.form.resetFields();
    };

    //渲染不同的下拉框
    renderSelect = (dataSource) => {
        return (
            dataSource.map((item,idx) => {
                return (
                    <Option key={idx} value={item.name}>
                        {item.name}
                    </Option>
                )
            })
        )
    };

    render() {
        const {
            fetchStatus,
            fetchEditStatus,
            form: {getFieldDecorator, getFieldValue},
        } = this.props;
        const {
            activities,
            currentInfo,
            member,
            touch,
            formItemLayout,
            formItemHalf,
            submitFormLayout,
            bodyConditionSelect,
            baseInfoSelect,
            residenceTypeData,
            typeArrvieData,
            temperatureData,
            controlMeasureData,
            infoEdit,
        } = this.state;
        let loginInfo = T.auth.getLoginInfo();


        const breadcrumbDetail = [
            {
                linkTo: '/personnelStatistics',
                name: '随访人员记录',
            },
            {
                name: infoEdit ?'编辑信息':'新建随访人员记录',
            },
        ];

        return (
            <PageHeaderWrapper
                // title={"编辑信息"}
                title={infoEdit ?'编辑信息':'新建随访人员记录'}
                isSpecialBreadcrumb={true}
                breadcrumbName={<CustomBreadcrumb dataSource={breadcrumbDetail}/>}
            >
                <div>
                    <div className={styles.detailItem}>
                        <Form
                            onSubmit={this.onSubmitData}
                            hideRequiredMark
                        >
                            <div className={styles.detailTitleName}>
                                基本信息
                            </div>
                            <Card
                                style={{marginBottom: 20}}
                                loading={infoEdit ? fetchEditStatus : false}
                            >
                                <Row className={styles.detailTitle}>
                                    <Col span={6} className={styles.detailBtns}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='姓名：'
                                        >
                                            {getFieldDecorator('name', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请输入姓名",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入姓名"
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='身份证号：'
                                        >
                                            {getFieldDecorator('idCard', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请输入",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入身份证号"
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='手机号：'
                                        >
                                            {getFieldDecorator('telephone', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请输入手机号",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入手机号"
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='居住地类型：'
                                        >
                                            {getFieldDecorator('residenceType', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请输入居住地类型",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <Select
                                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                                    placeholder="请选择居住地类型"
                                                >
                                                    {
                                                        this.renderSelect(residenceTypeData)
                                                    }
                                                    {/*{this.renderSelectOption(metadataManageUrlList)}*/}
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className={styles.detailTitle}>

                                    <Col span={6} className={styles.detailBtns}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='当前居住地址：'
                                        >
                                            {getFieldDecorator('residenceAddress', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请输入当前居住地址",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入当前居住地址"
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='登记日期：'
                                        >
                                            {getFieldDecorator('regDate', {

                                                }
                                            )(
                                                <DatePicker />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                            <div className={styles.detailTitleName}>
                                活动信息
                            </div>
                            <Card
                                style={{marginBottom: 20}}
                                // loading={fetchStatus}
                                loading={infoEdit ? fetchEditStatus : false}
                            >
                                <Row className={styles.detailTitle}>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='离开（经过）湖北日期：'
                                        >
                                            {getFieldDecorator('dateLeftPass', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "离开（经过）湖北日期",
                                                        },
                                                    ],
                                                }
                                            )(
                                                < DatePicker />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6} className={styles.detailBtns}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='离开湖北地点：'
                                        >
                                            {getFieldDecorator('leftPlace', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请输入离开湖北地点",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入离开湖北地点"
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='到达本地日期：'
                                        >
                                            {getFieldDecorator('dateArrive', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请选择到达本地日期",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <DatePicker />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='来鲁方式'
                                        >
                                            {getFieldDecorator('typeArrvie', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请选择来鲁方式",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <Select
                                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                                    placeholder="请选择来鲁方式"
                                                >
                                                    {
                                                        this.renderSelect(typeArrvieData)
                                                    }
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className={styles.detailTitle}>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='是否从外省反乡'
                                        >
                                            {getFieldDecorator('isFromOtherProvince', {}
                                            )(
                                                <Radio.Group>
                                                    <Radio value={"是"}>是</Radio>
                                                    <Radio value={"否"}>否</Radio>
                                                </Radio.Group>
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='离开山东时间：'
                                        >
                                            {getFieldDecorator('timeLeftShangdong', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请选择离开山东时间",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <DatePicker />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            {...formItemHalf}
                                            label='行程详情'
                                        >
                                            {getFieldDecorator('routeDetail', {
                                                    rules: [
                                                        {
                                                            required: false,
                                                            message: "请输入行程详情",
                                                        },
                                                    ],
                                                }
                                            )(
                                                <TextArea
                                                    placeholder="请输入行程详情"
                                                    autoSize={{minRows: 1, maxRows: 6}}
                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                            <div className={styles.detailTitleName}>
                                防控信息
                            </div>
                            <Card
                                style={{marginBottom: 20}}
                                // loading={fetchStatus}
                                loading={infoEdit ? fetchEditStatus : false}

                            >
                                <Row className={styles.detailTitle}>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='体温：'
                                        >
                                            {getFieldDecorator('temperature', {
                                                    // rules: [
                                                    //         {
                                                    //             required: false,
                                                    //             message: "请选择是否与确诊、疑似病例密切接触过",
                                                    //         },
                                                    //     ],
                                                }
                                            )(
                                                <Select
                                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                                    placeholder="请选择体温"
                                                >
                                                    {
                                                        this.renderSelect(temperatureData)
                                                    }
                                                    {/*{this.renderSelectOption(metadataManageUrlList)}*/}
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='有无咳嗽、胸闷等症状：'
                                        >
                                            {getFieldDecorator('isSymptom', {}
                                            )(
                                                <Radio.Group>
                                                    <Radio value={"有"}>有</Radio>
                                                    <Radio value={"无"}>无</Radio>
                                                </Radio.Group>
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='防控措施：'
                                        >
                                            {getFieldDecorator('controlMeasure', {
                                                }
                                            )(
                                                <Select
                                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                                    placeholder="请选择防控措施"
                                                >
                                                    {
                                                        this.renderSelect(controlMeasureData)
                                                    }
                                                    {/*{this.renderSelectOption(metadataManageUrlList)}*/}
                                                </Select>
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='是否密切接触者：'
                                        >
                                            {getFieldDecorator('isCloser', {}
                                            )(
                                                <Radio.Group>
                                                    <Radio value={"是"}>是</Radio>
                                                    <Radio value={"否"}>否</Radio>
                                                </Radio.Group>
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className={styles.detailTitle}>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='与确诊（疑似）病例关系：'
                                        >
                                            {getFieldDecorator('relationSuspector', {
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="与确诊（疑似）病例关系"

                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='确诊（疑似）病例人员姓名：'
                                        >
                                            {getFieldDecorator('suspectorName', {
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入确诊（疑似）病例人员姓名"

                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='确诊（疑似）病例身份证号：'
                                        >
                                            {getFieldDecorator('suspectorIdcard', {
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入确诊（疑似）病例身份证号："

                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='批次号：'
                                        >
                                            {getFieldDecorator('batchNumber', {
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入批次号："

                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row className={styles.detailTitle}>
                                    <Col span={6} className={styles.detailBtns}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='解除隔离日期：'
                                        >
                                            {getFieldDecorator('dateRelease', {
                                                }
                                            )(
                                                <DatePicker />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='接触日期：'
                                        >
                                            {getFieldDecorator('touchDate', {
                                                }
                                            )(
                                                <DatePicker />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='转为疑似日期：'
                                        >
                                            {getFieldDecorator('dateConvertSuspect', {
                                                }
                                            )(
                                                <DatePicker />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='转为确诊日期：'
                                        >
                                            {getFieldDecorator('dateConvertConfirm', {
                                                }
                                            )(
                                                <DatePicker />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                            <div className={styles.detailTitleName}>
                                监督人员信息
                            </div>
                            <Card
                                style={{marginBottom: 20}}
                                // loading={fetchStatus}
                                loading={infoEdit ? fetchEditStatus : false}

                            >
                                <Row className={styles.detailTitle}>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='社区防控联系人：'
                                        >
                                            {getFieldDecorator('controlPerson', {
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入社区防控联系人"

                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6} className={styles.detailBtns}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='社区防控联系人电话：'
                                        >
                                            {getFieldDecorator('controlTelephone', {
                                                    // initialValue:'n'
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入社区防控联系人"

                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='责任民警：'
                                        >
                                            {getFieldDecorator('dutyPolice', {
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入责任民警"

                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item
                                            {...formItemLayout}
                                            label='责任民警电话：'
                                        >
                                            {getFieldDecorator('dutyPoliceTelephone', {
                                                }
                                            )(
                                                <Input
                                                    autoComplete="off"
                                                    placeholder="请输入责任民警电话"

                                                />
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                            <FormItem {...submitFormLayout} style={{marginTop: 32, paddingBottom: 24,textAlign:'center'}}>
                                <Button
                                    style={{marginLeft: 16}}
                                    type="primary"
                                    htmlType="submit"
                                    // loading={savingStatus}
                                >
                                    保存
                                </Button>
                                <Button
                                    style={{marginLeft: 8}}
                                    type="primary"
                                    onClick={this.resetForm}
                                >
                                    清空
                                </Button>
                            </FormItem>
                        </Form>

                    </div>
                </div>
            </PageHeaderWrapper>
        );
    }
}

export default AddPersonnelDetail;
