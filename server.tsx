const cloudinary = require('cloudinary').v2;
import { Redis } from '@upstash/redis';

cloudinary.config({
    cloud_name: 'dmgooo1dr',
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});


const redis = Redis.fromEnv();

export const getImagesFromCloud = async (folderPath: string) => {
    const cacheKey = `cloudinary:${folderPath}:images`;
    const cached = await redis.get<string[]>(cacheKey);
    if (cached) {
        return cached;
    }

    try {
        const result = await cloudinary.api.resources_by_asset_folder(folderPath, {
            tags: false, metadata: false, max_results: 50,
        })
        const imageUrls = result.resources.map((resource: any) => resource.secure_url);
        await redis.set(cacheKey, imageUrls, { ex: 3600 });

        return imageUrls;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}


