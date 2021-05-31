const initialState = {
    products: [
        {
            author: {
              name: "Sebastian",
              lastname: "Orozco"
            },
            item: {
              id: "",
              title: "",
              price: {
                currency: "$",
                amount: 0,
                decimals: 2,
              },
              picture: "",
              condition: "",
              free_shipping: false,
              sold_quantity: 0,
              description: "",
              location: ""
            }
         }
    ],
  categories: [
   { 
      id: "",
      name: ""
    }
  ]
}

export { initialState }