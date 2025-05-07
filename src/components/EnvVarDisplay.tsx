interface EnvVarDisplayProps {
  variables: { name: string; value?: string }[];
}

const EnvVarDisplay: React.FC<EnvVarDisplayProps> = ({ variables }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded-md mt-4">
      <h3 className="text-md font-bold mb-2">Required Environment Variables:</h3>
      <ul className="list-disc list-inside text-sm">
        {variables.map((v, i) => (
          <li key={i}>
            <strong>{v.name}</strong>: {v.value || "<enter-value>"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnvVarDisplay;
