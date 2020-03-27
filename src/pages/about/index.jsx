import React, {Component} from 'react';
import {Toast, Button} from 'antd-mobile';
import config from 'src/commons/config-hoc';
import './style.less';

@config({
    path: '/about',
    title: {text: '首页', icon: 'home'},
    breadcrumbs: [{key: 'home', text: '首页', icon: 'home'}],
    router: true,
})
export default class Home extends Component {

    componentDidMount() {
        Toast.success('成功了', 2);
    }

    render() {
        return <Button onClick={() => this.props.history.push('/')}>首页</Button>;
    }
}
