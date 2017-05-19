import { default as http } from 'request-promise';
import requestTypes from './request-types';

export class HttpService {

    constructor(){
    }

    getPrice(){
        var priceRequest = requestTypes.cryptoComparePriceRequest;

        return http(priceRequest)
            .then(function (response) {
                return response; 
            })
            .catch(function (err) {
                console.log('Shit fucked up');
            });
    }
}