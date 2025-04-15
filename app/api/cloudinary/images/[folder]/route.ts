import { NextResponse } from "next/server";

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dmgooo1dr',
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});


export const GET = async (req: Request, { params }: { params: { folder: string } }) => {
    const { folder } = await params;  

    try {
        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: `${folder}`,
            max_results: 50,
        });

        const images = result.resources.map((res: any) => ({
            url: res.secure_url,
            public_id: res.public_id,
        }));

        return NextResponse.json(images);
    } catch (error) {
        console.error('Error fetching images:', error);
        return NextResponse.json({ error: 'Failed to fetch images from' }, { status: 500 })
    }
}
