document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  