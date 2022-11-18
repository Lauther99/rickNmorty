import '../assets/style/card.css'
import CardItem from './CardItem';

const Card = ({location}) => {

    return (
        <ul className='cards-container'>
            {
                location.residents?.map((url) => (
                    <CardItem key={url} url={url} />
                ))
            }
        </ul>
    );
};

export default Card;
