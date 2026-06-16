import type { ImageMetadata } from "astro";
import type { FeatureIconName } from "../components/FeatureIcon.astro";
import dataStack from "../assets/services/data-stack.png";
import audit from "../assets/services/audit.png";
import experts from "../assets/services/experts.png";
import team from "../assets/services/team.png";

export interface Service {
  icon: FeatureIconName;
  title: string;
  bullets: string[];
  image: ImageMetadata;
  imageAlt: string;
}

export const services: Service[] = [
  {
    icon: "stack",
    title: "Modern Data Stack Implementation",
    bullets: [
      "Data ingestion and streaming",
      "Cloud data storage and compute",
      "Business intelligence and AI",
    ],
    image: dataStack,
    imageAlt: "Diagram of key layers and roles in the modern data stack",
  },
  {
    icon: "gauge",
    title: "Analytics Audit & Optimization",
    bullets: [
      "Uncover data-driven insights to enhance collaboration",
      "Identify and resolve workflow bottlenecks",
      "Continuously refine data processes for performance",
    ],
    image: audit,
    imageAlt: "Team collaborating on an analytics audit",
  },
  {
    icon: "badge",
    title: "Certified Analytics & Engineering Experts",
    bullets: [
      "Platform expertise — Snowflake, Databricks, dbt",
      "Qualified and certified engineering staff",
      "Proficient across modern data tooling",
    ],
    image: experts,
    imageAlt: "Certified data engineers leading a workshop",
  },
  {
    icon: "users",
    title: "Data Engineering Team Development",
    bullets: [
      "Hiring and developing versatile data teams",
      "15+ years building teams across North America",
      "Dedicated to driving impactful business results",
    ],
    image: team,
    imageAlt: "Data engineering team working together",
  },
];

export interface InteractionMode {
  icon: FeatureIconName;
  title: string;
  description: string;
}

export const interactionModes: InteractionMode[] = [
  {
    icon: "expert",
    title: "The Expert Role",
    description:
      "We own the result, accept responsibility, and execute the action plan. Technical control rests with us — you stay responsive while we solve the problem.",
  },
  {
    icon: "hands",
    title: "The Pair-of-Hands Role",
    description:
      "You leverage us as an extra pair of hands. You define the goals and the plan, retain full control, and we execute against it.",
  },
  {
    icon: "handshake",
    title: "The Collaborative Role",
    description:
      "Your domain knowledge meets our specialized skills. We don't just solve problems for you — we equip your team to solve them together.",
  },
];

export interface Value {
  icon: FeatureIconName;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: "shield",
    title: "Integrity",
    description:
      "We are committed to ethical practices and transparency in every interaction, building trust with clients and partners.",
  },
  {
    icon: "target",
    title: "Client-Centricity",
    description:
      "Our clients' goals drive our efforts. We listen closely and tailor solutions to deliver measurable, impactful results.",
  },
  {
    icon: "spark",
    title: "Innovation",
    description:
      "We stay at the forefront of technology, constantly refining our methods to deliver advanced, future-ready solutions.",
  },
];
