import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";

function _drawImage(){
    const images = ProxyState.images;
    // @ts-ignore
    document.body.style.backgroundImage = `url(${images.largeImgUrl})`;
}
_drawImage()


export class ImageApiController{
    constructor(){
        ProxyState.on('images', _drawImage)
        this.getImages()
    }
    async getImages(){
        const res = await sandboxApi.get('images')
        console.log('img', res.data);
        ProxyState.images = res.data
    }
}