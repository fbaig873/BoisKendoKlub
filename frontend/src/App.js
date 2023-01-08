import { useEffect, useState } from 'react';
import { getItems } from './Functions';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [items, setItems] = useState([])
  const [reload, setReload] = useState(true)
  const [filter, setFilter] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      console.log('fetch data;m', result)
      setItems(result)
    }
    fetchData()
  }, [reload])

  return (
    <>
    <div class="bg-offwhite w-screen h-screen">
      <Header reload = {reload} setReload = {setReload} setFilter = {setFilter} />
      <Card reload = {reload} setReload = {setReload} items = {items} currentFilter = {filter} />
    </div>
    
      {/* <div className="card" key={item._id}>
      <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={item.image} alt="" />
      </div>
      <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{item.title}</span>
      </div>
      </div> */}
    </>
  )
}
export default App;