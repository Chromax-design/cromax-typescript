const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dmgooo1dr',
    api_key: '964244878845177',
    api_secret: 'BZOcR2df8q7EId8nqwDaPwRic3k'
});

export const getImagesFromCloud = async (folderPath: string) => {
    try {
        const result = await cloudinary.api.resources_by_asset_folder('test', { tags: true, metadata: true })
        return result;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

