function callback(entries, obs) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    obs.unobserve(entry.target);
  });
}

const options = {
  threshold: 0.8,
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll(".img");
targets.forEach((target) => {
  observer.observe(target);
});

// const target = document.querySelectorAll(".img");

// function callback(entries) {
//   console.log(entries[0]);

//   if (entries[0].isIntersecting) {
//     entries[0].target.classList.add("appear");
//   } else {
//     entries[0].target.classList.remove("appear");
//   }
// }

// const options = {
//   threshold: 0.8,
// };
// const observer = new IntersectionObserver(callback, options);
// observer.observe(target);
