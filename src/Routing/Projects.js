import React, { useState } from 'react';
import {Link, useHistory, useRouteMatch} from 'react-router-dom';

function Projects() {
    const [projectId, setProjectId]=useState("");
    let match=useRouteMatch();
    let history=useHistory();

    const redirect=(e)=>{
        e.preventDefault();
           history.push(`${match.url}/${projectId}`);
    }
    return (
        <>
        <h1>My Projects</h1>
        <nav className="navbar navbar-expand-lg ">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to={`${match.url}/chat-application`} title="Chat app" className="nav-link text-primary rounded">
                        Chat App
                    </Link>
                    <Link to={`${match.url}/ecommerce-application`} className="nav-link text-info rounded" >
                        Ecommerce App
                    </Link>
                </li>
            </ul>
        </nav>
        <form onSubmit={redirect}>
            <input type="text" value={projectId} onChange={(e)=>setProjectId(e.target.value)} />
            <input type="submit">submit</input>
        </form>
        </>
    )
}

export default Projects;