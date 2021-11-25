import React from 'react';
import { withWidth, Typography, Hidden, Button } from '@material-ui/core';

const Oculto = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Largura: {props.width}

            </Typography>
            {/* Oculta quando o tamanho é igual ou inferior a xs */}
            <Hidden xsDown>
                <Button variant="contained" color="primary">
                    XS
                </Button>
            </Hidden>
            
            {/* Oculta quando o tamanho é igual ou inferior a sm */}
            <Hidden smDown>
                <Button variant="contained" color="secondary">
                    sm
                </Button>
            </Hidden>

            {/* Oculta quando o tamanho é igual ou superior a md */}
            <Hidden mdUp>
                <Button variant="contained" color="primary">
                    md
                </Button>
            </Hidden>

            {/* Oculta somente no(s) tamanho(s) de tela informado(s) */}
            <Hidden only={['lg', 'md']}>
                <Button variant="contained" color="primary">
                    lg
                </Button>
            </Hidden>


        </div>
    );
}

export default withWidth()(Oculto);
