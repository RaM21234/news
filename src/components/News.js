import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

    const url = "https://th.bing.com/th/id/R.a7f7adc35f7f0cb6975beb472a5241ba?rik=7TtF253FP%2fq2mQ&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-16%2f4K-Plain-Black-Background-Best-Wallpaper-40948.jpg&ehk=eUxVbd4JYK8WW5nViDBY5zmufT03w0SJJN9YnnlZDjI%3d&risl=&pid=ImgRaw&r=0"
    const divStyle = {
        backgroundImage: `url(${url}),url(${url}),url(${url}),url(${url}),url(${url}),url(${url}),url(${url}),url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:'repeat-y',
       // Adjust the height as needed
        width: '100vw',
        height:'100%'
    };


    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitlizeText = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const updateNews = async (pageNo) => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f9de63ebb91841658bb36cd3f3792906&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)

        props.setProgress(100)
    }
    useEffect(() => {
        document.title = `News - ${capitlizeText(props.category)}`
        updateNews()

    }, []);

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f9de63ebb91841658bb36cd3f3792906&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)


    }

    if (!articles) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div style={divStyle} >
                <h1 className="text-center pt-3" style={{ marginTop: '56px',color:'yellow' }}>News Monkey-Top {capitlizeText(props.category)} Headlines</h1>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h2 className="text-center" id="loading_bar">{totalResults / 9 > page ? <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> : "End"}</h2>}
                >
                    <div >

                    <div className="container my-3" >
                        <div className="row">
                            {
                                articles.map((element) => {
                                    return <div className="col-md-4"  key={element.url}>
                                        <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    </div>
                </InfiniteScroll >
            </div>



        </>
    )

}
News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: "general"

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News  
