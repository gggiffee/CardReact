import React from "react";
import ProductCard from "./ProductCard";

const users = [
    {
        id: 1,
        name: "Rahim",
        phone: 996436578,
        age: 43,
        email:'ahkfakjhsf@gmail'
    },
    {
        id: 2,
        name: "Vaenera" ,
        phone: 996382748,
        age: 99,
        email:'ahkfakjhsf@gmail'
    },
    {
        id: 3,
        name:"Rapuncel" ,
        phone: 996235566,
        age:111,
        email:'ahkfakjhsf@gmail'
    },
    {
        id: 4,
        name:"Luna" ,
        phone: 9962859659,
        age:24,
        email:'ahkfakjhsf@gmail'
    },
    {
        id: 5,
        name:"Riba" ,
        phone:996373737 ,
        age:38,
        email:'ahkfakjhsf@gmail'
    },
    {
        id: 6,
        name:"Lapa" ,
        phone: 996274858,
        age:34,
        email:'ahkfakjhsf@gmail'
    }
]

const App = () => {
    return (
        <div>
            <ProductCard users ={users}/>
        </div>
    )
}

export default App