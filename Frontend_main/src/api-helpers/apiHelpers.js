import axios from 'axios';

export const getAllMovies = async ()=>{

    const res = await axios.get("http://localhost:5000/movie")
    .catch((err)=>console.log(err));

    if(res.status !==200)
    {
        return console.log("No Data")
    }

    const data = await res.data;
    return data;
}

export const sendUserAuthRequest = async (data,signup) => {

    const res = await axios.post(`http://localhost:5000/user/${signup ? "signup":"login"}`,{
    name: signup ? data.name : " ",
    email: data.email,
    password: data.password
    }).catch((err)=>console.log(err))

    if(res.status !== 200 && res.status !== 201)
    {
        return console.log("Unexpected Error occure")
    }

    const resData = await res.data;
    return resData;    
}

export const sendAdminAuthRequest = async (data) => {

    const res = await axios.post("http://localhost:5000/admin/login",{
        email: data.email,
        password: data.password,
    }).catch((err)=>console.log(err))

    if(res.status !== 200)
    {
        return console.log("Unexpected Error occure");
    }

    const resData = await res.data;
    return resData;
}

export const getMovieDetails = async (id) => {
    const res = await axios.get(`http://localhost:5000/movie/${id}`).catch((err)=>console.log(err));

    if(res.status !== 200)
    {
        return console.log("Unexpected Error occure");
    }

    const resData = await res.data;
    return resData;
}

export const newBooking = async (data)=>{
    const res = await axios.post("http://localhost:5000/booking",{
        movie: data.movie,
        seatNumber: data.seatNumber,
        date: data.date,
        user: localStorage.getItem("userId")
    }).catch((err)=>console.log(err))

    if(res.status !== 201)
    {
        return console.log("Unexpected Error occure");
    }
    const resData = await res.data;
    return resData;
}

export const getUserBooking = async () => {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`http://localhost:5000/user/bookings/${id}`).catch((err)=>console.log(err));

    if(res.status !== 200)
    {
        return console.log("Unexpected Error occure");
    }

    const resData = await res.data;
    return resData;
}

export const deleteBooking = async (id) => {

    const res = await axios.delete(`http://localhost:5000/booking/${id}`).catch((err)=>console.log(err));

    if(res.status !== 200)
    {
        return console.log("Unexpected Error occure");
    }

    const resData = await res.data;
    return resData;
}

export const deleteMovieById = async(id) => {

    const res = await axios.delete(`http://localhost:5000/movie/${id}`).catch((err)=>console.log(err));

    if(res.status !== 200)
    {
        return console.log("Unexpected Error occure");
    }

    const resData = await res.data;
    return resData;
}

export const getUserDetails = async () => {
    const id = localStorage.getItem("userId");
    const res = await axios.get(`http://localhost:5000/user/${id}`).catch((err)=>console.log(err));
    
    if(res.status !== 200)
    {
        return console.log("Unexpected Error occure");
    }

    const resData = await res.data;
    return resData;
    
}

export const addMovie = async (data) => {
    const res = await axios.post("http://localhost:5000/movie",{
        title:data.title,
        description: data.description,
        releaseDate: data.releaseDate,
        posterUrl: data.posterUrl,
        featured:data.featured,
        admin:localStorage.getItem("adminId"),
    },{
        // verify jwt token
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }).catch((err)=>console.log(err));

    if(res.status !== 201)
    {
        return console.log("Unexpected Error occure");
    }

    const resData = await res.data;
    return resData;
}

export const getAdminById = async () => {
    const adminId = localStorage.getItem("adminId");
    const res = await axios.get(`http://localhost:5000/admin/${adminId}`).catch((err)=>console.log(err));

    if(res.status !== 200)
    {
        return console.log("Unexpected Error occure");
    }

    const resData = await res.data;
    return resData;
}