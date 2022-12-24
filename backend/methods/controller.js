import Item from "./models.js";
export const getItems = async(req,res) => {
    console.log('get items')
    try {
        const item =await Item.find()
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createItems = async(req,res) => {
    const body = req.body;
    try{
        const newImage = await Item.create(body)
        newImage.save();
        res.status(201).json({ msg : "New image uploaded...!"})
    }catch(error){
        res.status(409).json({ message : error.message })
    }
}

export const deleteAll = async(req,res) => {
    try {
        await Item.deleteMany();
        res.status(201).json({});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}