
import CardDetail from "@/components/card/cardDetail";
import { destinations } from './../lib/data/data';
import { useParams } from "react-router-dom";

export default function DestinationLayout() {
  const { id } = useParams();

  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return <div className="p-4 text-center text-red-500">Destination not found.</div>;
  }

  return (
    <>
     

      <CardDetail destination={destination} />
    </>
  );
}
