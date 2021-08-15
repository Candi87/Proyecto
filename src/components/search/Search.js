import './search.css';
import ListOfResults from './components/ListOfResults';
import { useState } from 'react';
import Menu from '../../components/menologeado/menu.js';

function Search() {
    const [keyword, setKeyword] = useState('');

    const handleChange = (event) => {
        setKeyword(event.target.value);
    };

    const none = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Menu />
            <div className="searchpage">
                <form onSubmit={none}>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Buscar.."
                        value={keyword}
                    />
                </form>
                <p>Resultados encontrados para `{keyword}`</p>
                <div className="showsearch-container">
                    <ListOfResults keyword={keyword} />
                </div>
            </div>
        </div>
    );
}
export default Search;
