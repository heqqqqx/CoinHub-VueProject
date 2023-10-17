import axios from 'axios';

async function fetchNews() {
    const response = await axios.get('https://cryptonews-api.com/api/v1/category?section=alltickers&items=3&page=1&token=ul9mca2hqxq8h5p1u13xfkmcnaf0umfkijqgypyh');
    return response.data.data;
}