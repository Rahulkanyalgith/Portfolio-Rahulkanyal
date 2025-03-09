document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  
    // Create Fire Trail Effect
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
  
    setTimeout(() => {
      trail.remove();
    }, 300);
  });
  