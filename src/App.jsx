import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([])

  return (<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div>
      <input style={{
        background: '#2d2d2d',
        outline: 'none',
        border: 'none',
        padding: '10px',
        marginRight: '10px',
        borderRadius: '5px',
        color: '#fff'
      }} onChange={e => {
        setValue(e.target.value)
      }} value={value} placeholder='Enter something'/>
      <button style={{
        border: 'none',
        background: '#1751ff',
        padding: '10px 15px',
        borderRadius: '5px',
        color: '#fff',

      }} onClick={() => {
        if(value) setData(prev => [...prev, {id: uuidv4(), value: value, complete: false}]);

        setValue("")
      }}>Add</button>
      
    </div>

    {data.map(item => (<li style={{
      listStyle: 'none',
      color: item.complete ? '#8a8a8a' : '#fff',
      padding: '10px',
      marginTop: '10px',
      background: '#2d2d2d',
      width: '100%',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
    }} key={item.id}>
      <span style={{
        textDecoration: item.complete ? 'line-through' : 'none'
      }}>{item.value}</span>
    <div>
      <button style={{
        border: 'none',
        color: '#17ff45',
        background: 'transparent',
        cursor: 'pointer'
        
      }} disabled={item.complete ? true : false} onClick={() => {
        setData(prev => prev.map(todoItem => (
          todoItem.id == item.id ? {...todoItem, complete: true} : todoItem
        )))
      }}>Done</button> <button  style={{
        border: 'none',
        color: '#ff2b3d',
        background: 'transparent',
        cursor: 'pointer'
      }} onClick={() => {
        
        setData(data.filter(newData => newData.id !== item.id))
      }}>Delete</button>
    </div></li>))}
  </div>)
}

export default App