import PlaceCard from "../PlaceCard";
import { places } from "../../data/places";
import styled from "styled-components";
import { LargeContext } from "../../context/LargeConext";
import { useContext } from "react";

export default function PlaceList() {
  const { isLarge } = useContext(LargeContext);
  const listItems = places.map((place) => (
    <li key={place.id}>
      <PlaceCard place={place} isLarge={isLarge} />
    </li>
  ));
  return <StyledList>{listItems}</StyledList>;
}

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  & li {
    display: flex;
    gap: 12px;
  }
`;
