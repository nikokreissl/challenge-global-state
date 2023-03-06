import PlaceImage from "../PlaceImage";
export default function PlaceCard({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <section>
        <h2>{place.name}</h2>
        <p>{place.description}</p>
      </section>
    </>
  );
}
