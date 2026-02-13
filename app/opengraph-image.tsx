import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Dr. Magomed Batalov - Board Certified Endocrinologist & Hormone Specialist';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Dr. Magomed Batalov, M.D.
          </h1>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 'normal',
              color: '#ef4444',
              marginBottom: 30,
            }}
          >
            Elite Endocrinologist
          </h2>
          <p
            style={{
              fontSize: 32,
              color: '#d1d5db',
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Expert Hormone Optimization • TRT Guidance • Competition Prep • Metabolic Health
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
