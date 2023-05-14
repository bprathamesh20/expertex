import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import { firestore } from '../firebaseConfig'
import { orderBy, query } from 'firebase/firestore'
import { toast } from 'react-toastify';



const dbRef = collection(firestore, "posts")

export const postStatus = async (data) => {

    try {
        const docRef = await addDoc(dbRef, data)
        console.log("Document written with ID: ", docRef.id);
        toast.success('Posted')
    } catch (e) {
        console.error("Error adding document: ", e);
        toast.error('Error')
    }
}
export const getPosts = () => {
    return new Promise((resolve, reject) => {
        const q = query(dbRef, orderBy('createdAt', 'desc'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const posts = []
            querySnapshot.forEach((doc) => {
                const post = { id: doc.id, ...doc.data() }
                posts.push(post)
            })
            resolve(posts)
        }, (error) => {
            console.error('Error getting documents: ', error)
            reject(error)
        })

        return unsubscribe
    })
}



