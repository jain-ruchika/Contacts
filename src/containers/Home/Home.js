import React, { PureComponent } from 'react'
import Layout from '../../components/Layout/Layout';
import Contacts from '../Contacts/Contacts';

export default class Home extends PureComponent {
  render() {
    return (
       <Layout>
        <Contacts />
         hello
        </Layout>
    )
  }
}
