import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {currentUserStatus} from "../store/selectors";
import {initAuth} from "../store/actions";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CenterXY from "../HOC/CenterXY";

const Auth = ({children}) => {
        const currentUserStatus_ = useSelector(currentUserStatus);
        const dispatch = useDispatch();
        useEffect(async () => {
            await dispatch(initAuth());
        }, [])

        if (currentUserStatus_ == 'FETCHING')
            return (
                <CenterXY>
                    <CircularProgress />
                </CenterXY>
            )

        return (
            <Fragment>
                {children}
            </Fragment>
        )
    }
;

export default Auth;