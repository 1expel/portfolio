
// callback for intersection observer
export const handleFixedNav = (entries, observer, nav) => {
  entries.forEach((entry) => {
    // The target element is in view
    if (entry.isIntersecting) {
      nav.classList.remove("nav2");
      nav.classList.add("absolute");
    // The target element is out of view
    } else {
      nav.classList.remove("absolute");
      nav.classList.add("nav2");
    }
  });
}

// options for intersection
export const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.5, // Trigger the callback when 50% of the target is visible
}
