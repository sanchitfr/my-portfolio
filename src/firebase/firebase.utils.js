import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyASJvJHX74Yajg9mJ0O4wjJnedLq4PUlBw",
    authDomain: "portfolio-db-1ebf6.firebaseapp.com",
    databaseURL: "https://portfolio-db-1ebf6.firebaseio.com",
    projectId: "portfolio-db-1ebf6",
    storageBucket: "portfolio-db-1ebf6.appspot.com",
    messagingSenderId: "1057611549823",
    appId: "1:1057611549823:web:1f3fcee63858e7d292034a"
};

export const addReview = async ({username, reviewDetail}) => {
    const db = firebase.firestore();
    const timeStamp = new Date();
    await db.collection("reviews").doc().set({
        name : username,
        review : reviewDetail,
        time : timeStamp
    });
};

export const retrieveReviews = async () => {
    const allReviews = [];
    const db = firebase.firestore();
    await db.collection("reviews").orderBy('time', 'desc')
    .get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // console.log(doc.data());

            allReviews.push(doc.data());
        });
        console.log("from utils",allReviews);
    });
    return allReviews; 
}

firebase.initializeApp(config);


export default firebase;