function resizeImages(container, img1, img2){

    var containerWidth = container.offsetWidth;

    var img1Width = img1.naturalWidth;
    var img1Height = img1.naturalHeight;
    var img2Width = img2.naturalWidth;
    var img2Height = img2.naturalHeight;

    //make image2 the same height as image1
    img2ScaleFactor = img1Height / img2Height;

    var img2Width = img2Width * img2ScaleFactor;
    var img2Height = img2Height * img2ScaleFactor;

    // Calculate the total width now that image two is scaled
    var newWidth = img1Width + img2Width;

    // calculate how to chage the size of both images, so they fit the width
    var scaleFactor =0.99* containerWidth / newWidth;


    // Set the images to have the same height and scale their width accordingly
    var targetHeight = Math.min(img1Height, img2Height);  // You can choose a fixed height or use the minimum height of both images
 
    img1.style.width = (img1Width * scaleFactor) + 'px';
    img1.style.height = (img1Height * scaleFactor) + 'px';
    
    img2.style.width = (img2Width * scaleFactor) + 'px';
    img2.style.height = (img2Height * scaleFactor) + 'px';
}

document.addEventListener("DOMContentLoaded", function() {
    // Get all image containers in the document
    const containers = document.querySelectorAll('.image-container');

    containers.forEach(container => {
        const images = container.querySelectorAll('img');
        const image1 = images[0];
        const image2 = images[1];

        if (image1 && image2) {
            let loadedCount = 0;

            function onImageLoad() {
                loadedCount++;
                if (loadedCount === 2) {  // Both images are loaded
                    resizeImages(container, image1, image2);
                }
            }

            // Add load event listeners
            image1.addEventListener('load', onImageLoad);
            image2.addEventListener('load', onImageLoad);

            // If the images are already cached, trigger the load handler manually
            if (image1.complete) onImageLoad();
            if (image2.complete) onImageLoad();
        }
    });
});
