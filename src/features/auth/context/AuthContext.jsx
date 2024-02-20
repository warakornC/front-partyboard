import { createContext, useEffect, useState } from "react";
import { getToken } from "../../../utils/local-storage";

import * as authApi from "../../../api/auth"
import * as userApi from "../../../api/user"
export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    const[authUser,setAuthUser] = useState(null);
    const [iniTailLoading, setIniTailLoaDing] = useState(true);

    useEffect(() => {
        if(getToken()){
            authApi
            .fetchMe()
            .then(res =>{
                setAuthUser(res.data.user)
            })
            .catch(err =>{
                toast.error(err.response?.data.message)
            })
            .finally(() => setIniTailLoaDing(false))

        }else {
            setIniTailLoaDing(false)
        }
    },[])

    const register = async user => {
        const res = await authApi.register(user);
        setAuthUser(res.data.newUser);
        storeToken(res.data.accessToken);
      };
    
      const login = async credential => {
        const res = await authApi.login(credential);
        setAuthUser(res.data.user);
        storeToken(res.data.accessToken);
      };
    
      const logout = () => {
        setAuthUser(null);
        clearToken();
      };
    
      const updateUser = async user => {
        const res = await userApi.updateUser(user);
        setAuthUser(prev => ({ ...prev, ...res.data }));
      };
    
      return (
        <AuthContext.Provider
          value={{ register, authUser, login, iniTailLoading, logout, updateUser }}
        >
          {children}
        </AuthContext.Provider>
      );
    }
