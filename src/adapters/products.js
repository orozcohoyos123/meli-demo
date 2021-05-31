import urlTemplate from 'url-template'

const productsAdapter = {
    getFilteredProducts: async (query) => {
        const server = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_SERVER : process.env.REACT_APP_PRO_SERVER
        const endpoint = process.env.REACT_APP_ENDPOINT_PRODUCTS
        
        try {
            if (query) {
                const url = urlTemplate.parse(`${server}/api/${endpoint}?q=${query}`).expand({});

                const result = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'aplication/json',
                        'Content-Type': 'application/json'
                    }
                })
                
                return result.json();
            } else {
                return {}
            }
        } catch (error) {
            throw  await error
        }
    },
}

export { productsAdapter };
//const _env = process.env.NODE_ENV === 'development' ? "as" : process.env.REACT_APP_PRO_SERVER