import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from './Home.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Row>
        <Col md={12}>
          <h1>Hola Carito Da Silva</h1>
        </Col>
      </Row>
      <Row>
        <Row className="align-items-center">
          <Col md={6}>
            <Card className={styles.cardMovie}></Card>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <Card className={styles.cardChat}></Card>
          </Col>

        </Row>
      </Row>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
