export default function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <h3 className="text-2xl font-semibold">Skills</h3>

      <div className="grid grid-cols-2 gap-4 text-gray-600">
        <div>
          <strong>Languages:</strong> Python, SQL, R
        </div>
        <div>
          <strong>ML:</strong> Scikit-learn, XGBoost, Random Forest, HMMs
        </div>
        <div>
          <strong>Analytics:</strong> Tableau, Power BI, Excel, A/B Testing
        </div>
        <div>
          <strong>Cloud:</strong> AWS, Azure
        </div>
        <div>
          <strong>Other:</strong> Git, APIs, Flask
        </div>
      </div>
    </section>
  );
}