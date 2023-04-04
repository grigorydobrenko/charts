import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://iori3.ranepa.ru/science_api/v1/oil_refining/1/',
})


export const chartsApi = {
    getCharts() {
        return instance.get('')
    }
}

