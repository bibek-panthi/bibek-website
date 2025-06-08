import WorldMapSection from "../dartmouth/world-map-section";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gulmi",
  description: "My journey from Gulmi to the city",
};

export default function Gulmi() {
  return (
    <div>
      {/* Show map centered on Gulmi, Nepal */}
      <WorldMapSection latitude={28.1309} longitude={83.0887} />

      <section className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-2xl font-medium tracking-tight">Gulmi, Nepal</h1>
        <p className="mb-4">
          Hi, I'm Bibek. I was born in Gulmi, Nepal. Studying at various schools, I moved to the capital city to stay with my aunt's family to finish the later half of high school.
        </p>
        <p className="italic">To be continued...</p>
      </section>
    </div>
  );
}
