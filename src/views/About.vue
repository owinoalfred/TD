<template>
<main class="font-sans bg-white">
<Trial />

    <div>
        <header class="bg-white shadow border-t-4 border-white">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <div>
                        <a class="flex items-center text-gray-800 hover:text-indigo-600" href="#">
                            <svg class="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>

                            <span class="mx-3 font-medium text-sm md:text-base">ALFRED OWINO</span>
                        </a>
                    </div>
                    <div class="flex items-center -mx-2">
                        <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="#">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="#">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/>
                            </svg>
                        </a>

                        <a class="flex items-center mx-2 text-gray-800 hover:text-indigo-600" href="#">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <section class="bg-white mt-20">
            <div class="max-w-2xl px-6 text-center mx-auto">
                <h2 class="text-3xl font-semibold text-gray-800">Hi, <span class="bg-indigo-600 text-white rounded px-1">I’m Alfred</span> . Nice to meet you.</h2>
                <p class="text-gray-600 mt-4">Alfred is a developer from Uganda who likes to code and learn about new stuff. I love python and javascript since they create cool stuff. I create websites and this is the reason I put up this site, to tryr and find those with the same passion and try to raise a few bucks from doing what I love. please call me for any gigs. </p>

                <div class="flex items-end justify-center mt-16 rounded-full">
                          <img src="https://avatars.githubusercontent.com/u/59254825?v=4" class="rounded-full h-100 w-100 flex items-center justify-center" alt="">
                </div>
            </div>
        </section>

        <section class="bg-gray-800 pattern py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-white">About Me</h2>

                <p class="text-gray-400 mt-4">Started off with simple HTML many years ago but since I dint have the resources to go further I kind of put it on hold. I re-thought about coding and started to do alot after finding the right tools and resources, hopefully i could be the techy-man you need/</p>
            </div>
        </section>

        <section class="bg-white py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-gray-800">Latest Posts</h2>

                <div class="flex flex-col items-center justify-center mt-6">
                    <a class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">handwritten code on paper explaining a few concepts.</h3>
                            <span class="block text-gray-600 font-light text-sm">30 Dec 2021</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Videos dropping soon too.</h3>
                            <span class="block text-gray-600 font-light text-sm">30 Dec 2021</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Free Vue couses coming soon</h3>
                            <span class="block text-gray-600 font-light text-sm">30 Dec 2021</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">options of backend that go with Vuejs</h3>
                            <span class="block text-gray-600 font-light text-sm">30 Dec 2021</span>
                        </div>
                    </a>
                </div>

                <div class="flex items-center justify-center mt-12">
                    <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="#">
                        <span>View More</span>

                        <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <section class="bg-gray-800 pattern py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-white">Projects</h2>

                <div class="flex items-center justify-center mt-10">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img class="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt="">
                            </div>

                            <a href="#" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>

                        <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img class="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt="">
                            </div>

                            <a href="#" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>

                        <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img class="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt="">
                            </div>

                            <a href="#" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center mt-12">
                    <a class="flex items-center text-white hover:underline hover:text-gray-200" href="#">
                        <span>View More On Github</span>

                        <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <footer class="bg-white">
            <div class="container mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="text-gray-600">&copy;OWINO ALFRED</div>
                    </div>

                    <div class="flex items-center -mx-2">
                        <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                            <svg class="h-5 w-5 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/>
                            </svg>
                        </a>

                        <a class="flex items-center mx-2 text-gray-600 hover:text-indigo-600" href="#">
                            <svg class="h-5 w-5 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    </div>
 <Footer />
    <Down />
</main>
</template>

<script>
import Trial from "@/views/Trial.vue";
import Footer from "@/components/Footer.vue";
import Down from "@/components/Down.vue";

export default {
    components: {
        Trial, Footer, Down

    }

}
</script>>