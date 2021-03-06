import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFinderStatus} from "../../store/slices";
import {find} from "../../store/actions";
import useDebounce from "../../customHooks/useDebounce";
import * as selectors from "../../store/selectors";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const FinderInput = ({handleFinder}) => {

    const finderStatus = useSelector(selectors.finderStatus);
    const dispatch = useDispatch();
    const searchRef = useRef();
    const handleChange = async (event) => {
        const text = event.target.value.trim();
        if (text != '') {
            dispatch(find(text))
        } else {
            dispatch(setFinderStatus('INIT'));
        }
    }

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    const handleDeleteButton = () => {
        dispatch(setFinderStatus('INIT'));
     }

     useEffect(()=>{
         if(finderStatus=='INIT'){
             searchRef.current.value = '';
         }
     },[finderStatus])

    const handleChangeDebounce = useDebounce(handleChange, 300);

    return (
        <Box component="form" >
            <TextField
                noValidate
                autoComplete='off'
                sx={{width: '100%'}}
                placeholder="Найти..."
                defaultValue=''
                inputRef={searchRef}
                onChange={handleChangeDebounce}
                InputProps={{
                    onKeyDown: onKeyDown,
                    endAdornment:
                        <InputAdornment position="end">
                            {(finderStatus == "INIT")
                                ? <SearchIcon sx={{cursor:"pointer"}}/>
                                : <CloseRoundedIcon onClick={handleDeleteButton} sx={{cursor:"pointer"}}/>
                            }
                        </InputAdornment>
                }}

            />
        </Box>
    );
};

export default FinderInput;