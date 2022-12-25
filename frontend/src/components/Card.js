export default function Card({items, currentFilter}) {
    return (
        <>
        <div class="flex justify-center pt-3">
        <div class="grid grid-cols-3 gap-8">
        {items?.map(item => (
            <div class="bg-maya text-white w-full rounded-xl shadow-md lg:max-w-sm h-64">
                <img
                    class="object-cover w-full h-48"
                    src={item.image}
                    alt="This is something"
                />
                <div class="p-4">
                    <h4 class="text-xl font-semibold tracking-tight text-yellow text-center">
                        {item.title}
                    </h4>
                </div>
            </div>
        ))}
        </div>
        </div>
        </>
    );
}
