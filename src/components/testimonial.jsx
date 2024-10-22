/** @format */

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Reavel from './reveal';

const Testimonial = () => {
  return (
    <>
      <div className='bg-primary py-12 z-1'>
        <div className='max-w-6xl mx-6 md:mx-auto my-6 md:my-24'>
          <Reavel>
            {' '}
            <p className='text-xl md:text-5xl font-bold pb-4 text-yellow-500'>
              Client Stories, Testimonials, Genuine Results and Tangible Impact
            </p>
          </Reavel>
        </div>
        <div className='max-w-6xl mx-6 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
          {testimonials.map((testimonial, index) => (
            <Reavel key={index}>
              <Card className='hover:shadow-xl cursor-pointer  transition-all duration-300 text-primary bg-white'>
                <CardHeader>
                  <CardTitle>
                    <span className='text-md md:text-2xl font-bold text-primary'>
                      {testimonial.company}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-primary'>{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className='flex flex-col gap-2'>
                    <p className='text-md md:text-lg font-bold'>
                      {testimonial.name}
                    </p>
                    <p className='font-italic text-sm text-gray-500'>
                      {testimonial.title}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </Reavel>
          ))}
        </div>
      </div>
    </>
  );
};

export const testimonials = [
  {
    id: 1,
    name: 'Mrs.Pallavi',
    title: 'Managing Director.',
    company: 'Parambaryam Delights',
    content:
      'Working with the Ayn Media team has been a seamless experience. Two things stood out: their quick response time and accessibility. They were always ready to answer my queries and offer timely updates throughout the project. Additionally, their deep understanding of our project goals resulted in precise and effective execution.',
  },
  {
    id: 2,
    name: 'Mr.Mohammed Azar',
    title: 'Director Operations.',
    company: 'GL Cars',
    content: `Collaborating with Ayn Media was a great decision. Their team's responsiveness to emails was impressive, always ensuring our questions were answered promptly. They fully grasped the project's scope and went above and beyond to deliver exactly what we needed, on time and within budget.`,
  },

  {
    id: 3,
    name: 'Mr.Sandheep',
    title: 'CEO',
    company: 'Plan Your Destination',
    content:
      'I would like to express our gratitude for the outstanding work delivered by Ayn Media. Your team’s creativity and strategic approach have truly made a difference, and your professionalism and dedication have been exceptional throughout the project.',
  },
  {
    id: 4,
    name: 'Mr.Bhaskar',
    title: 'Director',
    company: 'BN Construction',
    content: `We would like to extend our deepest appreciation to Ayn Media for your excellent efforts in our digital campaigns. Your team's expertise, quick responsiveness, and dedication have significantly contributed to our growth and success.
`,
  },
];
export default Testimonial;
