import React from 'react';
import { FaLink } from "react-icons/fa";

function Projects() {
  return (
    <>
        <div name="Projects" class="min-h-screen bg-gray-100 p-6">
  <h1 class="text-4xl font-bold text-green-700 text-center mb-10">My Projects</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* <!-- Project Card 1 --> */}
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <div className='flex'>
      <div><h2 class="text-2xl font-semibold mb-2">Exam Ease Proctor</h2></div>
      <div className='justify-end items-end pl-15 md:pl-27'>
        <a href="https://examease-proctor-4gs4.vercel.app/"><FaLink /></a>
        </div>
      </div>
      <p class="text-gray-500 mb-2">18/11/2024</p>
      <p class="text-gray-700 mb-4">Django, React JS, Firebase & Face Recognition</p>
      <p class="text-gray-600">Developed an AI-powered online attendance system using React, Django, Firebase, and OpenCV. Enables students to track daily attendance while ensuring only authorized teachers can allocate attendance with security features.</p>
    </div>

    {/* <!-- Project Card 2 --> */}
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <h2 class="text-2xl font-semibold mb-2">Student Attendance Management System</h2>
      <p class="text-gray-500 mb-2">18/11/2024</p>
      <p class="text-gray-700 mb-4">Django, React JS, Firebase & Face Recognition</p>
      <p class="text-gray-600">Developed an AI-powered online attendance system using React, Django, Firebase, and OpenCV. Enables students to track daily attendance while ensuring only authorized teachers can allocate attendance with security features.</p>
    </div>

    {/* <!-- Project Card 3 --> */}
    <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <h2 class="text-2xl font-semibold mb-2">Vibe Master Music Controller</h2>
      <p class="text-gray-500 mb-2">16/07/2024</p>
      <p class="text-gray-700 mb-4">Django and React</p>
      <p class="text-gray-600">Built a Spotify-based music control app using React, Django, and REST APIs. Implemented real-time playback controls and optimized backend with Django REST Framework.</p>
    </div>

  </div>
</div>

    </>
  )
}

export default Projects