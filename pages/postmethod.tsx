import Head from 'next/head'
import { useState } from 'react';


function Post (){
    const [users, setUsers] = useState([])

    const loadData = async ()=>{
        const res = await fetch('https://63ef09844d5eb64db0c21d13.mockapi.io/table')

        const data = await res.json()
        setUsers(data)
    }

    const submitData = async () =>{
        const res = await fetch('https://63ef09844d5eb64db0c21d13.mockapi.io/table',{
        method: 'Post',
        body: JSON.stringify({}),
        headers: {'content-Type': 'application.json'} 
    })
    
    const data = await res.json()
    debugger
    console.log(data)

    }

    const deleteData = async (id) =>{
        const res = await fetch(`https://63ef09844d5eb64db0c21d13.mockapi.io/table/${id}`,{
        method: 'DELETE',
    })
    const data = await res.json()
    debugger 
    console.log(data)
    loadData()
    }
    return(
        <div>
            <Head> 
                <title>Mock Api</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-3xl font-bold underline">Api post method</h1>
            <button onClick={submitData}>submit Data</button>
            
            <button onClick={loadData}>load input</button>
            {users.map(user => {
            return(
                <div key={user.id}>
                name for the id: <b>{user.id}</b> is <b>{user.name}</b>
                <button onClick={() => deleteData(user.id)}>Delete</button>
                </div> 
            )
            })}
        </div>
    )
}
export default Post;

