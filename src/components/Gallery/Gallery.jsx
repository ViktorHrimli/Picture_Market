import {
  SectionGallery,
  GalleryTitle,
  GallerySliderWrapper,
} from 'components/Gallery/Gallery.styled';

const Gallery = () => {
  return (
    <SectionGallery>
      <GalleryTitle>Enjoy our Gallerry</GalleryTitle>
      <GallerySliderWrapper>
        <img
          src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg"
          alt="men"
        />
        <img
          src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg"
          alt="men"
        />
        <img
          src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg"
          alt="men"
        />
      </GallerySliderWrapper>
    </SectionGallery>
  );
};

export { Gallery };
