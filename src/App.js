import { useState, useEffect, useRef } from 'react'
import { API_GET_DATA } from './global/constants'

import Edit from './components/Edit'
import List from './components/List'
import './index.css'

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const {data} = await res.json()
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}

const Home = () => {
  const [ data, setData ] = useState([]);
  const  submittingStatus = useRef(false);

  useEffect(() => {
    if(!submittingStatus.current){
      return
    }
    fetchSetData(data)
      .then(data => submittingStatus.current = false)
  }, [data])

  useEffect(() => {
    fetchData(setData);
  }, [])

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus} />
    </div>
  );
};

export default Home;








// note:
// // let a = 100
// const [a, setA] = useState(100)
// function plus() {
//   setA(function (prev){
//     return prev + 200
//   })
// }
// <button onClick={plus}>加法</button>

// useEffect(() => {
//   window.alert("新增成功"); //頁面渲染一定會執行一次
// }, [data])

  //上面簡化過程
  // useEffect(() => {
  //   fetch(API_GET_DATA)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  // }, [])