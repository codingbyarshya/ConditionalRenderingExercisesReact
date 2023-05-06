//Conditional Rendering - If greater than `18`
/*
import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age > 18 && <Age age={age} />}
      </div>
    );
  }
}

export default Welcome;
*/
//=============================================================================================================================================
//Exercise Conditional Rendering - If prop is present
/*
import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {age && <Age age={age} />}
      </div>
    );
  }
}

export default Welcome;
*/
//=============================================================================================================================================
//Exercise Conditional Rendering - If less than `65`
/*
import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name}!</p>
        {(age > 18 && age < 65) && <Age age={age} />}
      </div>
    );
  }
}

export default Welcome;
*/
//=============================================================================================================================================
//[Exercise Conditional Rendering - If is equal to "John"] and [Exercise Conditional Rendering - Render the "You are very young!"]
/*
import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        {name === 'John' && age > 18 && age < 65 && (
          <>
            <p>Welcome, {name}!</p>
            <Age age={age} />
          </>
        )}
      </div>
    );
  }
}

export default Welcome;
*/
//=============================================================================================================================================

