import {Component} from 'react';
import {Toast} from 'antd-mobile';

export default class Index extends Component {
    constructor(...props) {
        super(...props);
        Toast.loading('页面加载中', 60 * 60);
    }

    componentWillUnmount() {
        Toast.hide();
    }

    render() {
        return null;
    }
}
