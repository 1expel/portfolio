
const fixedNav = (placeholderRef, navRef, landingRef) => {
  // get elements from references
  const placeholderElement = placeholderRef.current;
  const navElement = navRef.current;
  const landingElement = landingRef.current;
  // callback for intersection
  const navBarStyleCallback = (entries, observer) => {
    entries.forEach((entry) => {
      // The target element is in view
      if (entry.isIntersecting) {
        navElement.classList.remove("nav2");
        placeholderElement.classList.remove("h-[60px]");
      // The target element is out of view
      } else {
        navElement.classList.add("nav2");
        placeholderElement.classList.add("h-[60px]");
      }
    });
  }
  // options for intersection
  const navBarStyleOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger the callback when 50% of the target is visible
  }
  // intersection observer object
  const observer = new IntersectionObserver(navBarStyleCallback, navBarStyleOptions);
  // start observing landing component, when in/out of view we want to change navbar style
  if (landingElement) {
    observer.observe(landingElement);
  }
  // return () => {
  //   if (landingRef.current) {
  //     observer.unobserve(landingRef.current);
  //   }
  // };
}

export default fixedNav;
