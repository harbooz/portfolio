import React from "react";
import styled from "styled-components";

function CardSkills({ icons, title, description }) {
  return (
    <Card>
      <div className="icons">{icons}</div>
      <h3>{title}</h3>
      <div className="card__description">{description}</div>
    </Card>
  );
}

export default CardSkills;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 3rem;

  &:nth-child(odd) {
    margin-right: 2%;
  }

  h3 {
    font-size: 2rem;
    text-align: center;
    margin: 0;
  }

  .icons {
    margin: 0 auto;
  }

  .card__description {
    font-size: 1.6m;
  }
`;
