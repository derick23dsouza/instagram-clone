import { Alert, AlertIcon, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';


const Login = () => {
    const [inputs, setInput] = useState({
        email: '',
        password: '',
        //confirmPassword: ''
    });

    const { loading, error, login } = useLogin();


    return (
        <>
            <Input
                placeholder='Email'
                fontSize={14}
                type='email'
                size={'sm'}
                value={inputs.email}
                onChange={(e) => { setInput({ ...inputs, email: e.target.value }) }}
            />
            <Input
                placeholder='Passsword'
                fontSize={14}
                size={'sm'}
                type='password'
                value={inputs.password}
                onChange={(e) => { setInput({ ...inputs, password: e.target.value }) }}
            />

            {error && (
                <Alert status='error' fontSize={13} borderRadius={4} >
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}

            <Button w={"full"} colorScheme={'blue'} size={'sm'} fontSize={14}
                isLoading={loading}
                onClick={() => login(inputs)}>
                Log in
            </Button>
        </>
    )
}

export default Login
