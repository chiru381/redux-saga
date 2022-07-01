import React from 'react';
import { Redirect, useHistory, useLocation, useParams, useRouteMatch } from 'react-router';

function Dashboard() {
    const history=useHistory();
    const location=useLocation();
    const {id}=useParams();
    const query=new URLSearchParams(useLocation().search);
    console.log(query.get("location"));
    console.log(query.get("name"));
    function Blog(){
        let match=useRouteMatch('/dashboard/blog');
        if(match){
            return<div>this is blog</div>;
        }else{
            return null
        }
    }
    return (
        <>
        <h1>Welcome to Dashboard</h1>
        <Blog />
        {/* {location.pathname}
        {id} */}
        <button onClick={()=>history.push('/about')}>Navigate About</button>
        {/* <Redirect to="/login" /> */}
        </>
    )
}

export default Dashboard;