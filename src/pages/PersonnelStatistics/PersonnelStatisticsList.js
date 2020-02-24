// ResourceList
import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {formatMessage, FormattedMessage} from 'umi-plugin-react/locale';
import T from './../../utils/T';
import router from 'umi/router';
import {
    EnumQuickRegisterParams,
} from './../../constants/dataSync/EnumSyncConfigModal';
import {EnumDataSyncPageInfo} from './../../constants/EnumPageInfo';
import {EnumDataSourceStatus} from './../../constants/dataSync/EnumSyncCommon';
import {
    Row,
    Col,
    Card,
    Form,
    Input,
    Select,
    Icon,
    Button,
    Tooltip,
    InputNumber,
    DatePicker,
    Radio,
    Tree,
    Spin,
    Table,
    Divider,
    Popconfirm,
    TreeSelect,
    Collapse,
} from 'antd';

const {TreeNode, DirectoryTree} = Tree;
const {RangePicker} = DatePicker;
const FormItem = Form.Item;
const {TextArea} = Input;
const {Option} = Select;
const {Panel} = Collapse;

import styles from './PersonnelStatisticsList.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper'; // @ 表示相对于源文件根目录


//数据分发页面
/* eslint react/no-multi-comp:0 */
@connect(({personnelStatistics, loading}) => ({
    personnelStatistics,
    // fetchTreeStatus: loading.effects['personnelStatistics/getDataResourceTreeAction'],
    fetchCheckRecordListStatus: loading.effects['personnelStatistics/fetchCheckRecordListAction'],
}))
// class CheckRecordList
@Form.create()
class PersonnelStatisticsList extends PureComponent {

    state = {
        currentPage: EnumDataSyncPageInfo.defaultPage,//分页
        selectRows: [], //选择的数据列
        selectedKey: 'GA',//树节点默认选中的值
        selectedArea: '烟台市',//树节点默认选中的地区名字，用来后台获取参数
        baseInfoSelect: [],     //被调查人基本情况
        bodyConditionSelect: [],     //身体状况
        total: 0,
        members: [],
        fakeData: {
            "total": 11,
            "pages": null,
            "members": [
                {
                    "id": 2456,
                    "area": "莱阳市",
                    "name": "柳爱玲",
                    "address": "古柳街道柳沟村",
                    "idCard": "370682198711291121",
                    "phoneNum": "13361324284",
                    "age": 34,
                    "gender": "女",
                    "nativePlace": "山东莱阳",
                    "baseInfo": "外地来烟",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 1049,
                    "fillUserName": "梁帅帅"
                },
                {
                    "id": 2455,
                    "area": "莱阳市",
                    "name": "柳爱玲",
                    "address": "古柳街道柳沟村",
                    "idCard": "370682198711291121",
                    "phoneNum": "13361324284",
                    "age": 34,
                    "gender": "女",
                    "nativePlace": "山东莱阳",
                    "baseInfo": "外地来烟",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 1049,
                    "fillUserName": "梁帅帅"
                },
                {
                    "id": 2454,
                    "area": "莱阳市",
                    "name": "陈国宏",
                    "address": "山东省莱阳市城厢街道办事处盛世广场",
                    "idCard": "532401197507052017",
                    "phoneNum": "15106588986",
                    "age": 45,
                    "gender": "男",
                    "nativePlace": "云南省玉溪市",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 366,
                    "fillUserName": "王骏"
                },
                {
                    "id": 2453,
                    "area": "莱阳市",
                    "name": "董常云",
                    "address": "莱阳市龙旺庄街道田格庄村",
                    "idCard": "370682198808153526",
                    "phoneNum": "13553129100",
                    "age": 32,
                    "gender": "男",
                    "nativePlace": "",
                    "baseInfo": "外地来烟",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 1094,
                    "fillUserName": "崔雪梅"
                },
                {
                    "id": 2452,
                    "area": "莱州市",
                    "name": "周艳磊",
                    "address": "莱州市前北流村",
                    "idCard": "370625197607210027",
                    "phoneNum": "13953588225",
                    "age": 44,
                    "gender": "女",
                    "nativePlace": "",
                    "baseInfo": "已被居家隔离",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 1091,
                    "fillUserName": "宋琳"
                },
                {
                    "id": 2451,
                    "area": "海阳市",
                    "name": "辛德泽",
                    "address": "大辛家",
                    "idCard": "370629195308050672",
                    "phoneNum": "3682200",
                    "age": null,
                    "gender": "男",
                    "nativePlace": "",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:34",
                    "fillUserId": 848,
                    "fillUserName": "辛浩"
                },
                {
                    "id": 2450,
                    "area": "龙口市",
                    "name": "李腾",
                    "address": "龙口市针织厂小区",
                    "idCard": "370681199810062218",
                    "phoneNum": "17852357218",
                    "age": 23,
                    "gender": "男",
                    "nativePlace": "山东省烟台市龙口市",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:33",
                    "fillUserId": 1093,
                    "fillUserName": "李腾"
                },
                {
                    "id": 2449,
                    "area": "莱州市",
                    "name": "石潇丹",
                    "address": "莱州市永安街道花园北流082号",
                    "idCard": "370683198905242244",
                    "phoneNum": "15376590967",
                    "age": 31,
                    "gender": "女",
                    "nativePlace": "莱州市永安街道花园北流082号",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:33",
                    "fillUserId": 405,
                    "fillUserName": "张莲"
                },
                {
                    "id": 2448,
                    "area": "栖霞市",
                    "name": "路亚楠",
                    "address": "烟台市芝罘区信达小区",
                    "idCard": "370686199211138227",
                    "phoneNum": "15166862381",
                    "age": 28,
                    "gender": "女",
                    "nativePlace": "山东省栖霞市松山街道北路家沟村",
                    "baseInfo": "正常",
                    "createTime": "2020-02-10 17:33",
                    "fillUserId": 1096,
                    "fillUserName": "路亚楠"
                },
                {
                    "id": 2447,
                    "area": "莱州市",
                    "name": "孙修",
                    "address": "莱州市安邦名人家园1号楼3单元1301室",
                    "idCard": "371323198905078411",
                    "phoneNum": "18364458532",
                    "age": 31,
                    "gender": "男",
                    "nativePlace": "临沂沂水",
                    "baseInfo": "外出返烟",
                    "createTime": "2020-02-10 17:33",
                    "fillUserId": 406,
                    "fillUserName": "潘羽敏"
                }
            ],
            "activities": null,
            "touchs": null,
            "currnets": null
        },
        tableData: []
    };

    componentDidMount() {
        const {dispatch} = this.props;
        let self = this;

        //获取被调查人基本情况
        /* new Promise((resolve, reject) => {
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
                 response.data.unshift({
                     name: "全部",
                     value: "全部"
                 });
                 self.setState({
                     baseInfoSelect: response.data
                 })
             } else {
                 T.prompt.error(response.msg);
             }
         });*/

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
                 response.data.unshift({
                     name: "全部",
                     value: "全部"
                 });
                 self.setState({
                     bodyConditionSelect: response.data
                 });
             } else {
                 T.prompt.error(response.msg);
             }
         });*/
        this.fetchDataList();
    }

    //获取当前页数数据
    fetchDataList = () => {
        const {dispatch, form, personnelStatistics} = this.props;
        const {currentPage, selectedKey, treeData, selectedArea} = this.state;
        let self = this;

        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //地区分类
                // let loginInfo = T.auth.getLoginInfo();
                console.log(values,'values');
                let params = {
                    current: currentPage,
                    size: EnumDataSyncPageInfo.defaultPageSize,
                    startTime: T.lodash.isUndefined(values.startDate) ? '' : T.helper.dateFormat(values.startDate, 'YYYY-MM-DD'),      //开始时间
                    endTime: T.lodash.isUndefined(values.endDate) ? '' : T.helper.dateFormat(values.endDate, 'YYYY-MM-DD'),        //结束时间
                    // area: T.auth.isAdmin() ? selectedArea === "烟台市" ? '' : selectedArea : loginInfo.data.area,           //县市区(烟台市传空)
                    name: T.lodash.isUndefined(values.person) ? '' : values.person,           //被调查人姓名
                    idCard: T.lodash.isUndefined(values.idCard) ? '' : values.idCard,
                    isSymptom: T.lodash.isUndefined(values.isSymptom) ? '' : values.isSymptom,
                    isCloser: T.lodash.isUndefined(values.isCloser) ? '' : values.isCloser,
                    dutyPolice: T.lodash.isUndefined(values.dutyPolice) ? '' : values.dutyPolice,
                    // fillUserId: loginInfo.data.static_auth === 0 ? loginInfo.data.id : ''   //摸排人id
                };
                new Promise((resolve, reject) => {
                    dispatch({
                        type: 'personnelStatistics/fetchCheckRecordListAction',
                        params,
                        resolve,
                        reject,
                    });
                }).then(response => {
                    if (response.code === 0) {
                        const {total, list} = response.data;
                        let endData = list.map((val, idx) => {
                            return {
                                ...val,
                                key: (currentPage - 1) * 10 + idx + 1,
                                index: (currentPage - 1) * 10 + idx + 1,
                            }
                        });
                        self.setState({
                            total,
                            tableData: endData,
                        })
                    } else {
                        T.prompt.error(response.msg);
                    }
                });
            }
        });

    };

    //重置表单
    resetDataSource = () => {
        this.props.form.resetFields();
        this.fetchDataList();
    };


    //查询
    searchDataSource = (e) => {
        const {dispatch, form} = this.props;
        e.preventDefault();
        this.setState({
            currentPage: EnumDataSyncPageInfo.defaultPage,
        }, () => {
            this.fetchDataList();
        });
        // this.fetchDataList();
    };

    //页码变换
    pageChange = page => {
        this.setState({
            currentPage: page,
        }, () => {
            this.fetchDataList();
        });
    };

    //导出
    exportData = () => {

    };

    //查看详情
    showMetadataManage = (e, key) => {
        router.push({
            pathname: '/personnelStatistics/showDetail',
            params: {
                isRouterPush: true,
                data: key
            },
        });
    };
    //编辑详情
    editMetadataManage = (e, key) => {
        // /addInfo
        router.push({
            pathname: '/personnelStatistics/addPersonnelDetail',
            params: {
                isRouterPush: true,
                data: key
            },
        });

    };

    //新增功能
    addInfoBtn = () => {
        router.push({
            pathname: '/personnelStatistics/addPersonnelDetail',
            params: {
                isRouterPush: true,
            },
        });
    };
    //删除功能
    removeData = (id) => {
        const {dispatch} = this.props;
        let self = this;
        new Promise((resolve, reject) => {
            dispatch({
                type: 'personnelStatistics/deleteInfoAction',
                id,
                resolve,
                reject,
            });
        }).then(response => {
            if (response.code === 0) {
                T.prompt.success("删除成功");
                self.fetchDataList();
            } else {
                T.prompt.error(response.msg);
            }
        })
    };


    render() {
        const {
            fetchTreeStatus,
            fetchCheckRecordListStatus,
            savingStatus,
            testStatus,
            metadataManage,
            form: {getFieldDecorator, getFieldValue},
        } = this.props;
        // const {dataResourceLists, dataResourceTypeTreeList, dataSourceTypeTreeOldData} = metadataManage;
        const {
            treeData,
            members,
            tableData,
            total,
            selectedArea,
            currentPage,
            selectedKey,
            bodyConditionSelect,
            baseInfoSelect
        } = this.state;

        const columns = [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '证件号码',
                dataIndex: 'idCard',
                key: 'idCard',
            },
            {
                title: '手机号',
                dataIndex: 'telephone',
                key: 'telephone',
            },

            {
                title: '到达本市日期',
                dataIndex: 'dateArrive',
                key: 'dateArrive',
                render: text => <span >{text === null ? '':T.helper.dateFormat(text,'YYYY-MM-DD')}</span>
            },
            {
                title: '来鲁方式',
                dataIndex: 'typeArrvie',
                key: 'typeArrvie',
            },
            {
                title: '是否从外省返乡',
                dataIndex: 'isFromOtherProvince',
                key: 'isFromOtherProvince',
            },
            {
                title: '有无咳嗽、胸闷等症状',
                dataIndex: 'isSymptom',
                key: 'isSymptom',
            },
            {
                title: '责任民警',
                dataIndex: 'dutyPolice',
                key: 'dutyPolice',
            },
            {
                title: '是否密切接触者',
                dataIndex: 'isCloser',
                key: 'isCloser',
            },
            {
                title: '登记日期',
                dataIndex: 'regDate',
                key: 'regDate',
                render: text => <span >{text === null ? '': T.helper.dateFormat(text,'YYYY-MM-DD')}</span>
            },
            {
                title: '操作',
                key: 'action',
                // width: '15%',
                render: (text, record) => {
                    return (
                        <span>
                            <a onClick={e => this.editMetadataManage(e, record)}>编辑</a>
                            <Divider type="vertical"/>
                            <a onClick={e => this.showMetadataManage(e, record)}>查看</a>
                            <Divider type="vertical"/>
                            <Popconfirm title="是否要删除此行？" onConfirm={() => this.removeData(record.id)}>
                                <a>删除</a>
                            </Popconfirm>
                        </span>
                    );
                },
            }
        ];
        const rowSelection = {
            //多选所选择的key值
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectRows: selectedRows
                })
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <PageHeaderWrapper
                title="随访人员记录"
                isSpecialBreadcrumb={true}
            >
                <Row gutter={24}>
                    {/*<Col xl={T.auth.isAdmin() ? 19: 24} lg={T.auth.isAdmin() ? 19: 24} md={T.auth.isAdmin() ? 19: 24} sm={24} xs={24} className={styles.dataSourceTableList}>*/}
                    <Col xl={24} lg={24} md={24} sm={24} xs={24} className={styles.dataSourceTableList}>
                        <Form layout="inline" onSubmit={this.searchDataSource}>
                            <Row className={`${styles.dataSourceTitle} ${styles.tableListForms}`}
                                 style={{marginBottom: 10}}>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label='姓名'
                                    >
                                        {getFieldDecorator('person', {})(
                                            <Input
                                                autoComplete="off"
                                                placeholder='姓名'
                                            />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label='身份证号'
                                    >
                                        {getFieldDecorator('idCard', {})(
                                            <Input
                                                autoComplete="off"
                                                placeholder='身份证号'
                                            />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24} style={{textAlign: 'left'}}>
                                    <Form.Item
                                        label='有无咳嗽、胸闷等症状'
                                    >
                                        {getFieldDecorator('isSymptom', {
                                            // initialValue: "否",
                                        })(
                                            <Radio.Group onChange={this.onChange}>
                                                <Radio value={"有"}>有</Radio>
                                                <Radio value={"无"}>无</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24} style={{textAlign: 'left'}}>
                                    <Form.Item
                                        label='是否密切接触者'
                                    >
                                        {getFieldDecorator('isCloser', {
                                            // initialValue: "否",
                                        })(
                                            <Radio.Group onChange={this.onChange}>
                                                <Radio value={"是"}>是</Radio>
                                                <Radio value={"否"}>否</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row className={`${styles.dataSourceTitle} ${styles.tableListForms}`}
                                 style={{marginBottom: 10}}>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label='开始时间'
                                    >
                                        {getFieldDecorator('startDate', {
                                            // rules: [{required: true, message: '请选择结束时间！'}],
                                            // initialValue: T.moment(new Date().getTime()),
                                        })(
                                            <DatePicker style={{width: '100%'}}/>
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label='结束时间'
                                    >
                                        {getFieldDecorator('endDate', {
                                            // rules: [{required: true, message: '请选择结束时间！'}],
                                            // initialValue: T.moment(new Date().getTime()),
                                        })(
                                            <DatePicker style={{width: '100%'}}/>
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                    <Form.Item
                                        label='责任民警'
                                    >
                                        {getFieldDecorator('dutyPolice', {})(
                                            <Input
                                                autoComplete="off"
                                                placeholder='请输入责任民警'
                                            />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col xl={6} lg={8} md={8} sm={8} xs={24} style={{textAlign: 'left'}}>
                                    <Form.Item className={styles.searchBtnWrapper}>
                                        <Button htmlType="submit" style={{marginRight: 10}}>
                                            查询
                                        </Button>
                                        <Button onClick={this.resetDataSource} type="primary" style={{marginRight: 10}}>
                                            重置
                                        </Button>
                                        {/*<Button onClick={this.exportData} type="primary">*/}
                                            {/*导出*/}
                                        {/*</Button>*/}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                        <Row className={`${styles.dataSourceTitle} ${styles.tableListForms}`}
                             style={{marginBottom: 10}}>
                            <Button onClick={this.addInfoBtn} type="primary">
                                新增
                            </Button>
                        </Row>
                        <Row className={`${styles.dataSourceTitle} ${styles.tableListForms}`}
                             style={{marginBottom: 10}}>
                            检索结果：{total}
                        </Row>

                        <Row>
                            <Card bordered={false}>
                                <Table
                                    columns={columns}
                                    // dataSource={members}
                                    dataSource={tableData}
                                    rowSelection={rowSelection}
                                    loading={fetchCheckRecordListStatus}
                                    pagination={{
                                        current: currentPage,
                                        onChange: this.pageChange,
                                        pageSize: EnumDataSyncPageInfo.defaultPageSize,
                                        total: Number(total) + 1,
                                    }}
                                    // rowClassName={record => (record.editable ? styles.editable : '')}
                                />
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </PageHeaderWrapper>
        );
    }
}

export default PersonnelStatisticsList;
