import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MeesageCard from './MeesageCard.jsx'

function App() {
  return    <div className='App' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Message Cards</h1>
<MeesageCard title="ROBO" message="I am chitti"/>


<MeesageCard title="Welcome" message="YOur message card"/>
<MeesageCard title="Good news" message="u  r doing good in assessment"/>

<MeesageCard title="Remainder" message="Don't forget to submit your repo link"/>
</div>
}

export default App;
