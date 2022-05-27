import AddPortfolioBasic from './AddPortfolioBasic'

import React from "react";
import Cards from "./cards";
import DeleteProject from "./DeleteProject";
import styled from "styled-components";

const CardData = [
  {
    title: "Project Title biggy title no no big tis...",
    authorname: "Author Name",
    image: "card/Rectangle_1.png",
    date: "20-May-2022",

    like: "400",
    view: "1002",
    save: "1002",
    comment: "1098",
  },
  {
    title: "Project Title biggy title no no big tis...",
    authorname: "Author Name",
    image: "card/Rectangle_1.png",
    date: "20-May-2022",
    like: "400",
    view: "1002",
    save: "1002",
    comment: "1098",
  },
  {
    title: "Project Title biggy title no no big tis...",
    authorname: "Author Name",
    image: "card/Rectangle_1.png",
    date: "20-May-2022",
    like: "400",
    view: "1002",
    save: "1002",
    comment: "1098",
  },
];

const Container = styled.div`
  width: 100%;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  width: 100%;
`;



const DivColumn = styled.div`
      padding-bottom: 30px;
      float: left;
      width: 33.33%;
`;


const ProjectPortfolio = () => {
    return (
        <Container>
        <RowContainer>
          {/* add_new */}
          <DivColumn>
            <AddPortfolioBasic  />
          </DivColumn>
          {/* add new */}
          {CardData.map((item) => (
            <Cards
              project={<DeleteProject />}
              title={item.title}
              authorname={item.authorname}
              image={item.image}
              date={item.date}
              like={item.like}
              view={item.view}
              save={item.save}
              comment={item.comment}
            />
          ))}
        </RowContainer>
      </Container>
    )
}

export default ProjectPortfolio