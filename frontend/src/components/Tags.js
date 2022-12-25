function TagsInput({tags, setTags}){    
    function handleKeyDown(e){
        if(e.key !== ' ') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
        console.log(tags)
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div class="pb-1 border rounded-sm flex flex-wrap gap-2 h-9 text-s">
            { tags.map((tag, index) => (
                <div className="inline-block p-2 rounded-2xl" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" class="mt-0 h-8 flex-grow border-0 outline-none pl-1" placeholder="Type somthing" />
        </div>
    )
}

export default TagsInput
