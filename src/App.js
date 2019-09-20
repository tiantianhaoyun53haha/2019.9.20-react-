import React,{useState} from 'react'

export default function App() {
    const {count, setCount} = useState(0)
    return (
        <div>
            我是函数式组件
            <div>你点击了</div>
        </div>
    )
}
