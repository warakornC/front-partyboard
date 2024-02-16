import axios from "../config/axios";

export const updateUser = user => axios.patch('/user',user)
export const getTargetUserProfile = targetUserId => axios.get(`/user/${targetUserId}/profile`)