import React from "react"
import Typography from '@material-ui/core/Typography'


const TypographyExample = (props) => (
    <>
        <Typography variant="h1" color="primary">
            Parâmetro variante é um H1
        </Typography>
        <Typography variant="body1" color="secondary" align="center" paragraph>
            Lorem ipsum issum es calypsum
        </Typography>
        <Typography variant="body1" color="primary" align="center" gutterBottom>
            Lorem ipsum
        </Typography>
        <Typography variant="body1" color="initial" align="center">
            Lorem ipsum netflics elevenes dances
        </Typography>
    </>
);

export default TypographyExample;