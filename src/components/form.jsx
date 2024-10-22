/** @format */
'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from '@/components/ui/textarea';

// Zod schema for form validation
const formSchema = z.object({
  interest: z.string().min(2, 'Interest must be at least 2 characters long'),
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters long'),
  website: z
    .string()
    .min(10, 'Website URL must be at least 10 characters long'),
  spent: z.string().min(2, 'Spent must be at least 2 characters long'),
  requirements: z
    .string()
    .min(2, 'Requirements must be at least 2 characters long'),
});

const EnquiryForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interest: '',
      name: '',
      email: '',
      phone: '',
      website: '',
      spent: '',
      requirements: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
      });
      if (response.ok) {
        form.reset({
          interest: '',
          name: '',
          email: '',
          phone: '',
          website: '',
          spent: '',
          requirements: '',
        });
        alert('Form submitted successfully! We will get back to you soon.');
      } else {
        console.error('Error submitting form:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4'>
          {/* Interest Field */}
          <FormField
            control={form.control}
            name='interest'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select your interest</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='You are interested in...' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Social Media Marketing'>
                        Social Media Marketing
                      </SelectItem>
                      <SelectItem value='SEO'>SEO</SelectItem>
                      <SelectItem value='Paid ads'>Paid ads</SelectItem>
                      <SelectItem value='New Website'>New Website</SelectItem>
                      <SelectItem value='Website Revamp'>
                        Website Revamp
                      </SelectItem>
                      <SelectItem value='Graphic Designing'>
                        Graphic Designing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Name Field */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your name</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='John Doe' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your email address</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='xxxx@xxxx.com' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your phone number</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='+91xxxxxxxxxx' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Website Field */}
          <FormField
            control={form.control}
            name='website'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your website URL</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='www.example.com' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Spent Field */}
          <FormField
            control={form.control}
            name='spent'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your previous digital spent</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select your previous spent' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='₹ 25,000 to ₹ 35,000'>
                        ₹ 25,000 to ₹ 35,000
                      </SelectItem>
                      <SelectItem value='₹ 35,000 to ₹ 50,000'>
                        ₹ 35,000 to ₹ 50,000
                      </SelectItem>
                      <SelectItem value='₹ 50,000 to ₹ 75,000'>
                        ₹ 50,000 to ₹ 75,000
                      </SelectItem>
                      <SelectItem value='₹ 75,000 and ₹ 1 Lakh'>
                        ₹ 75,000 & ₹ 1 Lakh
                      </SelectItem>
                      <SelectItem value='₹ 1 Lakh and above'>
                        ₹ 1 Lakh & above
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Requirements Field */}
          <FormField
            control={form.control}
            name='requirements'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your requirements</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder='Enter your requirements' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button variant='outline' type='submit' size='lg'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EnquiryForm;
