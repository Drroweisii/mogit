const LEVEL_COLORS = {
  1: { primary: '#4ADE80', secondary: '#22C55E', text: 'text-green-50' },
  5: { primary: '#34D399', secondary: '#10B981', text: 'text-emerald-50' },
  10: { primary: '#2DD4BF', secondary: '#14B8A6', text: 'text-teal-50' },
  15: { primary: '#00FF9D', secondary: '#00CC7A', text: 'text-green-50' },
  20: { primary: '#00FFB2', secondary: '#00CC8C', text: 'text-emerald-50' },
  30: { primary: '#00FFC8', secondary: '#00CC9E', text: 'text-teal-50' },
  40: { primary: '#00FFDD', secondary: '#00CCB0', text: 'text-cyan-50' },
  50: { primary: '#00FFF2', secondary: '#00CCC2', text: 'text-blue-50' },
};

export function getLevelColor(level: number) {
  if (level >= 50) return LEVEL_COLORS[50];
  if (level >= 40) return LEVEL_COLORS[40];
  if (level >= 30) return LEVEL_COLORS[30];
  if (level >= 20) return LEVEL_COLORS[20];
  if (level >= 15) return LEVEL_COLORS[15];
  if (level >= 10) return LEVEL_COLORS[10];
  if (level >= 5) return LEVEL_COLORS[5];
  return LEVEL_COLORS[1];
}