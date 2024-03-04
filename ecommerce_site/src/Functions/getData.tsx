import axios from "axios";

export default function getData({ url }: any) {
    return axios.get('https://dummyjson.com/' + url)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}



   