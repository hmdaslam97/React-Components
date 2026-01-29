import React from 'react'

function WithoutMemo({onClick}) {
    console.log('Without memo rendered');
    
    return <div>
        <h1>I am without Memo</h1>
        <button onClick = {onClick}> Click me 2</button>
    </div>
}

export {WithoutMemo}
