
// callback for intersection observer
export const handleFixedNav = (entries, observer, placeholder, nav) => {
  entries.forEach((entry) => {
    // The target element is in view
    if (entry.isIntersecting) {
      nav.classList.remove("nav2");
      placeholder.classList.remove("h-[60px]");
    // The target element is out of view
    } else {
      nav.classList.add("nav2");
      placeholder.classList.add("h-[60px]");
    }
  });
}

// options for intersection
export const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5, // Trigger the callback when 50% of the target is visible
}
