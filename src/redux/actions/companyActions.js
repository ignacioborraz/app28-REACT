import axios from 'axios'
import apiUrl from '../../url'


const companyActions = {

    createCompany: (formData) => {
        return async(dispatch,getState) => {
            try {
                await axios.post(apiUrl+'apiJobs/company',formData)    
            } catch(error) {
                console.log(error)
            }            
        }
    },

    getCompanies: () => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.get(apiUrl+`apiJobs/company`)
                let sortedRes = res.data.response.sort((a,b)=>b.nameCompany-a.nameCompany)
                dispatch({type:'GET_COMPANIES', payload: sortedRes})
            } catch(error) {
                console.log(error)
            }
        }
    },

    getOneCompany: (id) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.get(apiUrl+`apiJobs/company/${id}`)
                dispatch({type:'GET_ONE_COMPANY', payload:res.data.response})
            } catch(error) {
                console.log(error)
            }
        }
    },

    putCompany: (id,data) => {
        return async(dispatch, getState) => {
            try {
                await axios.put(apiUrl+`apiJobs/company/${id}`,data)
            } catch(error) {
                console.log(error)
            }
        }
    },

    deleteCompany: (id) => {
        return async(dispatch, getState) => {
            try {
                await axios.delete(apiUrl+`apiJobs/company/${id}`)
            } catch(error) {
                console.log(error)
            }
        }
    }

}

export default companyActions