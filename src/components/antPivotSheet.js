import React, {useState, useEffect} from 'react';
import { PivotSheet } from '@antv/s2';
import { Tabs } from 'antd';
let s2 = null
let s2Show = false

export const AntPivotSheet = (props) => {
  console.log(props)  
  const [s2DataConfig, setS2DataConfig] = useState('')
  const [s2Data, setS2Data] = useState(false)

  if(props.activeKey === props.setTab && s2 === null){  
    s2Show = true
  }
  else if(props.activeKey !== props.setTab && s2 !== null){
    s2.destroy()
    s2 = null
    s2Show = false
  }
  else{
    s2Show = false
  }

  const container = document.getElementById('root');
  const s2Options = {
    width: 600,
    height: 480,
  };

  useEffect(()=>{
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json',
    )
    .then((res) => res.json())
    .then((dataCfg) => {
      setS2DataConfig(dataCfg)
      setS2Data(true)
      s2Show = true
    });
  }, [])

  if(s2Show === true && s2Data === true){
// 1. 함수 return 없이 구현
//   if(s2DataConfig != ''){
//     S2PivotSheet(container, s2DataConfig, s2Options)
//   }

// 2. 함수 return 안에 함수로 구현
//   return(
//     <>
//       {S2PivotSheet(container, s2DataConfig, s2Options)}
//     </>
//   )

// 3. 함수 return 안에 jsx로 구현    
    return(
        <>
        <S2PivotSheet container={container} s2DataConfig={s2DataConfig} s2Options={s2Options}/>
        </>
    )
  }
  else
    return
}

// 2. 함수로 구현 방법 
// export const S2PivotSheet = (container, s2DataConfig, s2Options) =>{
//   const s2 = new PivotSheet(container, s2DataConfig, s2Options);
//   s2.render();
// }

// 3. jsx로 구현
export const S2PivotSheet = (props) =>{
  s2 = new PivotSheet(props.container, props.s2DataConfig, props.s2Options);
  s2.render();
}
