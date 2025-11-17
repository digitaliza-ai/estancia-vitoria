import { useEffect, useState } from 'react';

export default function TestDrive() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testDrive = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
      const SALAO_INTERNO = process.env.NEXT_PUBLIC_DRIVE_FOLDER_SALAO_INTERNO;
      const SALAO_EXTERNO = process.env.NEXT_PUBLIC_DRIVE_FOLDER_SALAO_EXTERNO;
      const EVENTOS = process.env.NEXT_PUBLIC_DRIVE_FOLDER_EVENTOS_REALIZADOS;

      console.log('API KEY:', API_KEY);
      console.log('Salão Interno ID:', SALAO_INTERNO);
      console.log('Salão Externo ID:', SALAO_EXTERNO);
      console.log('Eventos ID:', EVENTOS);

      try {
        const url = `https://www.googleapis.com/drive/v3/files?q='${SALAO_INTERNO}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,webViewLink,webContentLink,thumbnailLink)`;
        
        console.log('Testing URL:', url);

        const response = await fetch(url);
        const data = await response.json();

        console.log('Response status:', response.status);
        console.log('Response data:', data);

        setResult({
          status: response.status,
          ok: response.ok,
          data: data,
          env: {
            API_KEY: API_KEY ? 'Definida' : 'NÃO DEFINIDA',
            SALAO_INTERNO: SALAO_INTERNO ? 'Definida' : 'NÃO DEFINIDA',
            SALAO_EXTERNO: SALAO_EXTERNO ? 'Definida' : 'NÃO DEFINIDA',
            EVENTOS: EVENTOS ? 'Definida' : 'NÃO DEFINIDA',
          }
        });
      } catch (error) {
        console.error('Error:', error);
        setResult({
          error: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    testDrive();
  }, []);

  if (loading) return <div style={{ padding: '50px' }}>Testando...</div>;

  return (
    <div style={{ padding: '50px', fontFamily: 'monospace' }}>
      <h1>Teste Google Drive API</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
