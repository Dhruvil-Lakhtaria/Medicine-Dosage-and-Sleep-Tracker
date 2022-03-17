import React from 'react'
import  { LineChart,Line, CartesianGrid, XAxis,YAxis,Tooltip} from 'recharts'
const SleepChart = ({sleepData}) => {
  return (
    <div className='line-chart'>
        {sleepData.length === 0?"NO DATA ENTERED":<LineChart width={800} height={400} data={sleepData}>
            <Line type="monotone" dataKey="value" stroke='#8844d8'/>
            <CartesianGrid stroke='#ccc' />
            <XAxis dataKey="dataKey" />
            <YAxis />
            <Tooltip />
        </LineChart>}
    </div>
  )
}

export default SleepChart