interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface CardProps {
  title: string;
  content: string;
}

export interface PropertyProps{
  name: string;
  description: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}