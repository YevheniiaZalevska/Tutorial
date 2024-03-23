const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const createGalleryItemsMarkup = images => {
  return images
    .map(({ url, alt }) => {
      return `<li class="gallery-item"><img src="${url}" alt="${alt}" width="300" height="200"></li>`;
    })
    .join('');
};

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', createGalleryItemsMarkup(images));

const styles = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 16px;
  }
  .gallery-item {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }
  .gallery-item img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
