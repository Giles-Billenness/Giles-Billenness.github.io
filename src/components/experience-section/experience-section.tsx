import styles from './experience-section.module.scss';
// import classNames from 'classnames';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import IBMImg from '../../assets/IBM_logo.svg';
import CompSocImg from '../../assets/CompSocIcon.png';
import UCLLogoImg from '../../assets/University_College_London_logo.svg';
// import { default as UCLLogoImg } from '../../assets/University_College_London_logo.svg';


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
              <Nav.Link eventKey="fourth">UCL Institute of Ophthalmology (Present)</Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles['ExpNavListItem']}>
              <Nav.Link eventKey="first">IBM (2022 – 2024)</Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles['ExpNavListItem']}>
              <Nav.Link eventKey="second">IBM (2020 – 2021)</Nav.Link>
              </Nav.Item> 
              <Nav.Item className={styles['ExpNavListItem']}>
              <Nav.Link eventKey="third">Computing society (2019)</Nav.Link>
              </Nav.Item>
            </Nav>
            </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className={styles['divGrid']}>
                  <div className={styles['paragraphContent']}>
                    <h2>Software Developer @ <a href="https://www.ibm.com/products/watsonx-code-assistant-z">IBM watsonx Code Assistant for IBM Z</a> LLM team - London, England</h2>
                    <h3>Jan, 2024 - Dec, 2024</h3>
                    <ul>
                      <li>Developed AI-assisted application modernisation tools for COBOL and Java.</li>
                      <li>These services are provided via IBM Cloud and VSCode extension.</li>
                      <li>Maintained microservices in a Kubernetes (K8s) cluster, deployed using Tekton CICD pipelines, with backend services in Node.js & Python, and frontend interfaces in Typescript (React.js).</li>
                    </ul>
                    <p>Working with:</p>
                    <ul className={styles['listContent']}>
                        <li>K8s</li>
                        <li>Tekton</li>
                        <li>Python</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>IBM cloud</li>
                    </ul>

                    <h2>Software Developer @ <a href="https://cloud.ibm.com/docs/hp-virtual-servers?topic=hp-virtual-servers-learn-architecture">IBM ZaaS</a> SRE team - London, England</h2>
                    <h3>Sep, 2022 - Jan 2024</h3>
                    <ul>
                      <li>Developed and maintained features and tooling in IBM cloud.</li>
                      <li>Responsible for updating and configuring devices in our service, incident response, and client on-call.</li>
                      <li>Built and deployed automated device health check & compliance scripts in Python and expanded front end dashboards in NodeJS to assist engineers in service diagnostics, resulting in reduced downtime.</li>
                    </ul>
                    <p>Working with:</p>
                    <ul className={styles['listContent']}>
                        <li>Python</li>
                        <li>Node.js</li>
                        <li>Containers</li>
                        <li>IBM cloud</li>
                    </ul>
                    <h2>IBM Open Banking Project:</h2>
                    <p>In a team, we created an API for a client-facing banking app adding open banking functionality (PSD2) in Java Spring Boot, 
                      deployed in IBM WebSphere Liberty, with a Tekton CI/CD pipeline and a front-end web app in React. 
                      Giving weekly presentations to key stakeholders.
                    </p>
                    <h2>IBM Machine Learning Reading Group:</h2>
                    <p>I am also a member of the machine learning reading group at IBM. Analysing SOTA papers and attending talks from companies and researchers.</p>
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
                    <p>A rotation of: DevOps, QA automation Testing and Development roles, where I gained knowledge in the latest industry-standard
                        technology.</p>
                    <ul className={styles['paragraphlistContent']}>
                      <li>DevOps: Created custom tooling in Golang for the teams on location, using GitHub & pipeline APIs. Maintained Ansible install scripts and CICD pipelines in Jenkins.</li>
                      <li>QA Automation: Extended tests and data collection using the Kubernetes API in Java.</li>
                      <li>Development: Created React components, GraphQL endpoints and refactored our main repository removing all bugs, security issues, and improving code quality.</li>
                    </ul>
                    <p>Working with:</p>
                    <ul className={styles['listContent']}>
                        <li>Java</li>
                        <li>React.js</li>
                        <li>GraphQL</li>
                        <li>Golang</li>
                        <li>Ansible</li>
                        <li>Jenkins</li>
                        <li>K8s</li>
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
                    <img src={IBMImg} alt="IBM Logo" className={styles['imageContent']+ ' ' + styles['IBMLOGO']}/>
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
                    <li>In collaboration with other societies from the physical sciences department, we hosted a FEPS night where all proceedings ~£700 were donated to SATRO</li>
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
                <Tab.Pane eventKey="fourth">
                <div className={styles['divGrid']}>
                    <div className={styles['paragraphContent']}>
                    <h2>ML Researcher @ <a href="https://www.ucl.ac.uk/ioo/">UCL Institute of Ophthalmology</a> - London, England</h2>
                    <h3>May, 2024 – Present</h3>
                    <p>Joined as part of my MSc project under the supervision of Professor Pearse Keane (Keane AI Group) and Yukun Zhou, continuing after completion. For more information, see <a href="https://www.ucl.ac.uk/news/2023/sep/world-first-ai-foundation-model-eye-care-supercharge-global-efforts-prevent-blindness">this article</a>.</p>
                    <ul className={styles['paragraphlistContent']}>
                    <li>Attending meetings, presenting & validating findings, and collaborating with researchers on papers using machine learning in the field of ophthalmology.</li>
                    </ul>
                    <p>Working with:</p>
                    <ul className={styles['listContent']}>
                    <li>Python</li>
                    <li>PyTorch</li>
                    <li>Vision Transformers</li>
                    </ul>
                    </div>
                  <div className={styles['imageContent']}>
                    <img src={UCLLogoImg} alt="UCL Logo" className={styles['imageContent']+ ' ' + styles['IBMLOGO']}/>
                  </div>
                </div>
                </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
};
