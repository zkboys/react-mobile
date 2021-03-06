import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Toast} from 'antd-mobile';
import Footer from '../footer';
import {connect} from 'src/models/index';
import {Helmet} from 'react-helmet';
import './style.less';

/**
 * 页面内容 容器
 * 1. 添加统一padding、background等样式
 * 1. 自动判断是否含有FixBottom，并为之腾出空间
 * 1. 是否含有公共footer
 */
@connect(state => ({
    title: state.page.title,
    pageLoading: state.page.loading,
    pageLoadingTip: state.page.loadingTip,
}))
export default class PageContent extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        loadingTip: PropTypes.any,
        pageLoading: PropTypes.bool,
        footer: PropTypes.bool,
    };

    static defaultProps = {
        footer: false,
    };

    componentWillUnmount() {
        this.props.action.page.hideLoading();
    }

    render() {
        const {
            footer,
            loading,
            loadingTip,
            pageLoading,
            pageLoadingTip,
            children,
            action,
            className,
            title,
            ...others
        } = this.props;

        let hasFixBottom = false;
        React.Children.map(children, item => {
            if (item && item.type && item.type.__FIX_BOTTOM) hasFixBottom = true;
        }, null);

        const rootStyle = {};
        if (hasFixBottom) {
            rootStyle.marginBottom = '66px';
        }

        const isLoading = loading || pageLoading;
        const tip = loadingTip || pageLoadingTip || '加载中...';

        if (isLoading && !this.isShowLoading) {
            Toast.loading(tip, 60 * 60);
        }

        if (!isLoading) Toast.hide();

        const titleText = title?.text || title;
        const titleIsString = typeof titleText === 'string';

        return (
            <div style={rootStyle} styleName="page-content-root">
                <Helmet title={titleIsString ? titleText : ''}/>
                <div
                    className={`${className} page-content`}
                    styleName="page-content"
                    {...others}
                >
                    {children}
                </div>
                {footer ? <div styleName="footer"><Footer/></div> : null}
            </div>
        );
    }
}
