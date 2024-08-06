import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Hello from "./components/Hello"


function App() {
  const userInformation = {}
  return (
    <div className='flex flex-col gap-10'>
      <Header />
      <div className='flex gap-10'>

        <Sidebar />
        <Content userInformation={userInformation}/>
      </div>
      <Footer />

      


    </div>
  )
}

export default App
