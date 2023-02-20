import styles from './projects-section.module.scss';
import classNames from 'classnames';
import { ProjectCard } from '../project-card/project-card';
import NLPIMG from '../../assets/NLPconvoPic.png';
import AITextIMG from '../../assets/AIWritingRecog.png';

export interface ProjectsSectionProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-projects-sections-and-templates
 */
export const ProjectsSection = ({
    className,
    children = 'ProjectsSection',
}: ProjectsSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ProjectCard
            projectTitle="Final year dissertation (Summer 2022)"
            projectBio="‘Self-supervised transformers for the downstream
            classification of diverse systemic conditions’. I experimented with unsupervised and transfer learning with vision transformers,
            specifically the Swin Transformer for the diagnosis of systemic medical conditions using
            retinal images (fundus images)."
            projectImg="https://storage.googleapis.com/kaggle-competitions/kaggle/4104/media/retina.jpg"
            links="https://github.com/Giles-Billenness/Final-Year-Project-Self-supervised-Transformers"
            toolsLangs="Python,Visual Transformers,Academic Research"
            />

            <ProjectCard
            projectTitle="Deep learning for traffic sign detection (Summer 2022)"
            projectBio="Our team experimented with and evaluated several state-of-the-art object detection
            methodologies (Faster-RCNN with Resnet50, Faster-RCNN with SWIN transformer, YOLO
            with DarkNet53, and DETR with Resnet50) for the identification and segmentation of
            European road signs using the Mapillary traffic sign dataset."
            projectImg="https://cg.cs.tsinghua.edu.cn/traffic-sign/images/index/u18.jpg"
            links="https://github.com/Giles-Billenness/COM3025-Deep-Learning-And-Advanced-AI-Traffic-Sign-Detection"
            toolsLangs="Python,MMC,Object Detection,Visual Transformers"
            />

            <ProjectCard
            projectTitle="Natural Language Processing for chatbots (Summer 2022)"
            projectBio="For the first part of this project, I individually experimented with and evaluated Deep Neural
            networks and Transformers for name entity recognition (NER).
            For the second part, our team created a chatbot for customers to create and manage
            bookings with a local cinema, and we hosted the chatbot using a custom web service.
            We did this project in Python, SpaCy, and flask. During this project, I developed my
            knowledge and ability in using machine learning for NLP tasks."
            projectImg={NLPIMG}
            links="https://github.com/JamRamPage/COM3029_Chatbot"
            toolsLangs="Python,SpaCy,Natural Language Processing"
            />

            <ProjectCard
            projectTitle="Practical Business Analytics Project (Winter 2021)"
            projectBio="This project was to see if we can model whether insurance customers are likely to make a
            claim, using their vehicle history and personal attributes to aid in the decision of approving
            them for insurance.
            Our team experimented with and evaluated various data modelling techniques such as
            Boosted decision trees, Random forest decision trees, Multi-layer perceptron, and Deep
            neural networks and their performance on our data. This project was done in R using
            large-scale real car insurance data provided on Kaggle. During this project, I developed my
            ability to work in a team, researching data toward a business goal."
            projectImg="https://www.confused.com/-/media/confused/articles/car-insurance/model-car-surrounded-by-cash-and-documents.jpg?la=en-gb&hash=557FD4BF92680205ACFC418F0F5A9694A47CCC87"
            links="https://github.com/Satilianius/PBACoursework"
            toolsLangs="R,Neural Networks,Decision trees"
            />

            <ProjectCard
            projectTitle="Computational Intelligence Project (Winter 2021)"
            projectBio="The first part of this project was to solve a multi-objective optimisation problem using the
            elitist non-dominated sorting genetic algorithm (NSGA-II) with our implementation. Then,
            using this genetic algorithm for training a feed-forward multi-layer perceptron network to
            approximate a function. This project was done in python using the Distributed Evolutionary Algorithms in Python (DEAP) framework.
            During this project, I developed my knowledge and ability to use a range of machine
            learning paradigms to solve a problem."
            projectImg="https://miro.medium.com/max/1400/1*TwdCOjQ0xAXT_wYQd6Qvrw.png"
            links="https://github.com/Giles-Billenness/COM3013-Computational-Intelligence-Genetic-Algorithms"
            toolsLangs="Python,DEAP framework,Evolutionary algorithms"
            />

            <ProjectCard
            projectTitle="Writing recognition using machine learning techniques (Summer 2020)"
            projectBio="This project was to experiment and evaluate different machine learning methods, models
            and optimisers such as SVM, KNN, deep neural networks and CNNs, SGD, and Adam to
            recognise text on a page, starting with different digital fonts and ultimately moving to
            handwritten letters. This project was done in python using the Tensorflow and sklearn
            libraries. During this project, I developed my ability to work with machine learning libraries
            for the first time, piquing my interest in the subject."
            projectImg={AITextIMG}
            links="https://github.com/Giles-Billenness/COM2028-AI-Text-Recognition"
            toolsLangs="Python,Tensorflow,sklearn"
            />
        </div>
    );
};
