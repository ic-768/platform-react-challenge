import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Breed } from "@/types/Breed";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractBreedDetails(breed: Breed) {
  const characteristics = [
    { name: "Adaptability", value: breed.adaptability },
    { name: "Affection Level", value: breed.affection_level },
    { name: "Child Friendly", value: breed.child_friendly },
    { name: "Dog Friendly", value: breed.dog_friendly },
    { name: "Energy Level", value: breed.energy_level },
    { name: "Grooming", value: breed.grooming },
    { name: "Health Issues", value: breed.health_issues },
    { name: "Intelligence", value: breed.intelligence },
    { name: "Shedding Level", value: breed.shedding_level },
    { name: "Social Needs", value: breed.social_needs },
    { name: "Stranger Friendly", value: breed.stranger_friendly },
    { name: "Vocalisation", value: breed.vocalisation },
  ];

  const externalLinks = [
    { name: "CFA", url: breed.cfa_url },
    { name: "Vetstreet", url: breed.vetstreet_url },
    { name: "VCA Hospitals", url: breed.vcahospitals_url },
    { name: "Wikipedia", url: breed.wikipedia_url },
  ].filter((link) => link.url);

  return { characteristics, externalLinks };
}
