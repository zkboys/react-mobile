import React, {Component} from 'react';
import {Toast, Button} from 'antd-mobile';
import config from 'src/commons/config-hoc';
import PageContent from '../../layouts/page-content';
import './style.less';

@config({
    path: '/',
    title: '首页',
})
export default class Home extends Component {

    state = {
        loading: false,
    };

    componentDidMount() {
        Toast.success('成功了', 2);

        this.setState({loading: true});
        setTimeout(() => this.setState({loading: false}), 2000);
    }

    render() {
        const {loading} = this.state;
        return (
            <PageContent loading={loading}>
                <Button type="primary" onClick={() => this.props.history.push('/about')}>关于</Button>
            </PageContent>
        );
    }
}
