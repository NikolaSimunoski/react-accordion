import "./styles.css";

const faqs = [
  {
    title: "How do I start beekeeping?",
    text: "Start by learning the basics of beekeeping, including the types of hives, equipment, and basic bee care techniques.",
  },
  {
    title: "What are the basic types of hives?",
    text: "The basic types of hives are Langstroth, Top Bar, and Warre hives. Each type has its own advantages and disadvantages.",
  },
  {
    title: "Where should I place my hives?",
    text: "Place your hives in a location with good access to water and flowering vegetation, in a sunny spot protected from strong winds.",
  },
  {
    title: "How do I choose a bee colony?",
    text: "Choose healthy bees from a reputable seller. Ensure the colony has a queen and well-developed brood.",
  },
  {
    title: "What is the best season to start beekeeping?",
    text: "Spring is the best season to start beekeeping, as it is when nature awakens and bees have plenty of food.",
  },
  {
    title: "How do I protect my bees from diseases?",
    text: "Regularly inspect your hives, use natural pest control methods, and maintain hygiene in beekeeping practices.",
  },
  {
    title: "What are the most common bee diseases?",
    text: "The most common bee diseases are varroa, nosema, and American foulbrood. Always keep your bees healthy and prevent infections.",
  },
  {
    title: "How do I inspect my hives?",
    text: "Inspect your hives regularly, checking the condition of the brood, the queen, and the food stores. Look for signs of diseases and pests.",
  },
  {
    title: "How do I produce honey?",
    text: "Producing honey involves collecting the honey frames, extracting the honey with an extractor, and filtering it before storing.",
  },
  {
    title: "What plants are good for bees?",
    text: "Good plants for bees include sunflower, lavender, linden, clover, and various wildflowers that provide nectar and pollen.",
  },
  {
    title: "How can I improve my honey yield?",
    text: "Place hives in areas with rich flora, ensure bees have enough food and water, and regularly maintain the hives.",
  },
  {
    title: "How do I maintain healthy queens?",
    text: "Keep queens healthy by providing good nutrition and regularly checking for signs of diseases. Replace old or inefficient queens.",
  },
  {
    title: "How can I prevent swarming?",
    text: "Regularly check the hive for signs of swarming and ensure there is enough space for the bees. Sometimes it may be necessary to split the colony.",
  },
  {
    title: "What should I do if the bees swarm?",
    text: "If bees swarm, try to locate and recapture them into a hive. Ensure the new location is suitable.",
  },
  {
    title: "How do I increase the bee population?",
    text: "Increase the population by adding brood frames, providing enough food and water, and regularly replacing queens.",
  },
  {
    title: "What is propolis and how do bees use it?",
    text: "Propolis is a resinous substance bees collect from trees and use to seal cracks and protect the hive from infections.",
  },
  {
    title: "How do I determine the maturity of honey?",
    text: "The maturity of honey is determined when the honey in the frames is capped with wax. This indicates that the honey has the right moisture content and is ready for harvesting.",
  },
  {
    title: "What are the environmental benefits of beekeeping?",
    text: "Beekeeping contributes to the pollination of plants, which is crucial for agriculture and the ecosystem. Bees help increase yields and maintain biodiversity.",
  },
  {
    title: "How do I start producing beeswax?",
    text: "Producing beeswax involves collecting wax frames, melting the wax, and filtering it to remove impurities before storing.",
  },
  {
    title: "What is pollen and how do bees use it?",
    text: "Pollen is a flower powder that bees collect and use as a source of protein and nutrients for the growth and development of the bee colony.",
  },
];
export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return <div>TODO</div>;
}
