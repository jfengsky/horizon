import React, {Component, PropTypes} from 'react'

import Select from '../Select'

class EditPageType extends Component {
  render () {
    return (
      <div className='modal' style={{display: 'block'}}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='close'
                onClick={this.props.close}
              >
                ×
              </button>
              <h4 className='modal-title'>编辑页面类型</h4>
            </div>
            <div className='modal-body'>
              <div className='row'>
                <div className='col-xs-10'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='请输入页面类型'
                  />
                </div>
                <div className='col-xs-2'>
                  <button type='button' className='btn btn-success'>创建</button>
                </div>
              </div>
              <div className='row' style={{marginTop: 10}}>
                <div className='col-xs-10'>
                  <Select />
                </div>
                <div className='col-xs-2'>
                  <button type='button' className='btn btn-danger'>删除</button>
                </div>
              </div>
            </div>
            <div className='modal-footer' />
          </div>
        </div>
      </div>
    )
  }
}

EditPageType.propTypes = {}

export default EditPageType
