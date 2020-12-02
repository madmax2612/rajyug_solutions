import React from 'react'
import axios from "axios";

// export const URL="http://18.222.54.135:8080/api/"
// export const URL="http://18.216.36.135:8080/api/"
export const URL="http://18.222.119.223:8080/api/"


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
    Resetpassword:"Resetpassword",
    Advertisement:"GetAdvertisement",
    AddAdvertisement:"UploadAdvertisement",
    EditAdvertisment:'EditAdvertisement',
    DeleteAdvertisement:'DeleteAdvertisement',
    UploadRewards:"UploadRewards",
    createRewards:"createRewards",
    ViewRewards:"ViewRewards",
    Preview:"Preview",
    UpdateRewards:"UpdateRewards",
    Forgotpassword:"Forgotpassword",
    DeleteRewards:"DeleteRewards",
    ActiveUser:"ActiveUser",
    ViewSiteAdmin:"ViewSiteAdmin",
    AddSiteAdmin:"AddSiteAdmin",
    EditSiteAdmin:"EditSiteAdmin",
    QuaterlyDropdown:"QuaterlyDropdown",
    QuaterlyReport:"QuaterlyReport",
    GraphQuarterly:"GraphQuarterly",
    SeenNotification:"SeenNotification"
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

export const getSiteAdmin =async (data) => {
  return await axios.post(
      URL + ENDPOINTS.ViewSiteAdmin,
      data, 
      {
        timeout: 3 * 60 * 1000
      }
    );
  
}
export const createSiteAdmin =async (data) => {
  return await axios.post(
      URL + ENDPOINTS.AddSiteAdmin,
      data, 
      {
        timeout: 3 * 60 * 1000
      }
    );
  
}
export const UpdateSiteAdmin=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.EditSiteAdmin,
      body,
  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const getUsersProfile =async (data) => {
    return await axios.post(
        URL + ENDPOINTS.GetUsersProfile,
        data, 
        {
          timeout: 3 * 60 * 1000
        }
      );
    
}
export const Forgotpassword =async (data) => {
  return await axios.post(
      URL + ENDPOINTS.Forgotpassword,
      data, 
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
export const ActivateUser =async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.ActiveUser,
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
export const preview=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.Preview,
      body,
  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const UpdateRewards=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.UpdateRewards,
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
export const getAdvertisement =async (body) => {
  return await axios.post(
      URL + ENDPOINTS.Advertisement, 
      body,
      {
        timeout: 3 * 60 * 1000
      }
    );
  
}
export const addAdvertisment=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.AddAdvertisement,
      body,  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const editAdvertisment=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.EditAdvertisment,
      body,  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const deleteAdvertisment=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.DeleteAdvertisement,
      body,  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const AddRewards=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.UploadRewards,
      body,
  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const createRewards=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.createRewards,
      body,
  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const deleteRewards=async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.DeleteRewards,
      body,
  
      {
        timeout: 3 * 60 * 1000
      }
    );
}
export const getRewards =async (body) => {
  return await axios.post(
      URL + ENDPOINTS.ViewRewards, body,
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

export const seenNotification =async (body) => {
  return await axios.post(
      URL + ENDPOINTS.SeenNotification, 
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
export const getQuaterlyDropDown= async ()=>{
  return await axios.get(
      URL + ENDPOINTS.QuaterlyDropdown,
      {
          timeout: 3*60 *1000
      }
  )
}
export const getQuaterlyReport= async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.QuaterlyReport,body,
      {
          timeout: 3*60 *1000
      }
  )
}
export const getGraphQuaterly= async (body)=>{
  return await axios.post(
      URL + ENDPOINTS.GraphQuarterly,body,
      {
          timeout: 3*60 *1000
      }
  )
}
