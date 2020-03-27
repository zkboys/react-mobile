import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {setLoginUser, toHome} from 'src/commons';
import config from 'src/commons/config-hoc';
import './style.less';

@config({
    path: '/login',
    ajax: true,
    noFrame: true,
    noAuth: true,
})
export default class extends Component {
    state = {
        loading: false,
        message: '',
        isMount: false,
    };

    componentDidMount() {
    }

    handleSubmit = (values) => {
        if (this.state.loading) return;

        const {userName, password} = values;
        const params = {
            userName,
            password,
        };

        this.setState({loading: true, message: ''});
        this.props.ajax.post('/mock/login', params, {errorTip: false})
            .then(res => {
                const {id, name} = res;
                setLoginUser({
                    id,
                    name,
                });
                toHome();
            })
            .catch(() => this.setState({message: '用户名或密码错误！'}))
            .finally(() => this.setState({loading: false}));
    };

    render() {
        return (
            <div styleName="root" className="login-bg">
                <Helmet title="欢迎登陆"/>
                登录页面
            </div>
        );
    }
}

