import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  const users=[
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',

      tag:'Statisfied'},


    {img:'https://plus.unsplash.com/premium_photo-1661284836545-3a6ec65fcffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvcmt8ZW58MHx8MHx8fDA%3D',
      color:'green',
      intro:'',
      tag:'Underserved'},


    {img:'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
       color:'red',
      tag:'Underbanked'},
       {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
        color:'purple',
      tag:'Underhi'},
      {
        img:'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        intro:'',
         color:'yellow',
        tag:'Average '
      }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
