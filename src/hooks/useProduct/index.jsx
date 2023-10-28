import { API } from "../../services"

export const useProduct = async () => {
    try{
    const response = await API.get('products')
    return response.data
    }catch (e){
        console.log(e.response);
    }
}