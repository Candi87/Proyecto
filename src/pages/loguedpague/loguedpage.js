import Menu from '../../components/menologeado/menu.js';
import FotosUsuarios from '../../components/componenetesmenunologueado/fotosUsarios';
import FotosMuro from '../../components/componenetesmenunologueado/fotosmuro';
// import Comment from '../../components/comentario/Comentario';
function LoguedMenu() {
    return (
        <div>
            <Menu />
            <FotosUsuarios />
            <FotosMuro />
            {/* <Comment /> */}
        </div>
    );
}
export default LoguedMenu;
