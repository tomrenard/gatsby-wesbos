import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SliceMastersGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  border: solid red;
`;

const SingleSliceMasterGridStyles = styled.div`
  display: grid;
  border: solid black;
`;

function SingleSlicemaster({ slicemaster }) {
  return (
    <SingleSliceMasterGridStyles>
      <Link to={`/slicemaster/${slicemaster.slug.current}`}>
        <h3 className="mark">{slicemaster.name}</h3>
        <Img className="image {slicemaster.name}" fluid={slicemaster.image.asset.fluid} alt={slicemaster.name} />
        <p>{slicemaster.description}</p>
      </Link>
    </SingleSliceMasterGridStyles>
  );
}

export default function SliceMastersPage({ data }) {
  const slicemasters = data.slicemasters.nodes;
  return (
    <SliceMastersGridStyles>
       {slicemasters.map(slicemaster => {
        return (
          <SingleSlicemaster key={slicemaster.name} slicemaster={slicemaster} />
        );
       })}
    </SliceMastersGridStyles>
  );
}

export const query = graphql`
  query SliceMastersQuery {
    slicemasters: allSanityPerson {
      nodes {
        name
        slug {
          current
        }
        description
        image {
          asset {
            fixed(width: 600, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
