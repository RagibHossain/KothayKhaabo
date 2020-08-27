import React, { useContext } from 'react'
import SideNav from '../Nav/SideNav'
import LoginForm from '../User/Login/LoginForm'
import RegisterForm from '../User/Register/RegisterForm'
import { observer } from 'mobx-react-lite'
import KothayKhaaboInfo from './KothayKhaaboInfo'
import { rootStoreContext } from '../../Common/Stores/rootStore'

const Home = () => {
    const rootStore = useContext(rootStoreContext);
    const {loginPage,registerPage} = rootStore.commonStore;
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
