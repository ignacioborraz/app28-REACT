import {useEffect} from 'react'
import {Route,Routes} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

import Index from './pages/Index'
import VariantPage from './pages/VariantPage'
import CreateCompany from './pages/CreateCompany'
import GetCompanies from './pages/GetCompanies'
import DetailCompany from './pages/DetailCompany'
import CreateJob from './pages/CreateJob'
import GetJobs from './pages/GetJobs'
import DetailJob from './pages/DetailJob'
import User from './pages/User'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MySnackBar from './components/MySnackBar'

import options from './media/options'
import optionsNav from './media/optionsNav'

import './styles/styles.css'

import userActions from './redux/actions/userActions'

export default function App() {

    const user = useSelector(store => store.userReducer.user)
    console.log(user)
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')!== null) {
            const token = localStorage.getItem("token")
            //console.log(token)
            dispatch(userActions.verifyToken(token))
        }
    },[])

    return (
        <div className='index'>
            {user ?
                (user.user.role==='admin' ? <NavBar pages={optionsNav.admin}/> :
                (user.user.role==='owner' ? <NavBar pages={optionsNav.owner}/> : 
                user.user.role==='user' && <NavBar pages={optionsNav.user}/>)) :
                <NavBar pages={optionsNav.non}/>}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/createCompany" element={user ? (user.user.role==="admin" && <CreateCompany options={options.company}/>) : (<VariantPage text={"NOT FOUND"}  back={{to: "",text: "back to home"}}/>)} />
                <Route path="/createdCompany" element={user ? (user.user.role==="admin" && <VariantPage text={"COMPANY CREATED!"} back={{to: "getCompanies",text: "show companies"}}/>) : (<VariantPage text={"NOT FOUND"}  back={{to: "",text: "back to home"}}/>)} />
                <Route path="/createJob" element={user ? (user.user.role!=="user" && <CreateJob options={options.job}/>) : (<VariantPage text={"NOT FOUND"}  back={{to: "",text: "back to home"}}/>)} />
                <Route path="/createdJob" element={user ? (user.user.role!=="user" && <VariantPage text={"JOB CREATED!"} back={{to: "getJobs",text: "show jobs"}}/>) : (<VariantPage text={"NOT FOUND"}  back={{to: "",text: "back to home"}}/>)} />
                <Route path="/create" element={<User options={options.user}/>} />
                <Route path="/getCompanies" element={<GetCompanies />} />
                <Route path="/detailCompany/:id" element={<DetailCompany bgImage="bgDetailCompany" />} />
                <Route path="/getJobs" element={<GetJobs />} />
                <Route path="/detailJob/:id" element={<DetailJob bgImage="bgDetailJob" />} />
                <Route path="/signUp" element={user ? <Index /> : <SignUp options={options.signUp}/>} />
                <Route path="/signUpUser" element={user ? <Index /> : <VariantPage text={"USER CREATED!"} back={{to: "signIn",text: "please SIGN IN!"}}/>} />
                <Route path="/signIn" element={user ? <VariantPage text={"WELCOME!"} back={{to: "",text: "back to home"}}/> : <SignIn options={options.signIn}/>} />
                <Route path="/*" element={<VariantPage text={"NOT FOUND"}  back={{to: "",text: "back to home"}}/>} />
            </Routes>
            <MySnackBar />
            <Footer />
        </div>
    )
}