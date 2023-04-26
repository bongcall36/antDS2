import React, {useState, useEffect} from 'react';
import { Tabs } from 'antd';
import { AntPivotSheet } from './components/antPivotSheet'
import { AntKPIStrategySheet } from './components/antKPIStrategySheet'
import { SwitchPivotSheet } from './components/switchPivotSheect'

const onChange = (key, callBack) => {
  console.log(key);
  callBack(key)
};

export default function App() {
  const [activeKey, SetActiveKey] = useState('1')

  const items = [
    {
      key: '1',
      label: `Tab 1`,
      children: <AntPivotSheet activeKey={activeKey} setTab={'1'} />,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: <AntKPIStrategySheet activeKey={activeKey} setTab={'2'} />,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: <SwitchPivotSheet activeKey={activeKey} setTab={'3'} />,
    },
  ]; 

  return(
   <Tabs defaultActiveKey="1" items={items} onChange={(e)=>onChange(e, SetActiveKey)} />
  )
}