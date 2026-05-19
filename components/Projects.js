export default function Projects() {
  const projects = [
    {
      title: "AI Budgeting & Expense Prediction Suite",
      bullets: [
        "Built ML models (Random Forest, XGBoost) to predict monthly expenses with 92% accuracy.",
        "Automated categorization reduced manual budgeting time by 40%.",
        "Designed Tableau dashboards for forecasting and trend analysis."
      ],
      tools: "Python, Scikit-learn, Tableau",
      link: "#"
    },
    {
      title: "SQL Analytics Case Study",
      bullets: [
        "Wrote 30+ optimized SQL queries for KPI reporting and segmentation.",
        "Built Power BI dashboards for churn, revenue, and retention.",
        "Improved query performance by 60% using indexing and CTEs."
      ],
      tools: "SQL, Power BI",
      link: "#"
    },
    {
      title: "ML Classification Project",
      bullets: [
        "Trained multiple models (LogReg, SVM, Random Forest).",
        "Achieved strong F1-score with hyperparameter tuning.",
        "Deployed via Flask + Render for real-time predictions."
      ],
      tools: "Python, Scikit-learn, Flask",
      link: "#"
    },
    {
      title: "Business Analytics Case Study",
      bullets: [
        "Conducted EDA to identify 3 actionable insights.",
        "Built KPI dashboards summarizing performance.",
        "Presented findings in a structured business narrative."
      ],
      tools: "Python, Tableau",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="space-y-8">
      <h3 className="text-2xl font-semibold">Projects</h3>

      {projects.map((p, i) => (
        <div key={i} className="border rounded p-6 space-y-3">
          <h4 className="text-xl font-semibold">{p.title}</h4>
          <ul className="list-disc pl-6 text-gray-600">
            {p.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">Tools: {p.tools}</p>
          <a href={p.link} className="text-blue-600 underline">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
}
