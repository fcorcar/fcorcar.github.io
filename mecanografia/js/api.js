export async function cargar(ruta) {
    try {
        const response = await fetch(ruta);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();

        return data;
    } catch (err) {
        console.error('Error al cargar:', err);
        return [];
    }
}
