import { useEffect, useState } from 'react';
import { getItems } from './functions';
import Uploader from './components/Upload';

function App() {
  const [items, setItems] = useState([])
  const [reload, setReload] = useState(true)
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
    <Uploader reload = {reload} setReload = {setReload}/>
    {items?.map(item => (
      <div className="card" key={item._id}>
      <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={item.image} alt="" />
      </div>
      <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{item.title}</span>
      </div>
      </div>
    ))}
    </>
  )
}
export default App;