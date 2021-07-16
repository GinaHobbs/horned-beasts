import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';

class BeastForm extends React.Component {
  render() {
    return(
      <div>
        <Form onSubmit={this.props.filterHorns}>
        <Form.Group controlId="formController">
          <Form.Label>Horns</Form.Label>
          <Form.Control as="select" onChange={this.props.handleDropdown}>
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
      </div>
    )
  }
}

export default BeastForm;