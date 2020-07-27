import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styles from './contact.module.css'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'

const ContactIndex = ({location, data}) => {
    return (
      <Layout location={location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={data.site.siteMetadata.title} />
          <div className={styles.hero}>Contact</div>
          <h4 className={styles.contactText}>Have a question, recommendation, or just want to chat? I would love to hear from you! Feel free to reach out!</h4>
          <ContactForm />
        </div>
      </Layout>
    )
    };

export default ContactIndex

export const pageQuery = graphql`
  query ContactIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
