import React, {Component} from 'react';
import {Toast, Button} from 'antd-mobile';
import config from 'src/commons/config-hoc';
import PageContent from '../../layouts/page-content';
import './style.less';

@config({
    path: '/about',
    title: '关于',
    router: true,
})
export default class Home extends Component {

    componentDidMount() {
        Toast.success('成功了', 2);
    }

    render() {
        return (
            <PageContent>
                <Button onClick={() => this.props.history.push('/')}>首页</Button>
            </PageContent>
        );
    }
}
