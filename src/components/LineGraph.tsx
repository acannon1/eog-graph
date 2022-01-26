import React, {useState} from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/appState";
import {actionTypes} from "../store/countReducer";

import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Select from 'react-select'

const options = [
  { value: {dataKey:"instr1", stroke:"#485696"}, label: 'instr1' },
  { value: {dataKey:"instr2", stroke:"#A8293E"}, label: 'instr2' },
  { value: {dataKey:"instr3", stroke:"#12ba41"}, label: 'instr3' },
  { value: {dataKey:"instr4", stroke:"#0b857f"}, label: 'instr4' },
  { value: {dataKey:"instr5", stroke:"#D3199B"}, label: 'instr5' },
]

const LineGraph = () => {
    const [instrumentArray, setInstrumentArray] = useState(new Array())

    const dispatch = useDispatch();
    const instr = useSelector((state: AppState) => state.count.instruments);

    let interval;
    const startData = () => {
        interval = setInterval(() => {
            dispatch({
                type: actionTypes.UPDATE_INSTRUMENTS
            })
        }, 1300);
        return () => clearInterval(interval);
    }

    const handleChange = (event) => {
        let tempArray = new Array();
        event.map((entry) => {
            tempArray.push(entry.value)
        })
        setInstrumentArray(tempArray)
    }

    return (
        <div>
            <button onClick = {() => startData()} > Start Data </button>
            <Select options={options} isMulti onChange={handleChange}/>
            
            {instrumentArray.length>0 ?
                <LineChart
                    width={1000}
                    height={350}
                    data={instr}
                    margin={{
                    top: 20,
                    right: 10,
                    left: 10,
                    bottom: 20
                    }}
                >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="number" />
                    <YAxis />
                    <Tooltip />
                    <Legend align="left" layout="vertical" verticalAlign="middle" />

                    {instrumentArray.map((value) => {
                        return(
                            <Line
                                type="monotone"
                                dataKey={value.dataKey}
                                stroke={value.stroke}
                                activeDot={{ stroke: "#272d2dff", strokeWidth: 1, r: 6 }}
                            />
                        )
                    })} 
                    
                </LineChart>
                : null}
      </div>
    );
//   }
}

export default LineGraph;