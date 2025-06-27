import React from 'react';
import Dummy1 from './Images/dommyCourses-1.jpg';
import Dummy2 from './Images/dummyCourse-2.png';
import Dummy3 from './Images/dummyCourse-3.png';
import Dummy4 from './Images/dummyCourse-4.png';
import Dummy5 from './Images/dummyCourse-5.png';
import Dummy6 from './Images/dummyCourse-6.png';
import Dummy7 from './Images/dummyCourse-7.png';
import Dummy8 from './Images/dummyCourse-8.png';
import profile_img_1 from './Images/profile_img_1.png';
import profile_img_2 from './Images/profile_img_2.png'; 
import profile_img_3 from './Images/profile_img_3.png';
import linkdin from './Images/linkedin-logo.png';
import twitter from './Images/twitter-logo.png';
import instagram from './Images/instagram-logo.png';
import amazon from './Images/amazon.png';
import Padho from './Images/Padho.png';
import Padho2 from './Images/Padho-2.png';
import Tcs from './Images/TCS.png';
import Wipro from './Images/Wipro.png';
import Adobe from './Images/adobe.png';
import Student from './Images/student-1.jpg';

export const assets = {
    amazon,
    Padho,
    Padho2,
    linkdin,
    twitter,
    instagram,
    Tcs,
    Wipro,
    Student,
    Dummy1,
    Dummy2,
    Dummy3,
    Dummy4,
    Dummy5,
    Dummy6,
    Dummy7,
    Dummy8,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    Adobe
    
};

 export const companies = [
    {
      name: 'TCS',
      image: assets.Tcs,
      
    },
    {
      name: 'Wipro',
      image:assets.Wipro,
    },
    {
      name: 'amazon',
      image: assets.amazon,
    },
    {
      name: 'Adobe',
      image: assets.Adobe,
    }];

export const courses = [
        {
    "id": "605c72efb3f1c2b1f8e4e1a1",
    "title": "Javascript for Beginners", 
    "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
    "educator":"Apna College",
    "price": 2,
    "discount": 10,
    "stars": "⭐⭐⭐⭐",
    "rating": "4.5",
    "lectureUrl": "https://www.youtube.com/watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW",
    "image": assets.Dummy1,
    "completed":"",
    "duration": "1 hour, 21 mintues",
        },

        {
    "id": "5fa1b2c3d4e5f6a7b8c9d0e1",
    "title": "React for Beginners", 
    "courseDescription" :"In this course, you will dive deep into the essential concepts of React, one of the most popular JavaScript libraries for building user interfaces. Topics include JSX, functional and class components, props, state management, lifecycle methods, hooks (like useState, useEffect), and component composition. You'll also learn how to structure a React project and build a simple single-page application (SPA) from scratch.",
    "educator":"Code Aur Chai",            
    "price": 30,
    "discount":15,
    "stars": "⭐⭐⭐",
    "rating": "3.2",
    "lectureUrl": "https://www.youtube.com/watch?v=FxgM9k1rg0Q&t=6267s",
    "image": assets.Dummy2,
    "duration": "8 hours, 32 mintues",
        },
        {
    "id": "60f1e2d3c4b5a69788776655",
    "title": "Git and GitHub",   
    "courseDescription": "<h2>Master Version Control with Git and GitHub</h2><p>Git is a powerful version control system that allows developers to track changes in their codebase. In this course, you will learn how to use Git for version control and collaborate with others using GitHub.</p><p>This course covers topics such as creating repositories, branching, merging, resolving conflicts, and using GitHub for collaboration. By the end of this course, you will be able to manage your code effectively and work with others on software projects.</p><ul><li>Understand the basics of version control</li><li>Learn how to use Git commands</li><li>Collaborate on projects using GitHub</li></ul>",
    "educator":"Apna College",
    "price": 25, 
    "discount": 5, 
    "stars": "⭐⭐⭐⭐⭐",
    "rating": "4.8",
    "lectureUrl": "https://www.youtube.com/watch?v=Ez8F0nW6S-w&t=611s",
    "image": assets.Dummy3,
    "duration": "1 hours, 15 mintues",
        },
        {
    "id": "6ab1c2d3e4f5a697b8c9d0e2",
    "title": "API handling in React",
    "courseDescription": "<h2>Learn to Handle APIs in React</h2><p>APIs (Application Programming Interfaces) are essential for modern web applications. In this course, you will learn how to handle APIs in React, including fetching data, handling responses, and integrating APIs into your React applications.</p><p>This course covers topics such as using the Fetch API, Axios for HTTP requests, and managing API responses in React components. By the end of this course, you will be able to build dynamic applications that interact with external data sources.</p><ul><li>Understand how to make API requests</li><li>Learn how to handle API responses</li><li>Integrate APIs into your React applications</li></ul>",
    "educator":"Coude Aur Chai",        
    "price":12,
    "discount": 5,
    "stars": "⭐⭐⭐⭐",
    "rating": "4.5",
    "lectureUrl": "https://www.youtube.com/watch?v=NxAwOjb_NlA",
    "image": assets.Dummy4, 
    "duration": "52 mintues",   
        },
                {
    "id": "61c2b3a4d5e6f7a8b9c0d1e3",
    "title": "Python tutorial for Beginners",
    "courseDescription": "<h2>Learn Python Programming</h2><p>Python is a versatile programming language that is widely used in web development, data analysis, artificial intelligence, and more. In this course, you will learn the basics of Python programming, including syntax, data types, control structures, and functions.</p><p>This course is perfect for beginners who want to start their journey in programming. By the end of this course, you will be able to write simple Python programs and understand the core concepts of Python.</p><ul><li>Understand the basics of Python programming</li><li>Learn how to work with data types and variables</li><li>Create functions and control flow in Python</li></ul>",       
    "educator":"Code with Harry",
    "price": 15,
    "discount": 10,
    "stars": "⭐⭐⭐⭐⭐",
    "rating": "4.8",
    "lectureUrl": "https://www.youtube.com/watch?v=UrsmFxEIp5k",
    "image": assets.Dummy5,
    "duration": "10 hours, 53 mintues",
        },
        {
    "id": "62d3c4b5a6f7e8b9c0d1e2f3",
    "title": "How To Make Complete LMS Website Using React JS",
    "courseDescription": "<h2>Build a Complete Learning Management System (LMS) Website</h2><p>In this course, you will learn how to build a complete Learning Management System (LMS) website using React JS. You will cover topics such as user authentication, course management, and interactive features.</p><p>This course is designed for intermediate React developers who want to take their skills to the next level by building a real-world application. By the end of this course, you will have a fully functional LMS website that you can showcase in your portfolio.</p><ul><li>Understand how to build a complete web application</li><li>Learn about user authentication and authorization</li><li>Create interactive features for an LMS website</li></ul>",
    "educator":"GreatStack",        
    "price": 17,
    "discount": 5,
    "stars": "⭐⭐⭐⭐",
    "rating": "4.5",
    "lectureUrl": "https://www.youtube.com/watch?v=p2zWawmDkF4",
    "image": assets.Dummy6,
    "duration": "5 hours, 43 mintues",
        },
        {
     "id": "62d3c4b5a6f7e8b9crdrf2f3",
    "title": "HTML Tutorial for Beginners ",
    "courseDescription": "<h2>Build a Complete Website Using HTML</h2><p>In this course, you will learn how to build a complete website using HTML. You will cover topics such as HTML tags, forms, tables, and semantic elements.</p><p>This course is designed for beginners who want to learn the fundamentals of web development. By the end of this course, you will be able to create a structured and well-formatted HTML website.</p><ul><li>Understand the structure of an HTML document</li><li>Learn how to use various HTML tags</li><li>Create forms, tables, and lists</li><li>Use semantic HTML for better SEO and accessibility</li></ul>",

    "educator":"Apna College",        
    "price": 15,
    "discount": 5,
    "stars": "⭐⭐⭐⭐",
    "rating": "4.5",
    "lectureUrl": "https://www.youtube.com/watch?v=HcOc7P5BMi4",
    "image": assets.Dummy7,
    "duration": "2 hours, 5 mintues",  
        
        },   
        {
    "id": "62d3c4b5a6f7e8b9crdjjd2f3",
    "title": "Complete Backend Developer course",
    "courseDescription":"<h2>Master Backend Development</h2><p>In this course, you will learn how to build powerful and secure backend applications. You will explore topics like APIs, databases, authentication, and server-side logic using popular backend technologies.</p><p>This course is designed for developers who want to understand how the backend of web app",
    "educator":"Code aur Chai",        
    "price": 10,
    "discount": 5,
    "stars": "⭐⭐⭐⭐",
    "rating": "4.5",
    "lectureUrl": "https://www.youtube.com/watch?v=7fjOw8ApZ1I&t=190s",
    "image": assets.Dummy8,
    "duration": "10 hours, 6 mintues",  
        
        },   
];

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating:  '⭐⭐⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating:  '⭐⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating:  '⭐⭐⭐',
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];