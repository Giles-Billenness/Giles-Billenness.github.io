import styles from './experience-section.module.scss';
import classNames from 'classnames';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import IBMImg from '../../assets/IBM_logo.svg';

export interface ExperienceSectionProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-experience-sections-and-templates
 */
export const ExperienceSection = ({ className, children = 'ExperienceSection' }: ExperienceSectionProps) => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">IBM (Present)</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">IBM (Placement)</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Computing society</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className={styles['divGrid']}>
                  <div className={styles['paragraphContent']}>
                    <h2>Software Developer <a href="https://ibm.com">@ IBM</a> - London, England</h2>
                    <h3>Sep 2022 - Present</h3>
                    <p>Currently working on IBM Z features in IBM cloud. Upgrading and maintaining systems Automating as much as I can Working with: Containers IBM cloud python</p>
                  </div>
                  <div className={styles['imageContent']}>
                    <img src={IBMImg} alt="IBM Logo" className={styles['imageContent']}/>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className={styles['divGrid']}>
                  <div className={styles['paragraphContent']}>
                    <h2>Software Developer <a href="https://ibm.com">@ IBM</a> - London, England</h2>
                    <h3>Sep 2022 - Present</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                      optio, eaque rerum! Provident similique accusantiu</p>
                  </div>
                  <div className={styles['imageContent']}>
                    <img src={IBMImg} alt="IBM Logo" className={styles['imageContent']}/>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className={styles['divGrid']}>
                  <div className={styles['paragraphContent']}>
                    <h2>Software Developer <a href="https://ibm.com">@ IBM</a> - London, England</h2>
                    <h3>Sep 2022 - Present</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                      optio, eaque rerum! Provident similique accusantiu</p>
                  </div>
                  <div className={styles['imageContent']}>
                    <img src="https://www.ibm.com/cloud-computing/bluemix/sites/default/files/IBM%20Cloud%20Logo.png" alt="IBM Logo" className={styles['imageContent']}/>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
};
