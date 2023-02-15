import styles from './experience-section.module.scss';
// import classNames from 'classnames';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import IBMImg from '../../assets/IBM_logo.svg';
import CompSocImg from '../../assets/CompSocIcon.png';


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
        <Tab.Container id="left-tabs" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className={styles['ExpNavListItem']}>
                <Nav.Link eventKey="first">IBM (Present)</Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles['ExpNavListItem']}>
                <Nav.Link eventKey="second">IBM (Placement)</Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles['ExpNavListItem']}>
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
                    <h3>Sep, 2022 - Present</h3>
                    <p>Currently working on IBM Z features in IBM cloud. Upgrading and maintaining systems, automating as much as I can.</p>
                    <p>Working with:</p>
                    <ul className={styles['listContent']}>
                        <li>Containers</li>
                        <li>IBM cloud</li>
                        <li>python</li>
                        <li>Z mainframes</li>
                    </ul>
                    <p>Graduate training project: In a team of other graduates we developed a sample banking application with open banking functionality
                       (PSD2) in Java Springboot deployed in IBM WebSphere Liberty, with its own CI/CD pipeline in Tekton, utilising an interactive web app</p>
                    <p>I am also a member of the machine learning reading group at IBM.</p>
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
                    <h3>Jul, 2020 – Sep, 2021</h3>
                    <p>I took on DevOps, QA automation Testing and Development roles, where I gained knowledge in the latest industry-standard
                        technology.</p>
                    <ul className={styles['paragraphlistContent']}>
                      <li>Whilst in DevOps, I created custom tooling for the teams on location, learning Golang and using both GitHub & pipeline APIs.</li>
                      <li>Whilst in QA, I extended their tests and data collection using the Kubernetes API.</li>
                      <li>Whilst in Dev, I created React components, GraphQL endpoints and refactored our repository to remove all bugs, and security
                          issues and improving on code quality (Smell)</li>
                    </ul>
                    <p>I also took part in give back opportunities and hackathons, such as:</p>
                    <ul className={styles['paragraphlistContent']}>
                      <li>Receiving Second place in the IBM Green hackathon</li>
                      <li>Submitting 4 patents through the patent scheme, that I developed in collaboration with IBM employees from a diverse range of
                          teams.</li>
                      <li>Being a representative for IBM at The University of Surrey - Giving talks, hosting a virtual stand at the careers fare and giving CV &
                          application advice.</li>
                    </ul>
                  </div>
                  <div className={styles['imageContent']}>
                    <img src={IBMImg} alt="IBM Logo" className={styles['imageContent']}/>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className={styles['divGrid']}>
                  <div className={styles['paragraphContent']}>
                    <h2>President & Industrial Coordinator <a href="https://surreycompsoc.org/">@ The Computing Society</a> - University of Surrey - Guildford, England</h2>
                    <h3>Jun, 2019 – Jun, 2021</h3>
                    <p>A leadership role engaged in event management for students in the field of computing.</p>
                    <p>During my time as President:</p>
                    <p>I’ve chaired meetings, lead my committee to plan and execute events and formed industrial relationships, such as</p>
                    <ul className={styles['paragraphlistContent']}>
                      <li>Collaborating with Microsoft on improving the university’s IT functionality.</li>
                      <li>Increasing the active members to 150, an increase of ~30% on the previous year.</li>
                      <li>My team and I hosted charitable events throughout the year and donated proceedings ~£200 to One Laptop per Child</li>
                      <li>In collaboration with other societies from the physical sciences department, we hosted a FEPS night where all proceedings ~£700
                           were donated to SATRO</li>
                    </ul>
                    <p>As the Industrial Coordinator:</p>
                    <p>I engaged in collaboration between the society and external companies, such as:</p>
                    <ul className={styles['paragraphlistContent']}>
                      <li>Organising a panel with Intel to provide students with CV and career advice.</li>
                    </ul>
                  </div>
                  <div className={styles['imageContent']}>
                    <img src={CompSocImg} alt="IBM Logo" className={styles['imageContent']}/>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
};
