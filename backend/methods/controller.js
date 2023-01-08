import Item from "./models.js";
export const getItems = async(req,res) => {
    console.log('get items');
    try {
        const item =await Item.find()
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createItems = async(req,res) => {
    console.log('create items');
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
    console.log('deleting all items');
    try {
        await Item.deleteMany();
        res.status(201).json({});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteOne = async(req,res) => {
    const img_title = req.query.id;
    console.log('deleting', img_title);
    try {
        await Item.deleteOne({title: img_title });
        res.status(201).json({});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}