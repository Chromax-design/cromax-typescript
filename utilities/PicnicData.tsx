export const PicnicData = Array.from({ length: 50 }, (_, i) => {
    const index = i + 1;
    return {
        imgSrc: `/picnic/picnic%20${index}.jpg`,
        imgAlt: `picnic gallery ${index}`,
    };
});
