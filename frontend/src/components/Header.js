import { useState } from 'react';
import { createItem, deleteItems } from '../Functions';
import TagsInput from './Tags';

function Header({reload, setReload, setFilter}) {
    const [files, setFiles] = useState([[]]);
    const [tags, setTags] = useState([])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await createItem(files, tags);
        document.getElementById("image-uploader").reset();
        setReload(!reload);
        setFiles([[]])
        e.target.value = null
        setTags([])
    }
    const Delete = async (e) => {
        e.preventDefault();
        await deleteItems();
        setReload(!reload);
        setFiles([[]])
    }
    return (
        <><div class="flex flex-row justify-end pt-5 px-4 space-x-2 > * + *">
        <input
            type="search"
            class="float-left h-8 pl-1"
            placeholder='Search for tags'
            onChange={(e) => {setFilter(e.target.value)}}
        />
        <form id="image-uploader">
            <input
            type="file"
            onChange={(e) => setFiles(Array.from(e.currentTarget.files))}
            multiple
            accept="image/*"
            class = "h-8"
            />
            <button
                onClick={(e) => onSubmitHandler(e)}
                class="h-8 bg-maya hover:bg-navy text-offwhite font-bold px-2">
                Submit
            </button>
            <TagsInput tags={tags} setTags={setTags}/>
        </form> 
        <button 
            onClick={(e) => Delete(e)}
            class="h-8 bg-red hover:bg-darkred text-offwhite font-bold w-auto px-2"
        >Delete All</button>
        </div></>
    )
}

export default Header