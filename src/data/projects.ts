import type { ImageMetadata } from "astro";

import abebooksRedshift from "../assets/projects/abebooks-redshift-architecture.png";
import abebooksBigData from "../assets/projects/abebooks-bigdata-architecture.png";
import alexaRedshift from "../assets/projects/alexa-redshift-architecture.png";
import alexaSagemaker from "../assets/projects/alexa-sagemaker-churn.png";
import retailFeatureStore from "../assets/projects/amazon-retail-feature-store.png";
import xboxDeltaLake from "../assets/projects/xbox-delta-lake-architecture.png";
import saasAthena from "../assets/projects/saas-athena-data-lake.png";
import saasSnowflake from "../assets/projects/saas-snowflake-warehouse.png";
import telecomLake from "../assets/projects/telecom-serverless-data-lake.png";

/**
 * Selected projects our founder worked on across 15+ years, in-house and as a
 * consultant. Source: the "Data Architectures and Teams" talk (Sept 2023),
 * which is where the team sizes, stacks, and architecture diagrams come from.
 *
 * RULE: everything here is taken from that deck. No invented metrics. If you
 * add a number, it must be one you can actually stand behind.
 */
export interface Diagram {
  image: ImageMetadata;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  /** Card + h1 title. Keyword-led. */
  title: string;
  /** Short line for cards and the index. */
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  /** Named company, as disclosed publicly in the 2023 talk. */
  company: string;
  industry: string;
  /** Which service this maps to, for cross-linking. */
  service: string;
  /** Team composition as it actually was. */
  team: string[];
  /** Where the project started from. Empty for greenfield. */
  startingState: string[];
  useCases: string[];
  solution: string[];
  /** Named tools, for the stack chips. */
  stack: string[];
  /** Qualitative. Do not add numbers we cannot prove. */
  outcome: string[];
  diagrams: Diagram[];
  /** Only where the deck actually stated one. */
  timeline?: string;
}

export const projects: Project[] = [
  {
    slug: "oracle-to-redshift-migration",
    title: "Oracle Data Warehouse to AWS Redshift",
    tagline:
      "Migrating a marketplace off Oracle, PL/SQL and Crystal Reports onto Redshift and Tableau.",
    seoTitle: "Oracle to AWS Redshift Migration — Marketplace Data Warehouse",
    seoDescription:
      "How a 3-person team migrated an Oracle data warehouse and its PL/SQL ETL to AWS Redshift with Matillion and Tableau, then added EMR and Spark for web logs.",
    company: "AbeBooks (an Amazon subsidiary)",
    industry: "E-commerce marketplace · 400 employees",
    service: "data-platforms",
    team: [
      "2 Oracle DBAs (also supporting the back-end OLTP)",
      "1 Software Engineering Manager",
      "1 Data Engineer",
    ],
    startingState: [
      "Oracle data warehouse",
      "PL/SQL transformations scheduled with cron",
      "Excel and Crystal Reports for reporting",
    ],
    useCases: [
      "Sales and financial reporting",
      "Financial reconciliation",
      "Marketing analytics — attribution model, channel performance, user segmentation",
      "Product and category analytics",
    ],
    solution: [
      "Amazon Redshift as the data warehouse",
      "Matillion ETL running on EC2 for transformations",
      "Tableau Server for reporting, behind an application load balancer",
      "SQS, SNS and Python 3 in the service layer",
      "Later: EMR and Spark to clear a Redshift ETL performance bottleneck",
      "Later: DynamoDB Streams into Kinesis to deliver inventory CDC to S3",
    ],
    stack: [
      "Amazon Redshift",
      "Matillion ETL",
      "Tableau",
      "AWS EMR",
      "Apache Spark",
      "DynamoDB Streams",
      "Amazon Kinesis",
      "Amazon S3",
    ],
    outcome: [
      "Reporting moved off Excel and Crystal Reports onto a governed Tableau Server deployment.",
      "ETL moved off PL/SQL and cron onto a managed tool with scheduling and monitoring.",
      "Adding EMR and Spark removed the Redshift ETL bottleneck rather than paying for a larger cluster.",
      "Inventory changes reached the lake continuously through DynamoDB Streams instead of batch extracts.",
    ],
    timeline:
      "~8 months for the warehouse and ETL pipelines with a 3-person team, plus another 4 months to move reporting onto Tableau Server.",
    diagrams: [
      {
        image: abebooksRedshift,
        alt: "AWS architecture: Postgres and social media APIs into Matillion on EC2, Redshift, and Tableau Server behind a load balancer",
        caption: "The migration target: Redshift, Matillion ETL and Tableau Server on AWS.",
      },
      {
        image: abebooksBigData,
        alt: "Extended AWS architecture adding Kinesis Firehose, Elastic MapReduce, Spark, Redshift Spectrum, SageMaker and Athena",
        caption:
          "The later build-out: EMR and Spark for web logs, DynamoDB Streams for inventory CDC, and Redshift Spectrum over the S3 data lake.",
      },
    ],
  },
  {
    slug: "product-analytics-aws",
    title: "Product Analytics for a Voice Assistant",
    tagline:
      "Replacing manual CSV extracts with an automated Redshift and Tableau product analytics stack.",
    seoTitle: "Product Analytics on AWS — Redshift, Tableau and SageMaker",
    seoDescription:
      "Building a product analytics solution on Amazon Redshift and Tableau for a voice assistant team, plus a customer churn model on SageMaker.",
    company: "Amazon Alexa — Natural Language Understanding",
    industry: "Consumer technology · internal data products",
    service: "data-platforms",
    team: [
      "1 Data Engineer",
      "2 BI Engineers",
      "1 Front End Engineer",
      "2 Software Development Engineers",
      "2 Technical Product Managers",
      "1 Senior Product Manager",
    ],
    startingState: [
      "Custom SQL extracts written out to CSV files",
      "CSVs combined into Tableau workbooks by hand",
      "No automation and no monitoring",
    ],
    useCases: [
      "Alexa feature launch monitoring",
      "New language launch monitoring",
      "Diving into poor NLU KPIs",
      "Churn model for Alexa customers",
    ],
    solution: [
      "Amazon Redshift as the analytics warehouse",
      "Tableau for reporting, replacing hand-built workbooks",
      "A custom data product built by SDEs for drill-down from Tableau dashboards",
      "Redshift Spectrum to join warehouse data with the S3 data lake",
      "Data unloaded to S3 and fed into SageMaker for the churn model",
    ],
    stack: [
      "Amazon Redshift",
      "Redshift Spectrum",
      "Tableau",
      "Amazon SageMaker",
      "Amazon S3",
    ],
    outcome: [
      "A manual, unmonitored CSV process became an automated warehouse with scheduled pipelines.",
      "Analysts stopped assembling workbooks by hand and worked from shared, governed dashboards.",
      "Drill-down moved into a purpose-built data product rather than more one-off extracts.",
      "The same platform then supported a churn model, without standing up a separate ML stack.",
    ],
    diagrams: [
      {
        image: alexaRedshift,
        alt: "Layered architecture from source layers through staging and business layer to an access layer with Tableau Server",
        caption: "Source, staging, business and access layers feeding Tableau Server.",
      },
      {
        image: alexaSagemaker,
        alt: "Data flow from source Redshift through a data extractor to target Redshift, then S3 into SageMaker and back out for campaign management",
        caption:
          "The churn model: Redshift and S3 consolidated, unloaded to S3, then trained and served through SageMaker.",
      },
    ],
  },
  {
    slug: "feature-engineering-for-ml",
    title: "Feature Engineering for Machine Learning",
    tagline:
      "Building ML feature pipelines from a core data lake — with no warehouse, no data model and no dashboards.",
    seoTitle: "Feature Engineering for ML — Spark, EMR and a Feature Store on AWS",
    seoDescription:
      "A greenfield ML data engineering project: extracting from a core data lake with Spark and Scala, combining features on EMR, and serving them for model training.",
    company: "Amazon Retail",
    industry: "E-commerce · machine learning",
    service: "ai-data-engineering",
    team: [
      "1 Data Engineer",
      "1 BI Engineer",
      "3 ML Engineers",
      "1 Software Development Engineer",
      "1 Technical Product Manager",
      "1 Senior Product Manager",
    ],
    startingState: ["Only a product idea and a set of requirements"],
    useCases: ["Onsite attribution", "Customer perception based on survey data"],
    solution: [
      "Extract from the core data lake using in-house Spark and Scala into a project-owned S3 account",
      "EMR and Spark to combine the data into features",
      "Separate paths for EMR+Spark SQL/Scala, EMR+PySpark, EC2 GPU and Redshift S3 unload",
      "A data science sandbox on Redshift and Redshift Spectrum",
    ],
    stack: [
      "Apache Spark",
      "Scala",
      "AWS EMR",
      "Amazon S3",
      "Amazon Redshift",
      "Redshift Spectrum",
      "EC2 GPU",
    ],
    outcome: [
      "A pure ML data engineering project: no dimensional model, no warehouse and no BI layer, because none of them were needed.",
      "The data engineering work was preparing data, enforcing data quality, automating pipelines and automating the ML build so model freshness could be measured.",
      "Features were produced in a project-owned account, decoupling the ML team from the core lake's release cycle.",
    ],
    diagrams: [
      {
        image: retailFeatureStore,
        alt: "Architecture from amazon.com through a data lake into landing zones, EMR feature generation, and GPU-backed deep learning output",
        caption:
          "From the core data lake into a landing zone, feature generation on EMR, and model output on GPU instances.",
      },
    ],
  },
  {
    slug: "delta-lake-gaming-analytics",
    title: "Delta Lake for Gaming Analytics",
    tagline:
      "Moving a game studio off on-premise SQL Server and Hive onto an Azure Databricks lakehouse.",
    seoTitle: "Databricks Delta Lake for Gaming Analytics on Azure",
    seoDescription:
      "Replacing HDInsight, Hive and on-premise SQL Server with an Azure Databricks Delta Lake medallion architecture for player behaviour and monetisation analytics.",
    company: "Microsoft Xbox — The Coalition",
    industry: "Video games · player analytics",
    service: "databricks",
    team: [
      "2 Data Engineers",
      "1 BI Engineer",
      "2 Data Scientists",
      "1 Senior Manager, Analytics",
    ],
    startingState: [
      "HDInsight and Hive for staging",
      "On-premise SQL Server and SSIS for fact and dimension tables",
    ],
    useCases: [
      "Player behaviour and engagement",
      "Monetisation",
      "Game balance",
      "Skin, weapon and feature usage",
      "Multiplayer balance",
    ],
    solution: [
      "Hourly batch from Azure Storage into Delta Lake",
      "Bronze and silver layers in append mode, with minimal and then schema-level transformation",
      "Gold fact tables built with MERGE, or INSERT plus DELETE",
      "Power BI for reporting",
      "Azure Bicep for infrastructure and Azure DevOps for CI/CD",
      "MLflow and Azure Data Factory orchestration in the service layer",
    ],
    stack: [
      "Azure Databricks",
      "Delta Lake",
      "Power BI",
      "Azure Data Factory",
      "Azure Bicep",
      "Azure DevOps",
      "MLflow",
    ],
    outcome: [
      "Staging and modelling consolidated onto one lakehouse instead of Hive plus an on-premise SQL Server.",
      "The medallion split made the transformation cost explicit: minimal in bronze, schema work in silver, heavy logic in gold.",
      "Append-mode bronze and silver left the door open to Structured Streaming without redesigning the pipeline.",
      "Infrastructure and deployment moved into code with Bicep and Azure DevOps.",
    ],
    diagrams: [
      {
        image: xboxDeltaLake,
        alt: "Azure architecture: Xbox and PC telemetry into Databricks processing, Delta Lake bronze silver and gold, and Power BI for business users",
        caption:
          "Telemetry into Databricks, a bronze/silver/gold Delta Lake, and Power BI for five distinct business audiences.",
      },
    ],
  },
  {
    slug: "open-source-analytics-pre-ipo-saas",
    title: "Analytics for a Pre-IPO SaaS Product",
    tagline:
      "An open-source data stack on AWS Athena, carrying finance reporting through an IPO.",
    seoTitle: "Open Source Data Stack on AWS Athena for a Pre-IPO SaaS Company",
    seoDescription:
      "Meltano, dbt core, Athena over a Parquet data lake, Looker and Prefect supporting financial, marketing and product reporting for a Canadian SaaS company before IPO.",
    company: "A Canadian SaaS product company (pre-IPO)",
    industry: "B2B SaaS",
    service: "data-platforms",
    team: [
      "6 Data Engineers",
      "6 Analytics Engineers (dbt, SQL, Looker)",
      "2 Product, 2 Marketing and 4 Financial analysts",
      "Managers for DE, AE, Product, Marketing and Finance",
      "1 Senior Manager Analytics, 1 Director of Data Engineering, 1 VP Data",
    ],
    startingState: [
      "An open-source stack carrying real technical debt",
      "A dbt adapter for Athena",
      "A data solution originally built by DevOps",
    ],
    useCases: [
      "Financial, marketing and product reporting",
      "BI dashboards",
      "Finance reporting for the IPO",
      "Product telemetry project with Snowplow",
    ],
    solution: [
      "Meltano for extraction",
      "dbt core targeting Athena, and later Redshift",
      "Athena as the SQL engine over a Parquet data lake",
      "Looker as the BI layer, Metabase for ad-hoc SQL",
      "Glue and Spark for product and clickstream log processing",
      "Prefect for orchestration, running on ECS alongside dbt",
      "Terraform for data engineering infrastructure, with Git and CI/CD",
    ],
    stack: [
      "AWS Athena",
      "dbt",
      "Meltano",
      "Looker",
      "Metabase",
      "AWS Glue",
      "Apache Spark",
      "Prefect",
      "Terraform",
      "Amazon Redshift",
      "Snowplow",
    ],
    outcome: [
      "Financial reporting held up to the scrutiny that comes with an IPO process.",
      "Infrastructure moved into Terraform and code review, away from a DevOps-built solution nobody on the data team owned.",
      "The team moved to Redshift for the warehouse to get past dbt-on-Athena constraints — a reminder that open source shifts cost rather than removing it.",
    ],
    diagrams: [
      {
        image: saasAthena,
        alt: "Data platform architecture with sources, ingestion, raw and clean storage, analysis and BI, reverse ETL, orchestration and observability",
        caption:
          "The full open-source platform: ingestion, raw and clean storage on S3, Athena for analysis, plus reverse ETL and observability.",
      },
    ],
  },
  {
    slug: "snowflake-analytics-public-saas",
    title: "Snowflake Analytics for a Public SaaS Company",
    tagline:
      "A Snowflake warehouse serving internal BI, self-service, customer-facing insights and ML features.",
    seoTitle: "Snowflake Data Warehouse for a Public SaaS Company",
    seoDescription:
      "Snowflake, dbt core, Kafka Connect, Fivetran, Looker and Tableau supporting BI, self-service reporting, customer-facing insights and ML features at scale.",
    company: "A Gartner-leader SaaS product company",
    industry: "B2B SaaS · publicly traded",
    service: "snowflake",
    team: [
      "Data Platform team, ~8 engineers, managing the Kafka stream",
      "Data Pipeline team, ~6 engineers, managing ingestion into Snowflake",
      "Data Warehouse team, ~6 engineers, managing core DW models",
      "Separate ML and BI teams",
      "1 Senior Manager and 1 VP of Data",
    ],
    startingState: [],
    useCases: [
      "Data warehouse and BI reporting in Tableau",
      "Self-service reporting in Looker and Snowsight",
      "Customer-facing data insights",
      "ML features for the product",
      "Technical sales team dashboards",
    ],
    solution: [
      "Snowflake as the core data warehouse",
      "dbt core for all Snowflake transformations",
      "Kafka Connect writing MongoDB and application logs to S3, read through Snowflake external tables",
      "Fivetran for Salesforce, Marketo, Google Sheets and similar sources",
      "Looker for self-service BI, Tableau for curated BI",
      "Cube.js powering customer-facing visualisations",
      "Airflow for orchestration, with dbt running on ECS",
      "Terraform for infrastructure and Snowflake itself, with Git and CI/CD",
    ],
    stack: [
      "Snowflake",
      "dbt",
      "Apache Kafka",
      "Fivetran",
      "Looker",
      "Tableau",
      "Apache Airflow",
      "Cube.js",
      "Terraform",
      "Amazon S3",
    ],
    outcome: [
      "One warehouse served four distinct audiences: internal BI, self-service analysts, the product's own customers, and ML.",
      "Splitting platform, pipeline and warehouse into separate teams scaled delivery — at the cost of fewer people holding the end-to-end picture.",
      "Snowflake and its access model were managed in Terraform, so environment changes went through review like any other code.",
    ],
    diagrams: [
      {
        image: saasSnowflake,
        alt: "Architecture with MongoDB, Postgres and product logs through Kafka to an S3 landing bucket, into Snowflake external, staging, core and datamart tables, out to Tableau and Looker",
        caption:
          "Kafka to S3 to Snowflake external tables, then staging, core and team datamarts serving Tableau, Looker and ML products.",
      },
    ],
  },
  {
    slug: "serverless-data-lake-telecom",
    title: "Serverless Data Lake for a Telecom",
    tagline:
      "A config-driven AWS data lake where every job spins up its own EMR cluster and tears it down.",
    seoTitle: "AWS Serverless Data Lake on S3 for a Telecom Company",
    seoDescription:
      "A YAML-configured, volume-triggered data lake on S3 with EMR and Spark, Athena for SQL, and selected loads into Snowflake for the largest North American telecom.",
    company: "One of the largest North American telecom companies",
    industry: "Telecommunications",
    service: "data-platforms",
    team: [
      "1 Data Engineer",
      "2 BI Engineers",
      "1 Front End Engineer",
      "3 Architects",
      "6 ETL / big data developers",
      "1 Big Data Manager",
    ],
    startingState: [],
    useCases: [
      "Ingesting data into a Snowflake staging layer",
      "Transforming raw data in the S3 data lake",
      "ML pipelines for data quality",
    ],
    solution: [
      "EMR and Spark jobs triggered by file volume rather than a fixed schedule",
      "Each job defined as a set of YAML configuration files in a Git repo",
      "Jobs create their own EMR cluster and terminate it on success",
      "Athena for SQL over the processed data on S3",
      "Selected jobs pushing data into Snowflake",
      "Tableau and Alteryx for consumption",
      "Sphinx for documentation and a data quality portal",
    ],
    stack: [
      "Amazon S3",
      "AWS EMR",
      "Apache Spark",
      "AWS Athena",
      "Snowflake",
      "Tableau",
      "Alteryx",
      "Sphinx",
    ],
    outcome: [
      "Compute cost tracked actual work, because clusters existed only for the length of a job.",
      "Volume-based triggers meant pipelines reacted to data arriving instead of waiting for the next window.",
      "Pipelines were configuration, not bespoke code, so a new feed did not mean a new codebase.",
      "The team's direction was consolidating onto Snowflake and moving to EMR Serverless.",
    ],
    diagrams: [
      {
        image: telecomLake,
        alt: "AWS architecture with batch and streaming ingest, Lambda-triggered EMR and Glue ETL, configuration in DynamoDB, and consumption through Athena, Snowflake and SageMaker",
        caption:
          "Batch and streaming ingest, configuration-driven ETL on EMR and Glue, and consumption through Athena, Snowflake and SageMaker.",
      },
    ],
  },
  {
    slug: "open-source-analytics-fintech",
    title: "Open Source Analytics for a FinTech",
    tagline:
      "A small data team running an open-source analytics stack at a trading company.",
    seoTitle: "Open Source Analytics Stack for a FinTech Trading Company",
    seoDescription:
      "How a four-person data team ran an open-source analytics solution at one of the largest North American FinTech trading companies.",
    company: "One of the largest North American FinTech trading companies",
    industry: "Financial technology · trading",
    service: "data-platforms",
    team: [
      "3 Data Engineers",
      "1 Analytics Engineer",
      "1 Data Director",
    ],
    startingState: [],
    useCases: [],
    solution: [
      "An open-source analytics stack owned end to end by a four-person data team",
    ],
    stack: ["dbt", "Open source data stack"],
    outcome: [
      "A reminder that team size, not tooling, sets the ceiling: four people owning an open-source stack spend a meaningful share of their time on the stack itself.",
      "Open source for data solutions tends to slow delivery and raise technical debt — it often means reading, modifying and fixing source code, which is not fast time to market.",
    ],
    diagrams: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectsForService(slug: string): Project[] {
  return projects.filter((p) => p.service === slug);
}
