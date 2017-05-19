const cryptoComparePriceRequest = {
            uri: 'https://min-api.cryptocompare.com/data/price',
            qs: {
                fsym: 'ETH',
                tsyms: 'BTC,USD'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

export default cryptoComparePriceRequest