import React from 'react'

function Blog( {blog} ) {
    const {title, body, img, link, date, category} = blog;
    return (
        <div className="blog">
            <div className="blog-head">
                <img src={img} alt="" />
                <div className="blog-date">
                    {category} | {date}
                </div>
            </div>
            <div className="blog-content">
                <h4>{title}</h4>
                <p>{body}</p>
                <a href={link}>READ MORE</a>
            </div>
        </div>
    )
}

export default Blog
