import React from "react";
import {Modal} from "antd";

class MainModal extends React.Component {

  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.props.open}
          onCancel={this.props.handleCancel}
          footer={null}
          width="700px"
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default MainModal;
