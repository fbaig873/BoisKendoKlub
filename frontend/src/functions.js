import axios from 'axios';

function convertToBase64(file){
return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
    resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
    reject(error)
    }
})
}


const url = "http://localhost:5000/items/"

export const apiGetItems = () => axios.get(url);
export const apiCreateItem = (item) => axios.post(url,item);
export const apiDeleteItems = () => axios.delete(url);

export const getItems = async () => {
    try {
        const {data} = await apiGetItems();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const createItem = async (todo) => {
    try {
        for (const file of todo) {
            const base64 = await convertToBase64(file);
            const upload = {title:Date.now() + '-' + file.name, image:base64}
            const {data} = await apiCreateItem(upload);
            console.log(data)
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteItems = async () => {
    try {
        const {data} = await apiDeleteItems();
        return data;
    } catch (error) {
        console.log(error)
    }
}