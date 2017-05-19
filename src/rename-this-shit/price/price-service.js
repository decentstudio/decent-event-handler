import { HttpService } from '../http/http-service';

export class PriceService {

    constructor(){
        this.httpService = new HttpService();
    }

    getPrice(){
        return this.httpService.getPrice();
    }
}