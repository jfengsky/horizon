import React, {Component, PropTypes} from 'react'

import {FETCH_SAVE_PAGETYPE} from '../../store/fetch'
import Select from '../Select'
import InputText from '../InputText'

class EditPageType extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

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
                  <InputText />
                </div>
                <div className='col-xs-2'>
                  <button
                    type='button'
                    className='btn btn-success'
                    onClick={this.createPageType}
                  >
                    创建
                  </button>
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

  createPageType = async e => {
    let value = this.refs.pageTypeInput.value.trim()
    if (value) {
      let result = await FETCH_SAVE_PAGETYPE({
        type: 'save',
        text: value
      })
      // TODO
      console.log(result)
    }
  }
}

EditPageType.propTypes = {}

export default EditPageType
