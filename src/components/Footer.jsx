import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="text-white pt-6 outline-double outline-indigo-950 mt-10">
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold">About Us</h3>
        <p className="mt-4 text-secondary">Our team of experienced software engineers and designers is passionate about crafting innovative solutions that address complex business challenges.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold">Contact</h3>
        <p className="mt-4 text-secondary">1234 Main Street</p>
        <p className='text-secondary'>City, State 12345</p>
        <p className="mt-4 text-secondary">velois@info.com</p>
        <p className='text-secondary'>123-456-7890</p>
      </div>
      <div>
        <h3 className="text-xl font-bold">Services</h3>
        <ul className="mt-4 text-secondary">
          <li><a href="#about">Web Design</a></li>
          <li><a href="#about">Graphic Design</a></li>
          <li><a href="#about">Digital Marketing</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Social Media</h3>
        <ul className="mt-4 text-secondary">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <hr className="mt-8 border-indigo-950 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    <p className="mt-4 text-sm text-center text-secondary">&copy; 2024 VELOIS. All rights reserved.</p>
  </div>
</footer>
    </>

  )
}

export default Footer
