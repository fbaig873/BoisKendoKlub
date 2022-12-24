import { useEffect, useState } from 'react';
import { createItem, getItems, deleteItems } from './functions';

function App() {
  const [files, setFiles] = useState([[]])
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await createItem(files);
    setReload(!reload);
  }
  const Delete = async (e) => {
    e.preventDefault();
    await deleteItems();
    setReload(!reload);
  }
  return (
    <>
    <div className='app'>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="file"
          label="Image"
          onChange={(e) => setFiles(Array.from(e.currentTarget.files))}
          multiple
        />
        <button>Submit</button>
      </form> 
      <button onClick={(e) => Delete(e)}>Delete All</button>
    </div>
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