import React, { useState } from 'react'
import Card from './components/Card'


const App = () => {
  const data =[
    {
      name:"Ayushi",
      Profession:"Coder",
      image:"https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends:false
    },
    {
      name:"Lisa",
      Profession:"Makeup Artist",
      image:"https://plus.unsplash.com/premium_photo-1661390063346-bbbe4ea52416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVuJTIwa29yZWFufGVufDB8fDB8fHww",
      friends:false
    },
    {
      name:"Marky",
      Profession:"Painter",
      image:"https://images.unsplash.com/photo-1577807002746-2aa23cf2d134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1lbiUyMCUyMGtvcmVhbnxlbnwwfHwwfHx8MA%3D%3D",
      friends:false
    },
    {
      name:"Jonita",
      Profession:"Graphic Designer",
      image:"https://images.unsplash.com/photo-1514355315815-2b64b0216b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVuJTIwa29yZWFufGVufDB8fDB8fHww",
      friends:false
    },
  ]

  const [realdata , setRealData] = useState(data);

  const handelFriendsButton =(cardindex)=>{
    setRealData((previous)=>{
          return previous.map((item , index)=>{
            if (index === cardindex){
              return {...item , friends:!item.friends}
            }
            return item;
          })
    });
  }
  return (
  <>
  <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
  {realdata.map((item , index)=>(
    <Card key={index} handelClick={handelFriendsButton} image={item.image} name={item.name} profession={item.Profession} friends = {item.friends} index={index}/>
  ))}
  </div>
  </>
  )
}

export default App
