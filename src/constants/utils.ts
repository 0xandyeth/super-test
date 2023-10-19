import {UserInfoType} from './types'
export function isValidUser(userInfo:UserInfoType){
  if(userInfo.name !=="" && userInfo.email !=="" && userInfo.country !== ""){
    return true;
  }

  return false;
}


export function isValidPass(userInfo:UserInfoType){
    if(userInfo.password !=="" && userInfo.confirmPass !==""){

      return userInfo.password === userInfo.confirmPass?true:false;
    }
  
    return false;
  }