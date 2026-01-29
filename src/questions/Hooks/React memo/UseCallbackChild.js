import React from 'react'

export const UseCallbackChild = React.memo(({onClick}) => { //used to memoize this component
    console.log('Memo component rendered');//this will print only when parent component changes.

    return <div>
    <h1>I am from Memo</h1>
    <button onClick = {onClick}> Click me</button>
</div>
})