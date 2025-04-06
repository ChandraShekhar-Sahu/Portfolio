import React from "react";

function Achievements() {
  return (
    <>
      <div name="Achievements" className="max-w-screen-2xl containerbg-gray-100 mx-auto mt-2 px-4 md:px-10">
      <div class="min-h-screen  py-10 px-5">
  <h1 class="text-4xl md:text-5xl font-bold text-center text-green-600 mb-12">Achievements</h1>

  <div class="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">State-Level Research Paper Competition</h2>
      <p class="text-gray-700 leading-relaxed">Consolation Prize Winner for Project: <span class="font-semibold">Exam Ease Proctor</span>.</p>
    </div>

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">Hackathon - <span class="font-semibold">Byte Battle</span>.</h2>
      <p class="text-gray-700 leading-relaxed">2nd Position</p>
    </div>

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">State-Level Inter-University <span class="font-semibold">Chess Competition</span>.</h2>
      <p class="text-gray-700 leading-relaxed">Captain</p>
    </div>

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">Inter-College <span class="font-semibold">Chess Tournament</span>.</h2>
      <p class="text-gray-700 leading-relaxed">2nd Place</p>
    </div>

    <div class="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 md:col-span-2">
      <h2 class="text-2xl font-bold text-gray-900 mb-3">State-Level <span class="font-semibold">Kurash Competition</span>.</h2>
      <p class="text-gray-700 leading-relaxed">Participant</p>
    </div>

  </div>
</div>

      </div>
    </>
  );
}

export default Achievements;
