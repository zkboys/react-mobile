import {Toast} from 'antd-mobile';

export default function handleSuccess({successTip}) {
    if (!successTip) return;

    Toast.success(successTip, 2);
}
