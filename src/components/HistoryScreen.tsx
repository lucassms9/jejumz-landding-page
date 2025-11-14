import { TrendingUp, Award, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

export function HistoryScreen() {
  // Mock data para o gráfico
  const weekData = [
    { day: 'Seg', hours: 14 },
    { day: 'Ter', hours: 16 },
    { day: 'Qua', hours: 15 },
    { day: 'Qui', hours: 18 },
    { day: 'Sex', hours: 16 },
    { day: 'Sáb', hours: 14 },
    { day: 'Dom', hours: 17 },
  ];

  const stats = {
    average: 15.7,
    longest: 18,
    streak: 7,
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-gray-800 text-center">Histórico</h1>
      </div>

      {/* Chart */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-700 mb-4">Última Semana</h2>
          
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weekData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                domain={[0, 24]}
                ticks={[0, 6, 12, 18, 24]}
              />
              <Bar dataKey="hours" radius={[8, 8, 0, 0]}>
                {weekData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.hours >= 16 ? '#f59e0b' : '#3b82f6'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Statistics */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-blue-50 rounded-2xl p-4 text-center">
            <TrendingUp className="text-blue-500 mx-auto mb-2" size={24} strokeWidth={2} />
            <div className="text-gray-800 mb-1">{stats.average}h</div>
            <div className="text-xs text-gray-600">Média semanal</div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 text-center">
            <Award className="text-amber-500 mx-auto mb-2" size={24} strokeWidth={2} />
            <div className="text-gray-800 mb-1">{stats.longest}h</div>
            <div className="text-xs text-gray-600">Maior jejum</div>
          </div>

          <div className="bg-green-50 rounded-2xl p-4 text-center">
            <Calendar className="text-green-500 mx-auto mb-2" size={24} strokeWidth={2} />
            <div className="text-gray-800 mb-1">{stats.streak}</div>
            <div className="text-xs text-gray-600">Dias seguidos</div>
          </div>
        </div>
      </div>

      {/* Insight Card */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="bg-white/20 rounded-full p-2 shrink-0">
              <TrendingUp className="text-white" size={20} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-white mb-2">Insight da Semana</h3>
              <p className="text-sm text-blue-50 leading-relaxed">
                Seus jejuns acima de 16h coincidiram com mais energia e melhor sono. Continue nesse ritmo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
