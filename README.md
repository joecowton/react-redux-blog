# Blog
A simple blog allowing the user to add posts, view them in detail and delete them when necessary. 

Using advanced redux techniques the site runs incredibly quickly, storing data from a remote API and only making it available to React when necessary.

### React-Router
By tying components to paths and using BrowserRouter's Switch function it was possibly to display to display only one component on the page at a time without actually changing address. Having the post view page route defined as '/posts/:id' gave scope to access individual posts using a method by with Redux only made available the data specific to that post id.

### Action Creators





### To run
```
$ git clone https://github.com/joecowton/react-redux-blog/
$ cd react-redux-blog
$ npm install
$ npm start
```

