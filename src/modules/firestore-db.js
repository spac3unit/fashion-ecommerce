import firebase from "firebase";
// https://gist.github.com/danysantiago/7077003
// https://gist.github.com/dmnsgn/14d9f5d0c37870c83ba7e5d5b0653106#file-singletonmodulescopedinstance-js
const config = {
  apiKey: "AIzaSyDju_eZx6znDoFRoqhH4mS5fzENnWUTeOM",
  authDomain: "mst-shop.firebaseapp.com",
  databaseURL: "https://mst-shop.firebaseio.com",
  projectId: "mst-shop",
  storageBucket: "mst-shop.appspot.com",
  messagingSenderId: "981104301631"
};
firebase.initializeApp(config);
const settings = { timestampsInSnapshots: true };

class Api {
  constructor() {
    this._db = firebase.firestore();
    this._db.settings(settings);
  }

  addDocument = async (item, collection = "shoes") => {
    const docRef = await this._db.collection(collection).add(item);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  };
  getDocument = async (docId, collection = "shoes") => {
    const docRef = await this._db
      .collection(collection)
      .doc(docId)
      .get();
    const data = await docRef.data();
    return data;
  };
  getList = async (collection = "shoes") => {
    const docsList = [];
    const querySnapshot = await this._db.collection(collection).get();
    querySnapshot.forEach(item => {
      docsList.push({
        id: item.id,
        ...item.data()
      });
    });
    return docsList;
  };
}
export default new Api();
// https://github.com/ritwickdey/organic-shop/blob/master/src/app/shared/services/category.service.ts
// function getCategories() {
//   this.db.list('/categories', {
//     query: {
//       orderByChild: 'name'
//     }
//   })
// }
