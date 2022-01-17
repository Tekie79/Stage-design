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
// Functions

btnSwitch.addEventListener("click", () => {
  if (btnSwitch.textContent === "OFF") {
    btnSwitch.textContent = "ON";
    btnSwitch.style.backgroundColor = "#4c9b60";

    frontView.animate(
      [
        {
          backgroundColor: "#1B1B1B",
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
// sky mode

skyBtn.addEventListener("click", () => {
  lights.forEach((light) => {
    light.src = "./images/light-sky.png";
  });
  tubesArray.forEach((tube) => {
    tube.animate(
      [
        {
          backgroundColor: "#2F98F9",
          boxShadow: "1px 1px 6px #2F98F9",
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
        backgroundColor: "#2F98F9",
      },
    ],
    {
      duration: 1000,
      interations: 1,
      fill: "both",
    }
  );
});

// fire mode

fireBtn.addEventListener("click", () => {
  lights.forEach((light) => {
    light.src = "./images/light-orange.png";
  });
  tubesArray.forEach((tube) => {
    tube.animate(
      [
        {
          backgroundColor: "#F7762B",
          boxShadow: "1px 1px 6px #F7762B",
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
        backgroundColor: "#F7762B",
      },
    ],
    {
      duration: 1000,
      interations: 1,
      fill: "both",
    }
  );
});
// Joy mode
joyBtn.addEventListener("click", () => {
  lights.forEach((light) => {
    light.src = "./images/light-pink.png";
  });
  tubesArray.forEach((tube) => {
    tube.animate(
      [
        {
          backgroundColor: "#DF2BF7",
          boxShadow: "1px 1px 6px #DF2BF7",
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
        backgroundColor: "#DF2BF7",
      },
    ],
    {
      duration: 1000,
      interations: 1,
      fill: "both",
    }
  );
});

// Blood mode
bloodBtn.addEventListener("click", () => {
  lights.forEach((light) => {
    light.src = "./images/light-red.png";
  });
  tubesArray.forEach((tube) => {
    tube.animate(
      [
        {
          backgroundColor: "#B33030",
          boxShadow: "1px 1px 6px #B33030",
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
        backgroundColor: "#B33030",
      },
    ],
    {
      duration: 1000,
      interations: 1,
      fill: "both",
    }
  );
});