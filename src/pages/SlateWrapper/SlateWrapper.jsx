import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getElementList } from '../../redux/action';
import ElementContainer from '../../components/ElementCopntainer/ElementContainer';
import './SlateWrapper.css';

const SlateWrapper = () => {
    const dispatch = useDispatch();
    const titleList = useSelector(state => state)

    useEffect(() => {
        console.log("the titleList is:", titleList.title, Array.isArray(titleList.title));
    }, [titleList])

    useEffect ( () => {
        dispatch(getElementList());
    })
    return (
        <div className="slatecontainer">
            {/* <ElementContainer />    */}
            {/* {titleList.titles.map((item) => <ElementContainer item={item.title}/>)} */}
        </div>
    )
}

export default SlateWrapper
