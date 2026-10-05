export type Experience = {
  when: string
  title: string
  org: string
  detail: string
}

export const experience: Experience[] = [
  {
    when: '2023 — Now',
    title: 'Senior Data Engineer',
    org: 'Janus Henderson Investors',
    detail:
      'Databricks lakehouse and Snowflake MDM for fund data; Azure Data Factory, dbt, .NET/Python APIs, Power BI, and 17 production AI agents (LangChain / LangGraph / RAG) for BAU triage and integrity checks.',
  },
  {
    when: 'Prior',
    title: 'Data & Analytics Engineer',
    org: 'Hubbell',
    detail: 'Analytics platforms, ETL, and reporting for industrial manufacturing data.',
  },
  {
    when: 'Prior',
    title: 'Data Engineer',
    org: 'Zurich',
    detail: 'Insurance data pipelines, risk analytics, and enterprise SQL/Spark workloads.',
  },
  {
    when: 'Prior',
    title: 'Analytics / Data roles',
    org: 'TransUnion CIBIL · Citi · American Express · Cognizant',
    detail:
      'Fraud and credit-risk models, latency cuts on ETL, and enterprise data platforms across banking and credit bureaus.',
  },
]

export const education = [
  {
    when: 'M.S.',
    title: 'Computer Science',
    org: 'Northwest Missouri State University',
    detail: 'Graduate study in computer science.',
  },
  {
    when: 'B.Tech / M.Tech',
    title: 'Engineering',
    org: 'IIT Madras',
    detail: 'Dual degree from the Indian Institute of Technology Madras.',
  },
]
