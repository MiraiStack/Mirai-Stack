import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export const size = {
    width: 300,
    height: 300,
};
export const contentType = 'image/png';

export default async function Icon() {
    const logoPath = path.join(process.cwd(), 'public', 'logo.png');
    const logoData = fs.readFileSync(logoPath);
    const base64 = logoData.toString('base64');
    const src = `data:image/png;base64,${base64}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '64px', // Nice rounded corners for a 300x300 canvas
                    overflow: 'hidden',
                    backgroundColor: '#070a0d',
                }}
            >
                <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        ),
        { ...size }
    );
}
