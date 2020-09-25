import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown, Container, Col, Row, Accordion, Button } from 'react-bootstrap'


const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Container fluid className={styles.generalContainer}>
        <Row align-items-center>
          <Col className={styles.layoutContainer}>

            < Col md={10} className={styles.bodyContainer}>
              {children}
            </Col>
            <footer className={styles.footer}>
              <div className={styles.falabellaCopyright}>
                <div className={styles.footerTextContent}>
                  <h6>Carito Da Silva</h6>
                </div>
                <span>|</span>
                <div className="footer-text-content copyright-content">
                  <h6 className="footer-text-content menu-copyright">
                    All rights reserved
                                </h6>
                </div>
              </div>
            </footer>
          </Col >
        </Row>
      </Container>
    </div>
  )
}
