import ListOfResults from '../../search/components/ListOfResults';
import './PhotosWall.css';
import { useParams } from 'react-router-dom';

function GetPhotosWall() {
    const { id } = useParams();
    const keyword = id;

    return (
        <div>
            <ListOfResults keyword={keyword} />
        </div>
    );
}
export default GetPhotosWall;
