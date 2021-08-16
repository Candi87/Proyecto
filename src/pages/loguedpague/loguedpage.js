import Menu from '../../components/menologeado/menu.js';
import FotosUsuarios from '../../components/componenetesmenunologueado/fotosUsarios';
import GetPhotosWall from '../../components/Wall/components/GetPhotosWall.js';

function LoguedMenu() {
    return (
        <div>
            <Menu />
            <FotosUsuarios />
            <GetPhotosWall />
        </div>
    );
}
export default LoguedMenu;
