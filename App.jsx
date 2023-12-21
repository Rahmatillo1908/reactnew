import React from 'react'
import Imperial from './constants/Imperial'

const App = () => {
  return (
    <div>
      <Imperial/>
    </div>
  )
}

export default App






// import React, { useState } from 'react'
// import { Imperial } from './Base'

// const App = () => {
//   const [category, setCategory] = useState("all")
//   return (
//     <div>
//       <button onClick={() => setCategory("all")} >All</button>
//       <button onClick={() => setCategory("app")} >APP</button>
//       <button onClick={() => setCategory("card")} >Card</button>
//       <button onClick={() => setCategory("web")} >Web</button>
//       {Imperial.filter(item=>
//           category === "all" || item.category === category
//       )
//       .map(item =>
//         <div key={item.id} >
//           <img src={item.img} alt="" />
//         </div>
//       )}
//     </div>
//   )
// }

// export default App