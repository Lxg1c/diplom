import Image from "next/image";
import StarImage from "../../../../../public/star.svg";


type RatingProps = {
    rating: number;
};


const Rating = ({ rating }: RatingProps) => {
    const stars = Array(5).fill(0);

    return (
        <div className="flex items-center" aria-label={`Рейтинг: ${rating} из 5`}>
            {stars.map((_, i) => (
                <Image
                    key={i}
                    src={StarImage}
                    width={15}
                    height={15}
                    alt={i < rating ? "Заполненная звезда" : "Пустая звезда"}
                    className={i < rating ? "opacity-100" : "opacity-30"}
                />
            ))}
        </div>
    );
};

export default Rating;