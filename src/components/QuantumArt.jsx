const wavePaths = Array.from({ length: 38 }, (_, index) => {
  const angle = index * Math.PI / 38;
  const points = Array.from({ length: 181 }, (_, pointIndex) => {
    const t = pointIndex * Math.PI * 2 / 180;
    const x = 171 * Math.cos(t);
    const y = 72 * Math.sin(t);
    return `${(260 + x * Math.cos(angle) - y * Math.sin(angle)).toFixed(2)},${(220 + x * Math.sin(angle) + y * Math.cos(angle)).toFixed(2)}`;
  });
  return `M${points.join('L')}Z`;
});

export default function QuantumArt() {
  return (
    <div className="quantum-figure">
      <div className="figure-top"><span>THE SPACE OF POSSIBILITY</span><span>01 / ψ</span></div>
      <svg id="quantum-art" viewBox="0 0 520 440" role="img" aria-labelledby="quantum-title">
        <title id="quantum-title">Abstract wave diagram with intersecting quantum state paths</title>
        <defs>
          <radialGradient id="halo"><stop stopColor="#4c9d98" stopOpacity=".18" /><stop offset="1" stopColor="#4c9d98" stopOpacity="0" /></radialGradient>
          <linearGradient id="wave"><stop stopColor="#3e736f" /><stop offset=".5" stopColor="#c0eae0" /><stop offset="1" stopColor="#61938e" /></linearGradient>
        </defs>
        <circle cx="260" cy="220" r="220" fill="url(#halo)" />
        <g fill="none" stroke="url(#wave)" strokeWidth=".8">
          {wavePaths.map((path, index) => <path key={index} d={path} opacity={index % 3 === 0 ? '.8' : '.4'} />)}
        </g>
        <g fill="none" stroke="#709c9e" strokeOpacity=".3"><circle cx="260" cy="220" r="163" strokeDasharray="2 7" /><path d="M30 220H490M260 28V412" /></g>
        <circle cx="260" cy="220" r="5" fill="#d5efe5" />
        <g fill="#a3c9c3" fontFamily="Georgia, serif" fontSize="20"><text x="267" y="43">|0〉</text><text x="267" y="410">|1〉</text></g>
      </svg>
      <div className="figure-bottom"><span>A state can hold many possibilities.<br />Measurement gives us one result.</span><span className="formula">α|0〉 + β|1〉</span></div>
    </div>
  );
}
