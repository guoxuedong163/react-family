import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from 'actions/userinfo';

class UserInfo extends Component {
    render() {
        const { userInfo, isLoading, erroMsg } = this.props.userInfo
        return (
            <div>
                {
                    isLoading ? '请求中。。。。。。' : (
                        erroMsg ? erroMsg : (
                            <div>
                                <p>用户信息：</p>
                                <p>姓名：{userInfo.name.a}</p>
                                <p>介绍：{userInfo.intro}</p>
                            </div>
                        )
                    )
                }
                <button onClick={() => { this.props.getUserInfo() }}>请求信息</button>
            </div>
        )
    }
}

export default connect((state) => ({ userInfo: state.userInfo }), { getUserInfo })(UserInfo)