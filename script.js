const video = document.querySelector(".video");
// window loading

const stageBody = document.querySelector(".stage-body");
const controllers = document.querySelector(".controllers");

setTimeout(() => {
  stageBody.animate(
    [
      {
        opacity: 1,
      },
    ],
    {
      duration: 1000,
      interations: 1,
      fill: "both",
    }
  );
}, 1000);
setTimeout(() => {
  controllers.animate(
    [
      {
        opacity: 1,
      },
    ],
    {
      duration: 2000,
      interations: 1,
      fill: "both",
    }
  );
}, 2000);

// Projection Switch

const btnSwitch = document.querySelector(".btn-switch");
const sideScreens = document.querySelectorAll(".projection");
const frontView = document.querySelector(".front-view");
const btnSlide = document.querySelectorAll(".btn-slide");
// Functions

btnSwitch.addEventListener("click", () => {
  if (btnSwitch.textContent === "OFF") {
    btnSwitch.textContent = "ON";
    btnSwitch.style.backgroundColor = "#4c9b60";
    btnSlide.forEach((slide) => {
      slide.style.backgroundColor = "white";
      slide.style.color = "grey";
    });

    frontView.animate(
      [
        {
          backgroundColor: "#141414",
        },
      ],
      {
        // timing options
        duration: 1000,
        interations: 1,
        fill: "both",
      }
    );

    setTimeout(() => {
      sideScreens.forEach((screen) => {
        screen.style.backgroundImage = "url('./images/addis-screen.jpg')";
      });
    }, 1000);
  } else {
    frontView.animate(
      [
        {
          backgroundColor: "#7e7d7d",
        },
      ],
      {
        // timing options
        duration: 1000,
        interations: 1,
        fill: "both",
      }
    );

    btnSwitch.textContent = "OFF";
    btnSwitch.style.backgroundColor = "#252525";

    sideScreens.forEach((screen) => {
      screen.style.backgroundImage = "";
    });
    //
    btnSlide.forEach((slide) => {
      slide.style.backgroundColor = "rgb(128, 126, 126)";
      slide.style.color = "rgb(185, 184, 184)";
    });
  }
});

// Light Controllers

const skyBtn = document.querySelector(".btn-sky");
const fireBtn = document.querySelector(".btn-fire");
const joyBtn = document.querySelector(".btn-joy");
const bloodBtn = document.querySelector(".btn-blood");
const earthBtn = document.querySelector(".btn-earth");
const purpleBtn = document.querySelector(".btn-purple");

// lights\ Selectors
const lights = document.querySelectorAll(".light");
const tubes = document.querySelectorAll(".tube");
const tubesArray = [...tubes];
const ledWall = document.querySelector(".led-wall");

// light On Helper
const toggleLight = (fileName, color) => {
  lights.forEach((light) => {
    light.src = `./images/${fileName}.png`;
  });
  tubesArray.forEach((tube) => {
    tube.animate(
      [
        {
          backgroundColor: color,
          boxShadow: `1px 1px 6px ${color}`,
        },
      ],
      {
        duration: 1000,
        interations: 1,
        fill: "both",
      }
    );
  });
  //LED Wall
  ledWall.animate(
    [
      {
        backgroundColor: color,
      },
    ],
    {
      duration: 1000,
      interations: 1,
      fill: "both",
    }
  );
};

// sky mode

skyBtn.addEventListener("click", () => {
  toggleLight("light-sky", "#2F98F9");
});

// fire mode

fireBtn.addEventListener("click", () => {
  toggleLight("light-orange", "#F7762B");
});
// Joy mode
joyBtn.addEventListener("click", () => {
  toggleLight("light-pink", "#DF2BF7");
});

// Blood mode
bloodBtn.addEventListener("click", () => {
  toggleLight("light-red", "#B33030");
});

// Earth mode
earthBtn.addEventListener("click", () => {
  toggleLight("light-cyan", "#28ACBD");
});

// purple mode
purpleBtn.addEventListener("click", () => {
  toggleLight("light-purple", "#9E16F9");
});

// Standing man

const person = document.querySelector(".man-standing");
const darkSrc = "./images/teacher-black.png";
const lightSrc = "./images/teacher.png";
person.addEventListener("click", () => {
  const srcAttr = person.getAttribute("data-src");
  if (srcAttr === "dark") {
    person.src = lightSrc;
    person.setAttribute("data-src", "light");
  } else {
    person.src = darkSrc;
    person.setAttribute("data-src", "dark");
  }
});

// LED Wall Controls

const sceneOne = document.querySelector(".btn-scene01");
const sceneTwo = document.querySelector(".btn-scene02");
const sceneThree = document.querySelector(".btn-scene03");
const sceneFour = document.querySelector(".btn-scene04");
const sceneFive = document.querySelector(".btn-scene05");
const sceneSix = document.querySelector(".btn-scene06");

// Controls

const videoPlay = (fileName, playRate, projection) => {
  video.src = `./videos/${fileName}.mp4`;
  video.classList.remove("hide-video");
  // video.play();
  video.playbackRate = playRate;

  // Projectors
  if (btnSwitch.textContent === "ON") {
    sideScreens.forEach((screen) => {
      screen.style.backgroundImage = `url('./images/${projection}.jpg')`;
    });
  }
  window.scrollTo(0,0)
};
//blue
sceneSix.addEventListener("click", () => {
  videoPlay("blue", 0.4, "screen-blue");
});

// purple

sceneOne.addEventListener("click", () => {
  videoPlay("purple", 0.25, "screen-purple");
  video.currentTime = 3;
});

// fire
sceneTwo.addEventListener("click", () => {
  videoPlay("fire", 0.3, "screen-fire");
});

// Red

sceneThree.addEventListener("click", () => {
  videoPlay("red", 0.4, "screen-red");
});

// pink

sceneFour.addEventListener("click", () => {
  videoPlay("pink", 0.25, "screen-pink");
});

sceneFive.addEventListener("click", () => {
  videoPlay("cyan", 0.25, "screen-cyan");
});
