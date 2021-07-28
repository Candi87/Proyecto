import { AiOutlineLike } from 'react-icons/ai';

function Button({ id, children, onClick }) {
    return (
        <button data-testid={id} onClick={onClick} className="like">
            {children}
            <AiOutlineLike />
        </button>
    );
}

export { Button };
