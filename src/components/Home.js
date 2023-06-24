import React, { useEffect, useState } from 'react';
import {
    Link
} from 'react-router-dom';

const Home = () => {

    const url1 = "https://i.pinimg.com/originals/f5/65/00/f5650054f7ef09ff10af080918ea726a.jpg"
    const divStyle1 = {
        backgroundImage: `url(${url1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
        width: '100vw'
    };
    const url2 = "https://wallpapercave.com/wp/wp4586995.jpg"
    const divStyle2 = {
        backgroundImage: `url(${url2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '160vh', // Adjust the height as needed
        width: '100vw'
    };
    const url3 = "https://wallpaperaccess.com/full/2552172.jpg"
    const divStyle3 = {
        backgroundImage: `url(${url3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
        width: '100vw'
    };
    const [content, setContent] = useState([]);
    const feed = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f9de63ebb91841658bb36cd3f3792906&page=1&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setContent(parsedData.articles)
    }
    useEffect(() => {
        feed()
    }, []);



    return (

        <div >
            <div style={divStyle1}>
                <p className="text-start mx-5 fw-bold " style={{ color: "white", marginTop: '56px' }}>
                    <div className="container text-start">
                        <div className="row">
                            <div className="row">
                                <div className="col my-3 py-5" style={{ fontFamily: 'serif', fontSize: '90px' }}>
                                    Presenting Spine Chilling Stories
                                </div>
                            </div>
                            <div className="col ">
                                <p style={{ color: "white", fontFamily: 'serif', fontSize: '45px' }}>THE MYSTERY SYRINGE <span style={{ color: 'red' }}> KILLER</span>  </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img style={{ width: '600px' }} src="https://64.media.tumblr.com/tumblr_m1oedp321Y1r8mdebo1_r1_1280.jpg" alt=""></img>
                            </div>
                        </div>
                    </div>
                </p>
            </div>

            <div  style={divStyle2}>
                <p className="text-center pt-4" style={{ fontSize: '70px', color: 'yellow', fontWeight: 'bold' }}>Today's Feed</p>

                <div className="row" style={{ padding: '10px 300px' }}>

                     {
                        content.map((element) => {
                            return <div class="card my-3 col-md-4" style={{ backgroundColor: '#232121' }}>
                        <img src={element.urlToImage} class="card-img-top" alt="" style={{ height: '300px', width: 'auto' }} />
                        <div class="card-body">
                            <h5 class="card-title" style={{ color: 'white' }}>{element.title}</h5>
                            <p class="card-text" style={{ color: 'white' }}>{element.description}</p>

                        </div>
                    </div>
                        })
                    } 
                </div>

            </div>

            <div style={divStyle3}>
                <section className="container py-4" >
                    <p className=" fw-bold text-center" style={{ fontFamily: 'serif', fontSize: '60px', color: 'white' }}>Hot Topics :</p>
                    <div className="row">
                        <div className="col-4">
                            <div className="card mb-3">
                                <div className="card-body" style={{ height: '170px', backgroundColor: 'yellow' }}>
                                    <Link to="/technology"><h3 className="card-title text-center py-5" style={{ fontSize: '50px' ,color:'black'}}>Technology</h3></Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card mb-3">
                                <div className="card-body" style={{ height: '170px', backgroundColor: 'yellow' }}>
                                <Link to="/business"> <h3 className="card-title text-center py-5" style={{ fontSize: '50px',color:'black' }}>Business</h3></Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card mb-3">
                                <div className="card-body" style={{ height: '170px', backgroundColor: 'yellow' }}>
                                <Link to="/entertainment"> <h3 className="card-title text-center py-5" style={{ fontSize: '50px' ,color:'black'}}>Entertainment</h3></Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card mb-3">
                                <div className="card-body" style={{ height: '170px', backgroundColor: 'yellow' }}>
                                <Link to="/general"> <h3 className="card-title text-center py-5" style={{ fontSize: '50px' ,color:'black'}}>General</h3></Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card mb-3">
                                <div className="card-body" style={{ height: '170px', backgroundColor: 'yellow' }}>
                                <Link to="/health"><h3 className="card-title text-center py-5" style={{ fontSize: '50px',color:'black' }}>Health</h3></Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card mb-3">
                                <div className="card-body" style={{ height: '170px', backgroundColor: 'yellow' }}>
                                <Link to="/science"> <h3 className="card-title text-center py-5" style={{ fontSize: '50px' ,color:'black'}}>Science</h3></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card mb-3">
                                <div className="card-body" style={{ height: '170px', backgroundColor: 'yellow' }}>
                                <Link to="/sports"><h3 className="card-title text-center py-5" style={{ fontSize: '50px',color:'black' }}>Sports</h3></Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <footer className="bg-dark text-light text-center py-4">
                <p style={{fontSize:'20px'}}>© 2023 My News Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;



