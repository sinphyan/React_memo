import { useState } from 'react'
import { v4 } from 'uuid';
// import { v4 as uuidv4 } from 'uuid';

const Edit = ({ add, submittingStatus }) => {

  const [note, setNote] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  
  const noteChange = (e) => {
    setNote(e.target.value)
  };
  const dateChange = (e) => {
    setDate(e.target.value)
  };
  const timeChange = (e) => {
    setTime(e.target.value)
  };

  console.log(note, date, time)

  const addItem = () => {
    submittingStatus.current= true
    add ( (prevData) => {
      return [
        {
        // id: uuidv4(), //吃不到uuid
        id: v4(),
        note, 
        date, 
        time
      },
      ...prevData, //把解構的東西放在最下面，這樣ITEM跑出來會在會上面（放在return則反之）
      ]
    })
  }

  return <div>
    <h1>備忘錄</h1>
    <p>記事：</p>
    <input 
      type="text" 
      value={note}
      onChange={noteChange}
    />
    <p>日期：</p>
    <input 
      type="date" 
      value={date}
      onChange={dateChange}
    />
    <p>時間：</p>
    <input 
      type="time" 
      value={time}
      onChange={timeChange}
    />
    <button onClick={addItem} className="add">新增</button>
  </div>
}

export default Edit; 