import {deleteOne} from '../Functions';

export default function Card({reload, setReload, items, currentFilter}) {
    const HandleClick = async (e, title) => {
        e.preventDefault();
        await deleteOne(title);
        setReload(!reload);
        alert("Deleted item");
    }
    return (
        <>
        <div class="flex justify-center pt-3">
        <div class="grid grid-cols-4 gap-8">
        {items?.filter((item) => {
            if(currentFilter === "" || item.tags.length === 0) {
                return item
            } else {
                for(let i = 0; i < item.tags.length; ++i) {
                    if(item.tags[i].includes(currentFilter)) {
                        return item;
                    }
                }
            }
            return null;
        }).map(item => (
            <div class="bg-maya text-white w-full rounded-xl shadow-md lg:max-w-sm h-64">
                <img
                    class="object-cover w-full h-48"
                    src={item.image}
                    alt="This is something"
                />
                <div class="px-1 h-16">
                <p class='float-right cursor-pointer' onClick={(e) => {HandleClick(e, item.title)}}>x</p>
                <h4 class="text-xl font-semibold tracking-tight text-yellow text-center">
                    {item.tags}
                </h4>
                </div>
            </div>
        ))}
        </div>
        </div>
        </>
    );
}
