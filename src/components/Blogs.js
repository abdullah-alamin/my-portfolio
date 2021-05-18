import React from 'react'
import Blog from './Blog'
import blog1 from '../images/blogs/blog-1.jpg'
import blog2 from '../images/blogs/blog-2.jpg'
import blog3 from '../images/blogs/blog-3.jpg'
import blog4 from '../images/blogs/blog-4.jpg'
const data = [
    {
        title: 'React for All',
        body: 'It’s a very common question whether React is a framework or library. At first let’s have a look at the definition of both of these. A framework is a large list of api(s) that accelerate ...',
        category: 'React',
        date: '07 May, 2021',
        link: 'https://abdullah-prohor.medium.com/react-for-all-6fb172da1241',
        img: blog1
    },
    {
        title: '10 Important Javascript Questions',
        body: 'This is a very common question and often confusing. If we put an expression, something that turns into a value, in Boolean() like operators, we get either "true" or "false".',
        category: 'Javascript',
        date: '08 May, 2021',
        link: 'https://dev.to/abdullah_alamin/10-important-javascript-questions-51oj',
        img: blog3
    },
    {
        title: 'Javascript For Dummies: Try & Catch',
        body: 'Error is a common word for programmers. And if it is Javascript, the chance gets a height. In this article we are going to learn how to handle error with try and ...',
        category: 'Error Handling',
        date: '06 May, 2021',
        link: 'https://abdullah-prohor.medium.com/javascript-for-dummies-try-catch-454cc6fb6997',
        img: blog4
    },
    {
        title: '10 Javascript features you might have missed',
        body: 'Do you know Javascript can work as a number base conversion calculator for you? It can easily convert any string to decimal number from binary, octal or hexadecimal.',
        category: 'Javascript',
        date: '05 May, 2021',
        link: 'https://abdullah-prohor.medium.com/10-javascript-features-you-might-have-missed-88b3e0623ee',
        img: blog2
    },
]

function Blogs() {
    return (
        <div className="blogs">
            <h3 className="line-bg">Recent Blogs</h3>
            <div className="blog-container">
                {data.map(i=> <Blog key={i.link} blog={i}></Blog>)}
            </div>
        </div>
    )
}

export default Blogs
