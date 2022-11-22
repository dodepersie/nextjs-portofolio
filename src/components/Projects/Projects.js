import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <div data-aos="fade-up" data-aos-duration="1000">
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <div data-aos="flip-left" data-aos-offset="100" data-aos-duration="500">
          <BlogCard key={id}>
            <Img src={image} alt={title} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
            <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
            <ExternalLinks href={source} target="_blank">Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        </div>
      ))}
    </GridContainer>
  </Section>
  </div>
);

export default Projects;