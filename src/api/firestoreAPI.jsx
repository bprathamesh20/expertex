import { collection, addDoc, onSnapshot, doc,where } from 'firebase/firestore'
import { firestore } from '../firebaseConfig'
import { orderBy, query } from 'firebase/firestore'
import { toast } from 'react-toastify';



const dbRef = collection(firestore, "posts")
const userRef = collection(firestore, "users")

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
export const postUserData = async (data) => {

    try {
        const docRef = await addDoc(userRef, data)
        console.log("Document written with ID: ", docRef.id);
        toast.success('User updated')
    } catch (e) {
        console.error("Error adding document: ", e);
        toast.error('Error')
    }
}
export const getCurrentUser = () => {
    const userEmail = localStorage.getItem('userEmail');
  
    const q = query(userRef, where('email', '==', userEmail));
  
    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const userName = userData.name;
          console.log(userName);
          resolve(userName);
        });
      }, (error) => {
        console.error('Error getting documents: ', error);
        reject(error);
      });
  
      return unsubscribe;
    });
  };

  export const getSingleUser = (userEmail) => {
    const q = query(userRef, where('email', '==', userEmail));
    
    return new Promise((resolve, reject) => {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const userName = userData.name;
          resolve(userName);
        });
      }, (error) => {
        console.error('Error getting documents: ', error);
        reject(error);
      });
    
      return unsubscribe;
    });
  };

console.log(getSingleUser('prathamesh@mail.com'))
  
  
  
  
