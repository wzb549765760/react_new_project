//  Hook 是react中16.7新增的一个特效 主要是用来让无状态组件 可以使用状态 在react开发中状态的管理是必不可少的 以前为了进行状态管理 需要用类组件或者redux等来管理

import React, { useState } from 'react';
// 主要是用来让无状态组件 可以使用状态  
// 可以使用react Hook 中的usestate 来进行实现
// useState是来定义一个状态的  他与类组件的状态不同  函数组件的状态科颜氏对象也可以是基础类型数据  
// useState返回的是一个数组  第一个是当前状态值  第二个是对象编码用于更新状态的函数（类似于setState）


// export default function HookDemo() {
//   let [val, setVal] = useState(0)
//   return (
//     <div>
//       阿斯蒂芬
//       使用数据：{val},
//       <button onClick={() => {
//         setVal(++val)
//       }}>点我修改val</button>
//     </div>
//   )
// }


// 如果有多个状态怎么办
// 1生命对象类型的状态
// 2多次声明


export default function HookDemo() {
  // 1生命对象类型的状态
  let [val, setVal] = useState({
    vala: 0,
    valb: 2,
  })
  // 2多次声明
  // let [val, setVal] = useState(0)
  // let [val, setVal] = useState(0)
  // let [val, setVal] = useState(0)
  // let [val, setVal] = useState(0)

  return (
    <div>
      阿斯蒂芬
      使用数据：{val.vala},
      至于修改  后面如果有多个状态的话使用其他方式修改
      {/* <button onClick={() => {
        setVal(++val.vala)
      }}>点我修改val</button> */}


    </div>
  )
}
