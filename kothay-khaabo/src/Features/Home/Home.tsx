import React, { useContext } from 'react'
import SideNav from '../Nav/SideNav'
import LoginForm from '../User/Login/LoginForm'
import { userStoreContext } from '../../Common/Stores/userStore'
import RegisterForm from '../User/Register/RegisterForm'
import { observer } from 'mobx-react-lite'
import KothayKhaaboInfo from './KothayKhaaboInfo'

const Home = () => {
    const {loginPage,registerPage} = useContext(userStoreContext);
    return (
        <div>
            <SideNav/>
            {!loginPage && !registerPage && <KothayKhaaboInfo />}
            {loginPage && <LoginForm /> }
            {registerPage && <RegisterForm />}
            
        </div>
    )
}

export default observer(Home)
