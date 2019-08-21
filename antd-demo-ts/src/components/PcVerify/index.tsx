/*
 * @Author: linjianx 
 * @Date: 2019-08-21 10:11:52 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-21 11:07:27
 * @Desc: 图型验证码
 */
import * as React from 'react'
import { init } from '../../utils/jigsaw'
import './style.scss'
class PcVerify extends React.PureComponent {  
  componentDidMount () {
    init(document.getElementById('captcha'), function () {
      console.log('验证成功')
    })
  }
  public render() {
    return (
      <div>
        <div id="captcha" style={{position: 'relative'}}></div>
        <div id="msg"></div>
      </div>
    )
  }
}
export default PcVerify