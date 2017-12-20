import React from 'react';
import {Button, Title, Control, Input} from 'reactbulma';
import './utilities.css'

class convert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      change: ''
    };
  }

  render() {

    let ammount;
    return (<div>
      <form onSubmit={this.props.handleChange}>
        <Title is="4">
          Ammount:
          <Control>
            <Input name="testo" type="number" value={this.props.value} onChange={this.props.handleChange} placeholder={this.props.actual}/>
          </Control>
        </Title>
        <div >
          <Button type="submit" value="Aggiungi" onClick={this.props.add}>Aggiungi</Button>
          {ammount}
        </div>
      </form>
    </div>)
  }
}

export default convert;
