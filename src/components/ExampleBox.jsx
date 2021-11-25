import React from 'react';
import { Box, Grid } from '@material-ui/core';

const ExampleBox = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Box 
                        bgcolor={'pink'}
                        p={3}
                        fontWeight={700}
                        textAlign={'center'}
                    >
                        XS12
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box 
                        bgcolor={'lightblue'}
                        p={3}
                        fontWeight={700}
                        textAlign={'center'}
                    >
                        XS12
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default ExampleBox;
