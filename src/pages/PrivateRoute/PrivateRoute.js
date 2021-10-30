import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    console.log(isLoading, user, children)

    if (isLoading) {
        return <div className="flex w-screen min-h-screen justify center align-middle">
            <div className=" flex mx-auto items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
            </div>
        </div>
    };

    return (
        <Route
            {...rest}
            render={
                ({ location }) => user?.email ? children : <Redirect
                    to={
                        {
                            pathname: "/login",
                            state: { from: location }
                        }
                    }
                ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;