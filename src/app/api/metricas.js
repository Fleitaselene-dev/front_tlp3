export const getMetricas = async () => {
  const response = await fetch("https://prediccion-riesgo-burnout.onrender.com/metricas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};