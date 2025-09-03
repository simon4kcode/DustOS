// intro animation
gsap.fromTo(
  ".SetUpGalaxy",
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
      onStart: function () {
        document.getElementById("stepTwo").style.display = "flex";
      },
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

function stepTwoBack() {
  gsap.fromTo(
    ".stepTwo",
    {
      x: "0vw",
    },
    {
      x: "100vw",
      ease: "power2.inOut",
      duration: 1,
    }
  );

  gsap.to(".stepOne", {
    delay: 0.6,
    duration: 1,
    x: "-0vw",
    opacity: 1,
    ease: "power2.inOut",
    onStart: function () {
      document.getElementById("stepOne").style.display = "flex";
    },
  });
}
function stepTwoIncomplete() {
  gsap.to(".stepTwo", {
    x: 10,
    repeat: 2,
    yoyo: true,
    duration: 0.1,
    ease: "power1.inOut",
    onComplete: function () {
      gsap.to(".stepTwo", { x: 0, duration: 0.1, ease: "power1.inOut" });
    },
  });
  window.stepTwoIncomplete = stepTwoIncomplete;
}
function stepTwoLeave() {
  gsap.fromTo(
    ".stepTwo",
    {
      x: "0vw",
    },
    {
      x: "-100vw",
      ease: "power2.inOut",
      duration: 1,
      onComplete: function () {
        document.getElementById("stepOne").style.display = "none";
      },
    }
  );

  gsap.fromTo(
    ".stepThree",
    {
      x: "100vw",
    },
    {
      onStart: function () {
        document.getElementById("stepThree").style.display = "flex";
        document.querySelectorAll(".aboutproxyh3").forEach((el) => {
          el.style.display = "none";
        });
      },
      x: "0vw",
      delay: 0.6,
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
    }
  );
}
window.stepTwoLeave = stepTwoLeave;

function stepThreeBack() {
  gsap.fromTo(
    ".stepThree",
    {
      x: "0vw",
    },
    {
      x: "100vw",
      ease: "power2.inOut",
      duration: 1,
      onComplete: function () {
        document.getElementById("stepThree").style.display = "none";
      },
    }
  );

  gsap.to(".stepTwo", {
    delay: 0.6,
    duration: 1,
    x: "-0vw",
    opacity: 1,
    ease: "power2.inOut",
    onStart: function () {
      document.getElementById("stepOne").style.display = "flex";
    },
  });
}
function stepThreeLeave() {
  gsap.fromTo(
    ".stepThree",
    {
      x: "0vw",
    },
    {
      x: "-100vw",
      ease: "power2.inOut",
      duration: 1,
      onComplete: function () {
        document.getElementById("stepThree").style.display = "none";
      },
    }
  );

  gsap.fromTo(
    ".finishSetup",
    {
      x: "100vw",
    },
    {
      onStart: function () {
        document.getElementById("finishSetup").style.display = "flex";
      },
      x: "0vw",
      delay: 0.6,
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
    }
  );
}

function homepagestart() {
  gsap.fromTo(
    ".homepagestart",
    {
      opacity: 0,
      y: "30vh",
    },
    {
      opacity: 1,
      y: "0",
      duration: 1.7,
      ease: "power2.inOut",
    }
  );
  gsap.to(".background", {
    onStart: function () {
      document.getElementById("bottomNav").style.display = "none";
      document.getElementById("timeDisplay").style.display = "none";
    },
    filter: "blur(10px)",
  });
}
function swipeup() {
  gsap.fromTo(
    ".swipeUp",
    {
      opacity: 1,
      y: "0",
    },
    {
      opacity: 0,
      y: "-100vh",
      duration: 1.4,
      ease: "power3.inOut",
    }
  );
  gsap.to(".background", {
    delay: 1,
    filter: "blur(0px)",
    onComplete: function () {
      document.getElementById("swipeUp").style.display = "none";
      gsap.fromTo(
        ".app",
        {
          opacity: 0,
          y: "30px",
        },
        {
          onStart: function () {
            document.getElementById("bottomNav").style.display = "flex";
            document.getElementById("timeDisplay").style.display = "flex";
          },

          opacity: 1,
          y: "0px",
          stagger: 0.07,
          ease: "power3.inOut",
          duration: 0.7,
        }
      );
      gsap.to(".bottomNav", {
        duration: 0.5,
        opacity: 1,
      });
      gsap.to(".timeDisplay", {
        duration: 0.5,
        opacity: 1,
      });
      /*function showad() {
        const win = new LunaWindow({
          title: "YeebsWeb (Partner)",
          x: 0,
          y: 0,
          width: '50%',
          height: '50%',
          content: `${window.location.origin}/yeebsweeb`,
        });
        win.show();
      }
      showad();*/
    },
  });
}
