import React, { Component } from 'react';
import { Field, redux-form } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <form>
          <Field
            name="title"
            component={}
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
