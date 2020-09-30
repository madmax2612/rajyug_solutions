import React from 'react'
import axios from "axios";

export const URL="http://18.222.54.135:8080/api/"


const ENDPOINTS={
    AdminLogin:'AdminLogin',
    GetUsersProfile:"GetUsersProfile",
    GetAllTier:"GetAllTier",
    ChannelPartnerCount:"ChannelPartnerCount",
    AddTier:"AddTier",
    EditTier:"EditTier",
    AddUsers:"AddUsers",
    EditUserProfile:"EditUserProfile",
    DeleteTier:"DeleteTier",
    GetStates:"GetStates",
    DeactivateUser:"DeactivateUser",
    Upload:"UploadProfileImage",
    GetNotification:"GetNotification",
    Resetpassword:"Resetpassword"
}


export const AdminLogin =async body => {
    return await axios.post(
        URL + ENDPOINTS.AdminLogin,
        body,
    
        {
          timeout: 3 * 60 * 1000
        }
      );
    
}

export const getUsersProfile =async () => {
    return await axios.get(
        URL + ENDPOINTS.GetUsersProfile, 
        {
          timeout: 3 * 60 * 1000
        }
      );
    
}

export const addUser=async (body)=>{
    return await axios.post(
        URL + ENDPOINTS.AddUsers,
        body,
    
        {
          timeout: 3 * 60 * 1000
        }
      );
}

export const deactivateUser =async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.DeactivateUser,
      body,
  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const editUsers=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.EditUserProfile,
      body,
      {
        timeout: 3 * 60 * 1000
      }
    );
}


export const getStates= async ()=>{
  return await axios.get(
      URL + ENDPOINTS.GetStates,
      {
          timeout: 3*60 *1000
      }
  )
}

export const getAllTier= async ()=>{
    return await axios.get(
        URL + ENDPOINTS.GetAllTier,
        {
            timeout: 3*60 *1000
        }
    )
}

export const addTier=async (body)=>{
    return await axios.post(
        URL + ENDPOINTS.AddTier,
        body,
    
        {
          timeout: 3 * 60 * 1000
        }
      );
}
export const editTier=async (body)=>{
    return await axios.post(
        URL + ENDPOINTS.EditTier,
        body,
    
        {
          timeout: 3 * 60 * 1000
        }
      );
}
export const deleteTier=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.DeleteTier,
      body,
  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const profileUpload=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.Upload,
      body,
  
      {
        timeout: 3 * 60 * 1000
      }
    );
}

export const getChannelPartner =async () => {
    return await axios.get(
        URL + ENDPOINTS.ChannelPartnerCount, 
        {
          timeout: 3 * 60 * 1000
        }
      );
    
}
export const getNotification =async (body) => {
  return await axios.post(
      URL + ENDPOINTS.GetNotification, 
      body,
      {
        timeout: 3 * 60 * 1000
      }
    );
  
}
export const resetPassword =async (body) => {
  return await axios.post(
      URL + ENDPOINTS.Resetpassword, 
      body,
      {
        timeout: 3 * 60 * 1000
      }
    );
  
}
