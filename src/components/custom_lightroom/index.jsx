import React from 'react';

function MyLightroom(props) {
    return (
        <div className="modal fade" id="lightRoom" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <span data-bs-dismiss="modal" aria-label="Close">&times;</span>
                    </div>
                    <div className="modal-body">
                        <div className="img_wrapper">
                            <img src={props.url} className="lightroom_img  img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyLightroom;