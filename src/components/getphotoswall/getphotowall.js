import ListOfImages from '../Wall/components/ListofImages';
import './getPhotosWall.css';

function GetPhotosWall() {
    return (
        <div className="collagePhotos">
            <ListOfImages keyword={''} />
        </div>
    );
}

export default GetPhotosWall;
