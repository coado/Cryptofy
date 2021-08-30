import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component'
import Label from '../../components/Label/Label.component';

const SignInAndSignUpPage = ({status, message}) => {
    const [showLabel, setShowLabel] = useState(false);
    useEffect(() => {
        if(status) {
            setShowLabel(true);
        }
    }, [status])
    
    return (
    
    <div className='sign'>
    {
        showLabel ? <Label hideLabel={() => setShowLabel(false)} status={status} message={message}/> : null
    }
        <SignIn />
        <SignUp />
    </div>
  
)};

const mapStateToProps = state => ({
    status: state.error.loginResult.status,
    message: state.error.loginResult.message

});

export default connect(mapStateToProps)(SignInAndSignUpPage);