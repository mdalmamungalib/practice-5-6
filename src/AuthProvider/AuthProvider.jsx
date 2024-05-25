import { createContext } from "react";
import app from "../FireBase.Config/FireBase.Config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const createUSer  = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUSer,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;