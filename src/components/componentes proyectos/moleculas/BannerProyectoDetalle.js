import Banner from '../../../assets/ejemploBannerProyecto.jpeg';
import { Box } from '@material-ui/core';
import './BannerProyectoDetalle.css';


function BannerProyectoDetalle() {
    return (
        <Box className="banner-container-detalle">
            <img className="banner-header-detalle"src={Banner} alt=" "/>
        </Box>
    );
}

export default BannerProyectoDetalle