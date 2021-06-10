const server = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_SERVER : process.env.REACT_APP_PRO_SERVER
const endpoint = process.env.REACT_APP_ENDPOINT_PRODUCTS

const headers = {
    'Accept': 'aplication/json',
    'Content-Type': 'application/json'
};


/**
 * function getFilteredProducts, calls MELI api to search a products list
 * @param {string} filter query string to search information
 * @returns promise products list
 */
const getFilteredProducts = async (filter) => {
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

/**
 * function getProductById, calls MELI api to search a product's details
 * @param {string} itemId product id to get the detail information
 * @returns promise products list
 */
const getProductById = async (itemId) => {
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

/**
 * const productsAdapter, contains the functions to get data from MELI's API
 */
const productsAdapter = {
    getFilteredProducts,
    getProductById,
}

export default productsAdapter;