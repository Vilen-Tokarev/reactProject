import axios from "axios";

const baseUrl = 'https://672caf7e1600dda5a9f97a34.mockapi.io/user'

// User запросы

export const fetchUsers = ({ page = 1, limit = 10, filter = '', sort = '', search = '', }) => {
    return axios.get(
        `${baseUrl}?page=${page}&limit=${limit}&title=${search}&category=${filter}&sortBy=${sort}`
    ).then((res) => { return (res.data) }
    ).catch((error) => { alert('Ошибка в запросе') });
};

export const fetchUserId = (userId) => {
    return axios.get(
        `${baseUrl}/${userId}`
    ).then((res) => { return (res.data) }
    ).catch((error) => { alert('Ошибка в запросе') })
}


// Reviews запросы

export const fetchReviews = (userId) => {
    return axios.get(
        `${baseUrl}/${userId}/reviews`
    ).then((res) => { return (res.data) }
    ).catch((error) => {
        console.log(error);
    });
};

export const createReview = (userId) => {
    return axios.post(
        `${baseUrl}/${userId}/reviews/`
    ).then((res) => { return (res.data) }
    ).catch((error) => { alert('Ошибка в запросе') })
}

export const deleteReview = ({ userId, rewId }) => {
    return axios.delete(
        `${baseUrl}/${userId}/reviews/${rewId}`
    ).then((res) => { return res.data; }
    ).catch((error) => { alert("Ошибка в запросе"); });
};
