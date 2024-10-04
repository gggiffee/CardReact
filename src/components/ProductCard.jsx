import React from "react";

const ProductCard = ({users}) => {
    return (
        <div className="cars">
            {users.map((user) => (
                <div className="car">
                    <h2>Карточки</h2>
                    <p>id:{user.id}</p>
                    <p>имя:{user.name}</p>
                    <p>номер телефона:{user.phone}</p>
                    <p>лет:{user.age}</p>
                    <p>почта:{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductCard