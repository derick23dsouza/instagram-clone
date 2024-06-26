import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsBookmark, BsGrid3X3, BsSuitHeart } from 'react-icons/bs'

const ProfileTabs = () => {
    const [active, setActive]= useState('Posts');
    const handleOnClick=(e)=>{
        setActive(e.currentTarget.textContent) 
    }
  return (
    <Flex w={'full'} justifyContent={'center'} gap={{base:4, sm:10}} textTransform={'uppercase'} fontWeight={'bold'}>
       <Flex borderTop={active=='Posts'? '1px solid white' : null}  alignItems={'center'} p={3} gap={1} cursor={'pointer'} onClick={handleOnClick}>
            <Box fontSize={20}>
                <BsGrid3X3/>
            </Box>
            <Text fontSize={12} display={{base:'none', sm:'block'}} >
                Posts
            </Text>
       </Flex>

       <Flex borderTop={active=='Saved'? '1px solid white' : null} alignItems={'center'} p={3} gap={1} cursor={'pointer'} onClick={handleOnClick}>
            <Box fontSize={20}>
                <BsBookmark/>
            </Box>
            <Text fontSize={12} display={{base:'none', sm:'block'}} >
                Saved
            </Text>
       </Flex>

       <Flex borderTop={active=='Likes'? '1px solid white' : null} alignItems={'center'} p={3} gap={1} cursor={'pointer'} onClick={handleOnClick}>
            <Box fontSize={20}>
                <BsSuitHeart fontWeight={'bold'}/>
            </Box>
            <Text fontSize={12} display={{base:'none', sm:'block'}} >
                Likes
            </Text>
       </Flex>
       
        
    </Flex>
  )
}

export default ProfileTabs
