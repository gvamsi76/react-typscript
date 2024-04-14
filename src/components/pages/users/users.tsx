
import { fetchUserData } from "../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../redux/store";
import Signup from "../signup/Signup";

function Users() {
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: any) => state?.usersList?.users);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <>
            <div>
                {user?.map((item: any) => {
                    return <li key={item?.id}>{item?.name}</li>;
                })}
            </div>
            <Signup />
        </>

    );
}

export default Users;
