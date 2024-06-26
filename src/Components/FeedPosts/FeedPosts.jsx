import { Box, Center, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'
import { AiFillFrown } from 'react-icons/ai';


const FeedPosts = () => {
    const {isLoading, posts}= useGetFeedPosts();
    

   
    return (
        <Container maxW={'container.sm'} py={10} px={2}>
            {isLoading && [0, 1, 2].map((_, idx) => (
                <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10} />
                        <VStack gap={2} alignItems={'flex-start'}>
                            <Skeleton height={'10px'} w={'200px'} />
                            <Skeleton height={'10px'} w={'200px'} />
                        </VStack>
                    </Flex>
                    <Skeleton w={'full'}>
                        <Box h={'400px'}>Contents wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
            {!isLoading && posts.length> 0 && posts.map((post)=> <FeedPost key={post.id} post={post}  /> )}
            {!isLoading && posts.length===0 && (
                <Flex flexDir={'column'} alignItems={'center'}>
                
                <Text fontSize={30} color={'white'} fontWeight={300} mb={50} >
                
                    Looks like you have an empty feed!

                    Add friends through your suggested users---{">"}

                    
                </Text>
                <AiFillFrown size={60}  />
                </Flex>
            ) }

        </Container>
    )
}

export default FeedPosts
