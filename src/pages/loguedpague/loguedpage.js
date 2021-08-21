import Menu from '../../components/menologeado/menu.js';
import FotosUsuarios from '../../components/componenetesmenunologueado/fotosUsarios';
import ListOfResults from '../../components/search/components/ListOfResults';

function LoguedMenu({ keyword }) {
    return (
        <div>
            <Menu />
            <FotosUsuarios />
            <ListOfResults keyword={keyword} />
        </div>
    );
}
export default LoguedMenu;
