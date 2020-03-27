import React from 'react';
import AppRouter from './router/AppRouter';
import {connect} from './models';
import moment from 'moment';
import 'moment/locale/zh-cn';
// 设置语言
moment.locale('zh-cn');

@connect()
export default class App extends React.Component {
    render() {
        return (
            <AppRouter/>
        );
    }
}
