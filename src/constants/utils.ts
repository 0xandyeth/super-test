import { StepType, UserInfoType } from './types';
export function isValidUser(userInfo: UserInfoType) {
  const valid =
    userInfo.name !== '' && userInfo.email !== '' && userInfo.country !== '';
  return valid ? true : false;
}

export function isValidPass(userInfo: UserInfoType) {
  if (userInfo.password !== '' && userInfo.confirmPass !== '') {
    return userInfo.password === userInfo.confirmPass ? true : false;
  }

  return false;
}

export function isEmailValid(value:string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(value)?false:true;
}

export function isNameValid(value:string){
    return value.length < 4 || value.length > 12?false:true;
}

export function isPasswordVaild(value:string){
    return value.length < 8 || value.length > 16?false:true;
}

export function isConfirmVaild(value1:string,value2:string){
    return value1 !== value2?false:true;
}

export const Steps: StepType[] = [
  {
    value: 1,
    label: 'Initial Info',
    check: true,
  },
  {
    value: 2,
    label: 'Password screen',
    check: false,
  },
  {
    value: 3,
    label: 'Review',
    check: false,
  },
];
