import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: rgba(80, 78, 78, 0.5) 0px 10px 15px -3px, rgba(80, 78, 78, 0.5) 0px 4px 6px -2px;
  text-align: justify;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #2dfda3;
  padding: .5rem;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  margin: 20px auto;
  padding: 0 30px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 45vh;
    padding: .5rem auto;
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color: #000;
font-size: 1.6rem;
padding: 1rem 1.5rem;
text-align: center;
background: rgba(45,253,163,1);
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: rgba(34,193,195,1);
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-evenly;
padding: 1.5rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`