import React from 'react';
import Delete from '../Delete/Delete';
import TinyMce from '../Tinymce/Tinymce';
import Sidebar from '../LeftPanel/Sidebar';
import Settings from '../SettingsPanel/Settings';
import './ElementContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParagraph, faComment, faTrashAlt, faExpandAlt, faTram } from '@fortawesome/free-solid-svg-icons';

const ElementContainer = ({item}) => {

    const reactPage = () => {
        window.open("https://reactjs.org/");
    }

    return (
        <div className="element_content">
            <div>
                <Sidebar />
            </div>
            <div className="element_container">
                <div className="p_del_exp">
                    <div className="p">
                        <FontAwesomeIcon icon={faParagraph} color="white"/>
                        {/* <button>P</button> */}
                    </div>
                    <div className="delete">
                        <FontAwesomeIcon icon={faTrashAlt} color="white"/><Delete />
                    </div>
                    <div className="expand">
                        <FontAwesomeIcon icon={faExpandAlt} color="white"/><button onClick={reactPage}>Expand</button>
                    </div>
                </div>
                <div className="tinymce">
                    <TinyMce title={item}/>
                </div>
                <div className="cmt_tcmicon">
                    <div className="comment">
                        <FontAwesomeIcon icon={faComment} color="white"/><button>Comment</button>
                    </div>
                    <div className="tcmicon">
                        <FontAwesomeIcon icon={faTram} color="white"/><button>TCM Icon</button>
                    </div>
                    {/* <div className="ele_name1">Element Container</div> */}
                </div>
            </div>
            <div >
                <Settings />
            </div>  
        </div>
    )
}

export default ElementContainer
