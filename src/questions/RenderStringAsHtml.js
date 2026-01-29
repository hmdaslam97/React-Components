import React from 'react'

const data=`<h1 style="color:red">Hello World!</h1>`
export const RenderStringAsHtml = () => {
  return (
    <div dangerouslySetInnerHTML={{__html:data}} />
  )
}
// this will expose user to cross site scripting attack
