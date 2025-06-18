const fetchProducts = async (query) => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
            'x-rapidapi-key': '659ffec49fmshffb6dff1b4a0504p1e0619jsn82b9f73b23b3'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.data.products;
    } catch (error) {
        console.error('Erro ao buscar produtos da API:', error);
        return[];
    }
};

export default fetchProducts;