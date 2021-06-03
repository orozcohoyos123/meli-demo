const server = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_SERVER : process.env.REACT_APP_PRO_SERVER
const endpoint = process.env.REACT_APP_ENDPOINT_PRODUCTS

const headers = {
    'Accept': 'aplication/json',
    'Content-Type': 'application/json'
};

const getFilteredProducts = async function getFilteredProducts (filter) {
    try {
        if (filter) {
            const res = await fetch(`${server}/api/${endpoint}?q=${filter}`, {
                method: 'GET',
                headers: headers
            })
            
            return res.json();
        } 
        else 
            return {}
        
    } 
    catch (error) {
        throw await error
    }
};

const getProductById = async function getProductById(itemId) {
    try {
        if (itemId) {
            const res = await fetch(`${server}/api/${endpoint}/${itemId}`, {
                method: 'GET',
                headers: headers
            })

            return res.json();
        } 
        else 
            return {}
        
    }
    catch (error) {
        throw await error
    }
}

const productsAdapter = {
    getFilteredProducts,
    getProductById,
}

export default productsAdapter;