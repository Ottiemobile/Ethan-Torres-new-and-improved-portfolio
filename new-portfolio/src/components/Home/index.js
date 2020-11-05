import React from "react";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="col-lg-7">
                    <img 
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src="../assets/images/profile-pic.jpg"
                        alt="The man himself: Ethan Torres"
                    ></img>
                </div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">HOME</h1>
                    <p>Hello and welcome to Ethan's portfolio. this was entirely made 
                        from React.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Home;