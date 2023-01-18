import React ,{useContext}from "react";
import {UserContext} from './App';
export function Data(){
    const user = useContext(UserContext);

return(<div>
    {/*<p>Name:{localStorage.getItem('user')}</p>
                <Button
                    variant="contained"
                    onClick={() => {
                        //setUserProfile(null);
                        localStorage.removeItem("user")

                    }}
                > Logout
                </Button>*/}
                {user}
                </div>
)
}
