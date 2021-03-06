import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { Icon, Tooltip, Modal, message } from "antd"
import Code from "./code"
import "./index.scss"

const { confirm } = Modal

class Head extends Component { 
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  showDeleteConfirm = () => {
    confirm({
      title: '您确定要清空主操作区吗?',
      content: '点击确认后主操作区将清空，数据无法恢复！',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
        const stage = document.getElementById('stage')
        localStorage.removeItem("tree")
        ReactDOM.unmountComponentAtNode(stage)
        message.success("清空成功！")
      },
      onCancel() {
        console.log('Cancel');
        message.warning("您取消了清空操作！")
      },
    });
  }

  render(){
    return(
      <div className="head">
        <div className="logo">
          <a href="https://github.com/winyh/astx" target="_blank" rel="noopener noreferrer">ASTX</a>
        </div>

        <div className="action">
          <div className="item">
            <Tooltip title="撤销">
              <Icon type="arrow-left" />
            </Tooltip>
          </div>

          <div className="item">
            <Tooltip  title="恢复">
              <Icon type="arrow-right" />
            </Tooltip>
          </div>

          <div className="item" onClick={this.showModal}>
            <Tooltip  title="源码">
              <Icon type="codepen" />
            </Tooltip>
          </div>

          <div className="item">
            <Tooltip  title="预览">
              <Link to="/preview">
                <Icon type="eye" />
              </Link>
            </Tooltip>
          </div>

          <div className="item">
            <Tooltip  title="发布">
              <Icon type="cloud-upload" />
            </Tooltip>
          </div>
          
          <div className="item">
            <Tooltip  title="下载">
              <Icon type="download" />
            </Tooltip>
          </div>

          <div className="item" onClick={this.showDeleteConfirm}>
            <Tooltip  title="清空">
              <Icon type="delete" />
            </Tooltip>
          </div>

          <div className="item">
            <a  href="https://github.com/winyh/astx" target="_blank" rel="noopener noreferrer"><Icon type="github" /></a>
          </div>
        </div>

        <Modal
          title="源码"
          width="60%"
          okText="确认"
          cancelText="取消"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          bodyStyle={{padding:'0px'}}
          wrapClassName="code-modal"
          footer={null}
        >
          <Code />
        </Modal>

      </div>
    )
  }

}

export default Head;
