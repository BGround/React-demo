import React from 'react';
import PropTypes from 'prop-types';
import '../static/iconfont.css';
import './index.css'

const tabbarArr = [
    {
        img: 'icon-home',
        text: '首页'
    },
    {
        img: 'icon-fenlei',
        text: '分类'
    },
    {
        img: 'icon-gouwuche',
        text: '购物车'
    },
    {
        img: 'icon-wode',
        text: '用户'
    },
];

class Tabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    itemOnchange = (i) => {
        this.setState({
            index: i
        })
    };

    render() {
        return (
            <div className='tabbar'>
                <div className = 'tabbar-content'>
                    {
                        tabbarArr.map((v,i)=> (
                            <div key={i} className={'tabbar-item ' + (this.state.index === i ? 'active' : '')}
                            onClick={() => this.itemOnchange(i)}>
                                <div className = {'iconfont ' + v.img}></div>
                                <div>{v.text}</div>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}


export default Tabbar;
