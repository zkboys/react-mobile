import React from 'react';
import {Route} from 'react-router-dom';
import {isLogin, toLogin} from 'src/commons';

export default class AuthRoute extends React.Component {
    render() {
        const {
            component: Component,
            noAuth,
            ...rest
        } = this.props;

        return (
            <Route
                {...rest}
                render={props => {
                    if ((noAuth || isLogin())) {
                        return <Component {...props}/>;
                    } else {
                        // 直接跳转登录，不显示401页面
                        return toLogin();
                    }
                }}
            />
        );
    }
}
