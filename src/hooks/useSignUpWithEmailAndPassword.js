import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,,
        loading, 
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast();
    const loginUser = useAuthStore(state=> state.login);
    //const logoutUser= useAuthStore(state=>state.logout)

    const signup = async (inputs) => {
        if (!inputs.email || !inputs.username || !inputs.password || !inputs.fullName) {
            showToast("Error", "Please fill all the fields", "error")
            return;
        }

        const usersREf= collection(firestore, 'users');
        const q= query( usersREf, where('username', '==', inputs.username));
        const querySnapshot= await getDocs(q);

        if(!querySnapshot.empty){
            showToast('Error', 'Username already exists', 'error');
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser && error) {
                showToast("Error", error.message, "error")
                return;
            }
            else if (newUser) {
                const userDocument = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullName: inputs.fullName,
                    bio: '',
                    profilePicURL: '',
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()

                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
                localStorage.setItem("user-info", JSON.stringify(userDocument))
                loginUser(userDocument)
            }

        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }

    if (error) {
        showToast("Error", error.message, "error")
    }
    return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword
