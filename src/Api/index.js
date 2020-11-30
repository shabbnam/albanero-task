import axios from "axios"

const URL = "https://covid19.mathdro.id/api";


export const FetchDailyData = async () => {

    try {
        const { data } = await axios.get(`${URL}/daily`)
        console.log(data)
        const ModifiedData = data.map(DailyData => ({
            confirmed: DailyData.confirmed.total,
            deaths: DailyData.deaths.total,
            date: DailyData.reportDate
        }))
        return ModifiedData;
    }
    catch (error) {
        console.log(error);
    }

}
