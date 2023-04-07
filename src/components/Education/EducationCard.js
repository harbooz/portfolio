import React from "react";
import EducationData from "../../EducationData";
import styled from "styled-components";

function EducationCard() {
  return (
    <>
      {EducationData.map((value) => {
        return (
          <Card key={value.title}>
            <h2>{value.title}</h2>
            <h3>{value.education}</h3>
            <div className="descriprion">{value.description}</div>
          </Card>
        );
      })}
    </>
  );
}

export default EducationCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  border-bottom: solid 1px #fdd57c;
  padding-bottom: 2rem;
}

  h2,
  h3 {
    margin: 0;
  }

  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.6rem;
  }
`;
