

// const getImagePromesa = () => new Promise(resolve => resolve('https://sdgsdg.com'));
// getImagePromesa().then(console.log);

const getImage = async () => {
    try {
        const apiKey = 'Owiu82HW62WI7pOCooVwaJYfbEFmUG5H';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        // manejo del error
    }

}

getImage();
