import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function Card({ name, url }) {
    const [id, setId] = useState("")
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    useEffect(() => {
        axios.get(url).then((response => {
            setId(response.data.id)
        })
        )
            .catch((error) => {
                console.log(`Tu error es ${error}`)
            });

    }, [url])

    return (

        <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none flex flex-col justify-end ">
                <img
                    src={image}
                    alt={`La imagen de: ${name}`}
                    className="object-center object-cover h-5/6 w-5/6"
                />
            </div>
            <div className="mt-4">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <div>
                            <span aria-hidden="true"  className="p-3 font-semibold text-lg capitalize absolute inset-0" >
                            {name}
                            </span>
                        </div>
                    </h3>
                </div>
            </div>
        </div>

    )
}
