import { Box, Flex, Spinner } from '@chakra-ui/react'
import React, { Children } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import Navbar from '../../Components/Navbar/Navbar'

const PageLayout = ({children}) => {
  const{pathname}= useLocation();
  const[user, loading]= useAuthState(auth);
  const canRenderSidebar= pathname!=="/auth" && user ;
  const canRenderNavbar=!user && !loading && pathname !=="/auth";
  
  const checkingUserisAuth= !user && loading;
  if(checkingUserisAuth) return <PageLayoutSpinner/>


  return (

    <Flex flexDir={canRenderNavbar? 'column': 'row'}>
        {/* sidebar on the left */}

        {canRenderSidebar ? (
            <Box w={{base:"70px", md:"240px"}}>
            <Sidebar/>
        </Box>
        ) : null}
        
        {canRenderNavbar? <Navbar/> : null }
        {/* the page content on the right */}

        <Box flex={1} w={{base: "calc(100%-70px)", md:"calc(100%-240px)"}} mx={'auto'}>
            {children}

        </Box>
    </Flex>
  )
}

export default PageLayout

const PageLayoutSpinner=()=>{
  return(
<Flex flexDir={'column'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
  <Spinner size={'xl'}/>
</Flex>

  )
}