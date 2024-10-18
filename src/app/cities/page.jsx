import Image from 'next/image'
import React from 'react'
import SectionTitle from '../Homepage/components/SectionTitle'
import SearchFilters_cities from './components/SearchFilters_cities'
import Card from './components/Card'

const page = () => {
  return (
    <div>
        <section className="mt-12 mb-12 text-center">
        <SectionTitle title="Courses by" highlight="CITIES" />

        <div className="flex justify-center my-6">
          <Image    
            src="/map.png" // Replace with actual world map image
            alt="World Map"
            width={1000}
            height={200}
          />
        </div>
      </section>
      <div className="flex justify-center">
          <SearchFilters_cities />
        </div>
        <div className='flex justify-center'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>
            <Card image={'/city.webp'} title={'Tv Montage & Editing Skills'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'} country={'Egypt'}/>

        </div>
        </div>
        <div className='flex justify-center mt-10 mb-10 text-2xl font-bold'>
            Similar Courses
        </div>
    </div>
  )
}

export default page