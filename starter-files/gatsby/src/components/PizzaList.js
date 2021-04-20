import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  grid-auto-rows: auto auto 10px;
  border: solid red;
`;

const PizzaStyles = styled.div`
  display: grid;
  border: solid black;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0.5rem;
  }
  Img {
    border: solid yellow;
    object-fit: fill !important;
  }
`;

function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p>{pizza.toppings.map(topping => topping.name).join(', ')}</p>
        <Img className="image {pizza.name}" fluid={pizza.image.asset.fluid} alt={pizza.name} />
      </Link>
    </PizzaStyles>
  );
}

export default function PizzaList(props) {
  const pizzas = props.pizzas;
  return (
    <PizzaGridStyles>
      {pizzas.map(pizza => {
         return <SinglePizza key={pizza.id} pizza={pizza} />
      })}
    </PizzaGridStyles>
  );
}
