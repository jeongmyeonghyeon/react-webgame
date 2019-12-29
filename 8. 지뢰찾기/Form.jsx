import React, { useState, useCallback, useContext, memo } from 'react';
import { TableContext } from './MineSearch';
import { START_GAME } from './MineSearch';

const Form = memo(() => {

    const [row, setRow] = useState(10);
    const [col, setCol] = useState(10);
    const [mine, setMine] = useState(20);
    const { dispatch } = useContext(TableContext);

    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    }, [])

    const onChangeCol = useCallback((e) => {
        setCol(e.target.value);
    }, [])

    const onChangeMine = useCallback((e) => {
        setMine(e.target.value);
    }, []);

    const onClickBtn = useCallback(() => {
        dispatch({type: START_GAME, row, col, mine});
    }, [row, col, mine]);

    return (
        <>
            <input type='number' placeholder='세로' value={row} onChange={onChangeRow} />
            <input type='number' placeholder='가로' value={col} onChange={onChangeCol} />
            <input type='number' placeholder='지뢰' value={mine} onChange={onChangeMine} />
            <button onClick={onClickBtn}>시작</button>
        </>
    )
    
})

export default Form;