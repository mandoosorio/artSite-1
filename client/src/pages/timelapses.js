import React, { Component, useState } from "react";
// import Love from ".../public/Video/love.MOV.mp4";

class Time extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="jumbtron-fluid center">
                    <h2>Timelapses</h2>

                </div>
                <div className="row cards">
                    <div className="card" width="50%">
                    <video autoplay loop height="600px" controls="">
                    <source src='/Video/love.MOV.mp4"' type="video/mp4"/> 
                    </video>
                    </div>


                </div>
            </div>
        )
    }
}

export default Time;