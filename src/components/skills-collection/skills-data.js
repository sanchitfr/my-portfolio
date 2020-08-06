const SKILLS_DATA = {
   skills : [
        {
            title : 'JavaScript',
            imageUrl : 'data:image/png;base64,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',
            uid : 1,
            url: 'https://www.javascript.com/'
        },
        {
            title : 'React',
            imageUrl : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
            uid : 2,
            url:'https://reactjs.org/'
        },
        {
            title : 'Node.js',
            imageUrl : 'https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg',
            uid : 3,
            url : 'https://nodejs.org/en/'
        },
        {
            title : 'Java',
            imageUrl : 'https://image.flaticon.com/icons/svg/226/226777.svg',
            uid : 4,
            url:'https://www.java.com/en/'
        },
        {
            title : 'Redux',
            imageUrl : 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
            uid : 5,
            url:'https://redux.js.org/'
        },
        {
            title : 'Express.js',
            imageUrl : 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/square_256/expressjslogo.png',
            uid : 6,
            url:'https://expressjs.com/'
        },
        {
            title : 'Firebase',
            imageUrl : 'https://cdn.iconscout.com/icon/free/png-256/firebase-1-282796.png',
            uid : 7,
            url:'https://firebase.google.com/'
        }
    ]
};

export default SKILLS_DATA;