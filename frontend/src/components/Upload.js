import { useState } from 'react';
import { createItem, deleteItems } from '../functions';

function Uploader({reload, setReload}) {
    const [files, setFiles] = useState([[]])

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
        <><div className='app' class="pt-5">
        <form action="" onSubmit={onSubmitHandler}>
            <input
            type="file"
            label="Image"
            onChange={(e) => setFiles(Array.from(e.currentTarget.files))}
            multiple
            />
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                Submit
            </button>
        </form> 
        <button onClick={(e) => Delete(e)}>Delete All</button>
        </div></>
    )
}

export default Uploader