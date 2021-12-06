import React from 'react'
import {FormattedNumber, FormattedMessage} from 'react-intl';
import { Container, Row, Col, Table, Badge } from 'react-bootstrap';


export default class Carditem extends React.Component {

    render() {
        return (
            <tr>
                <th scope="row">{this.props.Carditem.name}</th>
  
                <td>{this.props.Carditem.type}</td>
              <td><FormattedNumber value={this.props.Carditem.address}/></td>
              <td><FormattedNumber value={this.props.Carditem.phone}/></td>

              <td>{this.props.Carditem.type}</td>
              <td><FormattedNumber value={this.props.Carditem.address}/></td>
              <td><FormattedNumber value={this.props.Carditem.phone}/></td>
              <td>{this.props.Carditem.type}</td>
              <td><FormattedNumber value={this.props.Carditem.address}/></td>
              <td><FormattedNumber value={this.props.Carditem.phone}/></td>
              
                
            </tr>
        );
  }
}
//git ignore add it



