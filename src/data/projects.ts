export type Project = {
  id: string
  number: string
  category: string
  title: string
  metric: string
  href: string
  role?: string
  image?: string
  blurb?: string
}

export const projects: Project[] = [
  {
    id: 'job-match-ai',
    number: '01',
    category: 'AI APPLICATION',
    title: 'Job-Match AI',
    metric: 'Live demo · FastAPI + skill scoring',
    href: 'https://job-match-ai-rawb.onrender.com',
    role: 'Solo build · live on Render',
    image: '/project-shots/job-match-ai.png',
    blurb: 'Resume ↔ job skill scorer with FastAPI and optional ChatGPT blending.',
  },
  {
    id: 'ai-engineer-projects',
    number: '02',
    category: 'AI ENGINEERING',
    title: 'AI Engineer Projects',
    metric: 'Symptom checker · finance sentiment · multi-agent digest',
    href: 'https://github.com/Bchamp21/ai-engineer-projects',
    role: 'LangChain / LangGraph apps',
    blurb: 'Deployed LLM apps spanning triage, sentiment, and research agents.',
  },
  {
    id: 'azure-databricks',
    number: '03',
    category: 'DATA PLATFORM',
    title: 'Azure Databricks Lakehouse',
    metric: '500+ fund datasets · medallion MDM',
    href: 'https://github.com/Bchamp21/data-engineering-azure-databricks-project',
    role: 'ADF · ADLS Gen2 · Delta Lake',
    blurb: 'Medallion MDM pipelines with Azure Data Factory and Delta Lake.',
  },
  {
    id: 'aws-gcp',
    number: '04',
    category: 'CLOUD DE',
    title: 'AWS & GCP Pipelines',
    metric: 'Multi-cloud data engineering',
    href: 'https://github.com/Bchamp21/data-engineering-aws',
    role: 'End-to-end cloud DE',
    blurb: 'End-to-end data engineering projects across major clouds.',
  },
  {
    id: 'aura-ai',
    number: '05',
    category: 'PRODUCT',
    title: 'AuraAI',
    metric: 'FastAPI · React · Supabase · Stripe',
    href: 'https://github.com/Bchamp21/AuraAI',
    role: 'Full-stack AI chatbot SaaS',
    blurb: 'AI chatbot SaaS stack with billing and auth.',
  },
  {
    id: 'daily-de-ai',
    number: '06',
    category: 'PRACTICE',
    title: 'Daily DE + AI',
    metric: '180 days of builds',
    href: 'https://github.com/Bchamp21/daily-de-ai-projects',
    role: 'Builder rhythm',
    blurb: '180 days of real data engineering and AI mini-projects.',
  },
]
