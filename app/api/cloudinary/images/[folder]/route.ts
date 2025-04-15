import { NextResponse } from "next/server";

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dmgooo1dr',
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});


export const GET = async (req: Request, { params }: any) => {
    const { folder } = await params;  

    try {
        const result = await cloudinary.api.resources_by_asset_folder(folder, {
            tags: false, metadata: false, max_results: 50,
        })
        const imageUrls = result.resources.map((resource: any) => resource.secure_url);
        return NextResponse.json(imageUrls);
    } catch (error) {
        console.error('Error fetching images:', error);
        return NextResponse.json({ error: 'Failed to fetch images from' }, { status: 500 })
    }
}
