gsap.fromTo(
  ".galaxy",
  {
    opacity: 1,
    y: "-100vh",
  },
  {
    opacity: 1,
    y: "100vh",
    delay: 0.3,
    duration: 2.5,
    ease: CustomEase.create(
      "customReverse",
      "M0,0 C0,0.606 0.407,0.394 0.511,0.619 0.533,0.666 0.564,1 0.972,1"
    ),
  }
);

function stepOneLeave() {
  gsap.to(".stepOne", {
    duration: 1,
    x: "-100vw",
    opacity: 0,
    ease: "power2.inOut",
    onComplete: function () {
      document.getElementById("stepOne").style.display = "none";
    },
  });
  gsap.fromTo(
    ".stepTwo",
    {
      x: "100vw",
      opacity: 1,
    },
    {
      delay: 0.5,
      x: 0,
      ease: "power2.inOut",
      duration: 1.2,
    }
  );
}

document.getElementById("name").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    stepOneLeave();
  }
});
