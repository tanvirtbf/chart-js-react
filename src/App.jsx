import './App.css'
import BarChart from './components/Bar'
import LineGraph from './components/Line'
import PieGraph from './components/Pie'

function App() {

  return (
    <div className='App'>
      <div className='LineChart'>
        {/* <LineGraph /> */}
        {/* <BarChart /> */}
        <PieGraph />
      </div>
    </div>
  )
}

export default App
