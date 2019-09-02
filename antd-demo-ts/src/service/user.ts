/*
 * @Author: linjianx 
 * @Date: 2019-08-14 17:31:44 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-30 18:11:34
 */
import request from './request'
class UserApi {
  public static prefix = '/users'
  public login(username: string, password: string) {    
    // return request.get(`/api/ServiceList`).then((res) => {
    //   return res
    // })
    return request.post(`/api/bg/user/login`, {      
      mailbox: username,
      password: password
    }).then ((res:any) => {
      console.log(res)
      return res
    })
  }
}
export default UserApi