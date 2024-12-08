import "./index.css";

document.querySelector("#app").innerHTML = `
<article class="py-20">
  <div class="w-[600px] mx-auto">
    <section class="group cursor-pointer">
      <div class= "overflow-hidden">
        <img class="group-hover:scale-105 transition-all duration-500" src="https://wp-assets.infinum.com/uploads/2023/05/Development-documentation-hero-1400x836.jpg" alt="cover">
      </div>
      <div class="inline-flex flex-col">
          <h2 class="text-3xl mt-6 mb-2">Creating Software Documentation</h2>
      <span class="inline-block h-1 w-0 bg-sky-500 group-hover:w-full transition-all duration-500"></span>

      </div>
        </section>
    <p class="font-light text-xl mb-2">Many developers find documentation writing tedious and time-consuming, but the truth is Software documentation is critical to the sucess of any project.</p>
    <a href="#!" class="text-sky-400 hover:text-sky-500 uppercase text-sm inline-flex flex-col group">
      <span>Ver Más.</span>
      <span class="h-0.5 w-0 bg-sky-500 group-hover:w-full transition-all duration-500"></span>
    </a>
  </div>
</article>
`;

setupCounter(document.querySelector("#counter"));
