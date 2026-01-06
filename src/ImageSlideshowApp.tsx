// ImageSlideshowApp.tsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const images = [
  'https://via.placeholder.com/400x250?text=Image+1',
  'https://via.placeholder.com/400x250?text=Image+2',
  'https://via.placeholder.com/400x250?text=Image+3',
];

export default function ImageSlideshowApp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 object-cover rounded-md"
        />
        <div className="flex gap-2">
          <Button onClick={prev} variant="outline">
            Previous
          </Button>
          <Button onClick={next} variant="outline">
            Next
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          {currentIndex + 1} / {images.length}
        </p>
      </CardContent>
    </Card>
  );
}