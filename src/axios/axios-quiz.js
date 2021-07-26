import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-9452a-default-rtdb.firebaseio.com/'
})

