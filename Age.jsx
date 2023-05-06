//[Conditional Rendering - If greater than `18`] and [Exercise Conditional Rendering - If prop is present] and [Exercise Conditional Rendering - If less than `65`]
// and [Conditional Rendering - If is equal to "John"]
/*
import React from 'react';

class Age extends React.Component {
  render() {
    const { age } = this.props;
    return (
      <p>Your age is {age}.</p>
    );
  }
}

export default Age;
*/
//================================================================================================================================================
//Exercise Conditional Rendering - Render the "You are very young!"
/*
import React from 'react';

class Age extends React.Component {
  render() {
    const { age } = this.props;
    return (
      <p>
        {age > 18 ? `Your age is ${age}` : "You are very young!"}
      </p>
    );
  }
}

export default Age;
*/
//================================================================================================================================================

