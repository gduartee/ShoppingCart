const fetchProducts = async (query) => {
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
            'x-rapidapi-key': '6166376aabmshf379572eb693714p174817jsn4cf99b4ce227' // substitua por sua key real
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