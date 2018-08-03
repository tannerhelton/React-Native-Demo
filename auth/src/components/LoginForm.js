import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
  state = { email: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder="user@gmail.com"
          label="Email"
          value={this.state.email}
          onTextChanger={ email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>

        </CardSection>
        <CardSection>
          <Button>
            Test
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm
