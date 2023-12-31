

const Newsitem=(props)=>  {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "100%",backgroundColor:'#6a9cdb' }}>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}</span>
          <img src={!imageUrl ? "https://th.bing.com/th/id/OIP.s-yfSLs_9Rk5c4Imsht1awHaEB?pid=ImgDet&rs=1" : imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
