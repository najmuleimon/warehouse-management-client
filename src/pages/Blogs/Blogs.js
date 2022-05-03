import React from 'react';
import {FaRegQuestionCircle} from 'react-icons/fa';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="item">
                            <h3><FaRegQuestionCircle className='icon'/>Difference between javascript and nodejs.</h3>
                            <p>Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.</p>
                            <p>Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS.</p>
                            <p>Javascript is basically used on the client-side.	NodeJS is mostly used on the server-side.</p>
                            <p>Javascript is used in frontend development.	Nodejs is used in server-side development.</p>
                            <p>Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </p>
                        </div>
                        <div className="item">
                            <h3><FaRegQuestionCircle className='icon'/>When should you use nodejs and when should you use mongodb?</h3>
                            <p>NodeJS and MongoDB are two different technologies. MonogDB is a database system which gives us a chance to efficiently store documents in a database and to perform operations like data insert, read, updates, delete or to search documents by some criteria. NodeJS's responsibility is especially to execute your application.</p>
                        </div>
                        <div className="item">
                            <h3><FaRegQuestionCircle className='icon'/>Differences between sql and nosql databases.</h3>
                            <p>SQL is a RelationalL database management system (RDBMS) and NoSQL is a non-relational or distributed database system.</p>
                            <p>SQL databases have fixed or static or predefined schema. NoSQL have dynamic schema</p>
                            <p>SQL databases are not suited for hierarchical data storage. NoSQL databases are best suited for hierarchical data storage.</p>
                            <p>SQL databases are best suited for complex queries. NoSQL databases are not so good for complex queries</p>
                            <p>SQL database are vertically Scalable. NoSQL database are	horizontally scalable</p>
                            <p>SQL follows ACID property. NoSQL follows CAP(consistency, availability, partition tolerance)</p>
                        </div>
                        <div className="item">
                            <h3><FaRegQuestionCircle className='icon'/>What is the purpose of jwt and how does it work?</h3>
                            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                            <p>JWT is used to share security information between two parties. A client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;