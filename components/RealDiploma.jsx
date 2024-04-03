import { Flex, Box, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import { useContext } from 'react';
import { RdaContext } from '@/utils';

import Browser from './Browser';
import BecomeVoter from './BecomeVoter';
import CreateCase from './CreateCase';
import DiplomaList from './DiplomaList';

import DiplomasTable from './DiplomasTable';
import Events from './Events';

const RealDiploma = () => {
    
    const bgColor = useColorModeValue('white', 'gray.800');
    const { page } = useContext(RdaContext);
    let content1;
    
        switch (page) {
            case 0:
                content1 = <CreateCase />
                break;
            case 1:
                content1 = <BecomeVoter />;
                break;
            case 2:
                content1 = <DiplomasTable/> 
                break;
            case 3:
                content1 = <Events/> 
                    break;
            default:
                content1 = <Box> I think you're lost ! </Box>;
        }
    


    return (
        <Flex marginTop='200px' direction="column" width="100%" height="100vh" overflowY="hidden" p={10} bg={bgColor}>
            <Box >
                <Browser />
            </Box>

            <Flex flex="1" marginTop='80px'  direction="column" alignItems='center' overflowY="hidden">
                {content1}
            </Flex>
        </Flex>
    );
}

export default RealDiploma;