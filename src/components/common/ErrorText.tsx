import React from 'react'
import styled from 'styled-components'

type ErrorTextProps={
    errorMessage:string,
}
const ErrorText:React.FC<ErrorTextProps>=({errorMessage})=>{
  return(
    <Wrap>{errorMessage}</Wrap>
  )
}

const Wrap=styled.p`
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   margin-top: 5px;
   color:#DA2121;
`
export default ErrorText;