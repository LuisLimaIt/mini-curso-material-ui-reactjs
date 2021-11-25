import React from 'react';
import { Box } from '@material-ui/core';

const ExampleBox = () => {
    return (
        <div>
            <Box
                color={'primary.main'}
            >
                Box
            </Box>
            <Box
                color={'primary.contrastText'}
                bgcolor={'primary.main'}
            >
                Box
            </Box>
            <Box
                color={'primary.contrastText'}
                bgcolor={'primary.main'}
                mt={2}
                px={5}
            >
                Box
            </Box>
            <Box
                my={2}
                p={5}
                border={2}
                borderColor={'error.main'}
            >
                Box
            </Box>
        </div>
    );
}

export default ExampleBox;
