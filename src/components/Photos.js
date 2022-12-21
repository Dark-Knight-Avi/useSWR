import React, { useState } from 'react'
import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Photos = () => {
    const [page, setPage] = useState(1)
    const { data, error, isLoading } = useSWR(`https://api.unsplash.com/photos?page=${page}&client_id=ifxCq3W0WQAVgvSXd_COp71umx4L878xRVgGYyUa-l8`)

    if (isLoading) {
        return <div className='m-2'>Loading...</div>
    }

    if (error) {
        return <div className='m-2'>{error}</div>
    }
    return (
        <div className='flex p-5 justify-between items-start flex-col'>
            <p className='my-4 text-2xl font-bold'>page-{page}</p>
            <div className='flex justify-between items-center'>{data.map(((photo) => {
                return (
                    <img className='mx-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' key={photo.id} width={"100px"} src={photo.urls.raw} alt={photo.id} />
                )
            }))}
            </div>
            <div>
                <button className='m-3 px-3 py-2 bg-black text-white' onClick={() => page > 1 ? setPage(page - 1) : setPage(1)}>Previous</button>
                <button className='m-3 px-3 py-2 bg-black text-white' onClick={() => page < data.length ? setPage(page + 1) : setPage(data.length)}>Next</button>
            </div>
        </div>
    )
}

export default Photos