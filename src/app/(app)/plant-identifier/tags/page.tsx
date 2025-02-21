import PlantIdentifierTagsView from "@/views/plant-identifier/tags";
import { Suspense } from "react";

export default function PlantIdentifierTagsPage() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <PlantIdentifierTagsView />
    </Suspense>
  );
}
