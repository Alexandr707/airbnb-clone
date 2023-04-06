'use client';
import { FC } from 'react';

interface HeadingProps {
  tilte: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: FC<HeadingProps> = ({ tilte, center, subtitle }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className='text-2xl font-bold'>{tilte}</div>
      <div className='font-light text-neutral-500'>{subtitle}</div>
    </div>
  );
};

export default Heading;
