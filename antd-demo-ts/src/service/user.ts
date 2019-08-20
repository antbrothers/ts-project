/*
 * @Author: linjianx 
 * @Date: 2019-08-14 17:31:44 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-19 09:55:30
 */
import request from './request'
class UserApi {
  public static prefix = '/users'
  public login(username: string, password: string) {
    
    return request.get(`/api/ServiceList`).then((res) => {
      return res
    })
    // return { data: {userId: '2121', username: '蚂蚁兄弟'}, msg: '请求成功' }
  }
}
export default UserApi