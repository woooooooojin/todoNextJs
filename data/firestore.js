import {
    initializeApp
} from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore,
    doc,
    setDoc,
    Timestamp
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


//모든 할일 가져오기
export async function fetchTodos() {
    const querySnapshot = await getDocs(collection(db, "todos"));

    if(querySnapshot.empty){
        return [];
    }

    const fetchTodos = [];


    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);

        const aTodo = {
            id : doc.id,
            title : doc.data()["title"],
            is_done : doc.data()["is_done"],
            created_at : doc.data()["created_at"].toDate(),
        }

        fetchTodos.push(aTodo)
    });

    return fetchTodos
}

//할일 추가
export async function addTodo({title}) {
    
    const newTodoRef = doc(collection(db,'todos'))

    const createdAtTimestamp = Timestamp.fromDate(new Date())

    const newTodoData = {
        id: newTodoRef.id,
        title : title,
        is_done : false,
        created_at : createdAtTimestamp,
    }
    await setDoc(newTodoRef, newTodoData)

    return newTodoData
}



module.exports = { fetchTodos, addTodo }