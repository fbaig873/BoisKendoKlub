import { useState } from 'react';
import { createItem } from '../Functions';
import TagsInput from './Tags';

function Header({reload, setReload, setFilter}) {
    const [files, setFiles] = useState([]);
    const [tags, setTags] = useState([])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await createItem(files, tags);
        document.getElementById("image-uploader").reset();
        setReload(!reload);
        setFiles([])
        e.target.value = null
        setTags([])
        alert("Submitted files");
    }
    
    return (
        <>
        <input
            type="search"
            class="float-left h-10 p-1 m-4 outline-1 pl-1"
            placeholder='Search for tags'
            onChange={(e) => {setFilter(e.target.value)}}
        />
        <div class="flex flex-row justify-end pt-5 px-4 space-x-2 > * + *">
        <form id="image-uploader">
            <input
            type="file"
            onChange={(e) => setFiles(Array.from(e.currentTarget.files))}
            multiple
            accept="image/*"
            class = "h-8"
            />
            {Object.keys(files).length === 0 ? (<></>) : 
                (<>
                <button
                    onClick={(e) => onSubmitHandler(e)}
                    class="h-8 bg-maya hover:bg-navy text-offwhite font-bold px-2">
                    Submit
                </button>
                </>)
            }
            <TagsInput tags={tags} setTags={setTags}/>
        </form>
        </div></>
    )
}

export default Header