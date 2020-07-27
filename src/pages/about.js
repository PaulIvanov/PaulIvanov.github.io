import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styles from './about.module.css'
import Layout from '../components/layout'

const AboutIndex = ({location, data}) => {
    return (
      <Layout location={location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={data.site.siteMetadata.title} />
          <div className={styles.aboutSection}>
              <div>
                  <h3>Under Construction</h3>
                  <p>If you are curious about my professional experience, please refer to my resume.</p>
              </div>
          <a className={styles.viewResumeButton} href="/Paul_Ivanov_Resume.pdf" target="_blank">View Resume</a>
          </div>
        </div>
      </Layout>
    )
    };

export default AboutIndex

export const pageQuery = graphql`
  query AboutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
