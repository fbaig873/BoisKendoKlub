import { useState } from 'react';
import { createItem, deleteItems } from '../functions';

function Uploader({reload, setReload}) {
    const [files, setFiles] = useState([[]]);

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
        <><div 
        class="flex justify-end pt-5 px-4 space-x-2 > * + *">
        <form action="" onSubmit={onSubmitHandler}>
            <input
            type="file"
            onChange={(e) => setFiles(Array.from(e.currentTarget.files))}
            multiple
            accept="image/*"
            class = "h-8"
            />
            <button
                class="h-8 bg-maya hover:bg-navy text-offwhite font-bold px-2">
                Submit
            </button>
        </form> 
        <button 
            onClick={(e) => Delete(e)}
            class="h-8 bg-red hover:bg-darkred text-offwhite font-bold w-auto px-2"
        >Delete All</button>
        </div></>
    )
}

export default Uploader