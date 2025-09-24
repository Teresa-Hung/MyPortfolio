import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import website from "../../Assets/Projects/website.png";
import dragdit from "../../Assets/Projects/DragDiT.png"
import tableau from "../../Assets/Projects/tableau_tiktok.png"
import pawpularity from "../../Assets/Projects/pawpularity.png"
import movie from "../../Assets/Projects/movie.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "rgb(113, 90, 90)" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dragdit}
              isBlog={false}
              title="DragDiT"
              description="My final year project at NTU. An interactive point-dragging image editing model built on DragonDiffusion but integrated Diffusion Transformer (DiT) backbone instead of UNets. This project explores point-based control, where users drag points on an image to reshape or move objects. The model enables semantic, localized editing while preserving global image consistency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title='Sentiment Classification of Movie Reviews'
              description='This project focused on classifying sentiment in text from Rotten Tomatoes movies reviews dataset by experimenting with bi-GRU, bi-LSTM, fine-tuned BERT, and LLaMA 2 models. Through transfer learning, ensembling, and optimized preprocessing with GloVe and FastText embeddings, the system achieved 84.6% test accuracy while improving robustness for real-world language understanding.'
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tableau}
              isBlog={false}
              title="TikTok Video Claims Classification"
              description="Built an end-to-end analytics pipeline to classify claim vs. opinion videos and explore content moderation strategies. Conducted EDA in Python, created interactive Tableau dashboards, and performed statistical testing on account verification and engagement. Developed predictive models (Logistic Regression, Random Forest, XGBoost) and evaluated with F1 score, ROC, and confusion matrix."
              demoLink="https://public.tableau.com/views/GoogleAdvancedDataAnalyticsCapstoneProject-Course3/TikTokVideoClaimDatasetInsights?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pawpularity}
              isBlog={false}
              title='"Pawpularity" Prediction'
              description='As part of a NTU Machine Learning module, my team and I tackled Kaggle’s "PetFinder.my - Pawpularity Contest", where we predicted pet photo popularity from over 9,000 images. We combined image embeddings from multiple pre-trained models (CLIP, ResNeXt, ViT) with metadata, experimenting with data augmentation, hyperparameter tuning, and ensembling. Our deep learning model placed in the top 7.5% (RMSE 17.09) on the private leaderboard.'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="Personal Website"
              description="My personal portfolio website build with Next.js, React, and Tailwind Css. Customized based on an open source template by soumyajit4419."
              ghLink="https://github.com/Teresa-Hung/MyPortfolio"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
