import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { autorun } from 'mobx'
import './styles/appleBasket.scss'
import './styles/appleItem.scss'
@inject('store')
@observer
class AppleItem extends Component {
  render() {
    let { apple } = this.props;
    const { eatApplesHandle } = this.props.store
    return (
      <div className="appleItem">
        <div className="apple">
          <img src={require('./images/apple.png')} alt="" />
        </div>
        <div className="info">
          <div className="name">红苹果 - {apple.id + 1}号</div>
          <div className="weight">{apple.weight}克</div>
        </div>
        <div className="btn-div" >
          <button onClick={() => eatApplesHandle(apple.id)} > 吃掉 </button>
        </div>
      </div>
    );
  }
}
@inject('store')
@observer
class Apple extends Component {
  getAppleItem() {
    let data = [];

    this.props.store.apples.forEach(apple => {
      if (!apple.isEaten) {
        data.push(
          <AppleItem
            eatApple={this.props.store.eatApple}
            apple={apple}
            key={apple.id}
          />
        );
      }
    });
    // if (!data.length) return <div>its empth</div>;
    return data;
  }
  render() {
    console.log('执行了嘛')
    console.log(this.props)
    // console.log(this.props.store.getApples())
    const { getApplesLenght, getApplesWeight, getEatApplesLenght, getEatApplesWeight } = this.props.store
    return (
      <div className="appleBusket">
        <div className="title">苹果篮子</div>

        <div className="stats">
          <div className="section">
            <div className="head">当前</div>
            <div className="content">
              {getApplesLenght()}个苹果，{getApplesWeight()}克
            </div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">
              {getEatApplesLenght()}个苹果，{getEatApplesWeight()}克
            </div>
          </div>
        </div>

        <div className="appleList">
          {this.getAppleItem()}
        </div>

        <div className="btn-div">
          <button >摘苹果</button>
        </div>
      </div>
    );
  }
}

export default Apple;