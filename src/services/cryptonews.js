// cryptonews.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://cryptonews-api.com',
});

export default {
    getNews(page, cryptoname) {
        const pageNum = page || 1;
        console.log(pageNum);

        const url = cryptoname ?
            `/api/v1?tickers=${cryptoname}&items=9&page=${pageNum}&token=ul9mca2hqxq8h5p1u13xfkmcnaf0umfkijqgypyh` :
            `/api/v1/category?section=alltickers&items=9&page=${pageNum}&token=ul9mca2hqxq8h5p1u13xfkmcnaf0umfkijqgypyh`;
        console.log(url);
        return apiClient.get(url);
    },


};