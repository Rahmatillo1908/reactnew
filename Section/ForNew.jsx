import React, { useEffect, useRef, useState } from 'react'

const ForNew = () => {
  const [data, setdata] = useState([])
  const [filter, setfilter] = useState("movie")
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=6095658c&s=${filter}`)
      .then(res => res.json())
      .then(res => { setdata(res.Search), console.log(res.Search) })
  }, [filter])
  const inputValue = useRef()
  const newFilter =()=>{
    if (inputValue.current.value == "") {
      alert('Please nom yozing')
    } else {
      setfilter(inputValue.current.value)
    }
  }
  return (
    <div>
      <button onClick={()=>setfilter("columbia")} >Columbia</button>
      <button onClick={()=>setfilter("disney")} >Disney</button>
      <button onClick={()=>setfilter("marvel")} >Marvel</button>
      <button onClick={()=>setfilter("pixar")} >Pixar</button>
      <input type="search" ref={inputValue}  />
      <button onClick={newFilter} >Search</button>
      <div className='d-flex flex-wrap justify-content-around' >
        { data ?
         data.map((element, index) =>
          <div key={index} className='card w-25 mx-3 mt-5 text-center'>
            <img src={element.Poster} className='w-100 h-75' alt="" />
            <h5>{element.Title}</h5>
            <p>{element.Year}-year</p>
          </div>
        ) : <h1>Loading...</h1>}
      </div>
    </div>
  )
}

export default ForNew