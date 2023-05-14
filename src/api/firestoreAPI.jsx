import { collection, addDoc } from 'firebase/firestore'
import { firestore } from '../firebaseConfig'

const dfRef = collection(firestore, "posts")

export const postStatus = async (data) => {
  try {
    const docRef = await addDoc(dfRef, data)
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

