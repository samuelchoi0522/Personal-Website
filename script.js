function updateActiveLink(id) {
  var links = document.querySelectorAll("#navbar a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });
  document
    .querySelector('#navbar a[href="#' + id + '"]')
    .classList.add("active");

  var aboutMeBottom =
    document.getElementById("about-me").offsetTop -
    document.getElementById("about-me").offsetHeight;
  var projectBox2 = document.querySelector(".project-box-2");
  var projectBox3 = document.querySelector(".project-box-3");

  // Calculate the bottom position of project-box-1
  var projectBox1Bottom =
    document.querySelector(".project-box-1").offsetTop +
    document.querySelector(".project-box-1").offsetHeight;

  // Set the margin-top of project-box-2 based on project-box-1's bottom position
  projectBox2.style.top = projectBox1Bottom + 30 + "px"; // Changed 'project-box-2' to 'projects'
  projectBox2.style.marginTop = 0 + "px";

  var projectBox2Bottom =
    document.querySelector(".project-box-2").offsetTop +
    document.querySelector(".project-box-2").offsetHeight;
  projectBox3.style.top = projectBox2Bottom + 30 + "px"; // Changed 'project-box-2' to 'projects'
  projectBox3.style.marginTop = 0 + "px";

  adjustProjectBoxHeight();
}
window.addEventListener("load", function () {
  updateActiveLink("projects");
  adjustProjectBoxHeight();

  var scrollPosition = window.scrollY;
  var aboutMe = document.getElementById("about-me").offsetTop;
  var projects = document.getElementById("projects").offsetTop;
  var experience = document.getElementById("experience").offsetTop;

  if (scrollPosition < projects) {
    updateActiveLink("about-me");
  } else if (scrollPosition >= projects && scrollPosition < experience) {
    updateActiveLink("projects");
  } else {
    updateActiveLink("experience");
  }
});
updateActiveLink("projects");
window.addEventListener("resize", function () {
  updateActiveLink("projects");
  adjustProjectBoxHeight();
});
document.addEventListener("mousemove", function (event) {
  const flashlight = document.querySelector(".flashlight");
  flashlight.style.left = event.pageX + "px";
  flashlight.style.top = event.pageY + "px";
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var aboutMe = document.getElementById("about-me").offsetTop;
  var projects = document.getElementById("projects").offsetTop;
  var experience = document.getElementById("experience").offsetTop;

  if (scrollPosition < projects) {
    updateActiveLink("about-me");
  } else if (scrollPosition >= projects && scrollPosition < experience) {
    updateActiveLink("projects");
  } else {
    updateActiveLink("experience");
  }
});

function adjustProjectBoxHeight() {
  var minHeightDesktop = 160; // Minimum height for desktop mode
  var minHeightTablet = 150; // Minimum height for tablet mode
  var mode = window.innerWidth <= 1024 ? "tablet" : "desktop";
  var minHeight = mode === "tablet" ? minHeightTablet : minHeightDesktop;




  //p1
  var projectBox1 = document.querySelector(".project-box-1");
  var projectTitle1 = document.querySelector(".project-title-1");
  var projectBox1Description = document.querySelector(
    ".project-box-1-description"
  );
  var pill_cpp = document.querySelector(".pill-cpp");
  var pill_sdl = document.querySelector(".pill-sdl2");
  var pill_github = document.querySelector(".pill-github");
  var pill_vsc = document.querySelector(".pill-vscode");
  var totalHeight1 =
    projectTitle1.offsetHeight + projectBox1Description.offsetHeight + 70; // Add some padding
  totalHeight1 = Math.max(totalHeight1, minHeight);
  projectBox1.style.height = totalHeight1 + 30 + "px";

  //p2
  var projectBox2 = document.querySelector(".project-box-2");
  var projectTitle2 = document.querySelector(".project-title-2");
  var projectBox2Description = document.querySelector(
    ".project-box-2-description"
  );
  var pill2 = document.querySelector(".pill-cpp-2");
  var pill_sdl2 = document.querySelector(".pill-react-2");
  var pill_github2 = document.querySelector(".pill-github-2");
  var pill_vsc2 = document.querySelector(".pill-vscode-2");
  var totalHeight2 =
    projectTitle2.offsetHeight + projectBox2Description.offsetHeight + 70; // Add some padding
  totalHeight2 = Math.max(totalHeight2, minHeight);
  projectBox2.style.height = totalHeight2 + 30 + "px";

  //p3
  var projectBox3 = document.querySelector(".project-box-3");
  var projectTitle3 = document.querySelector(".project-title-3");
  var projectBox3Description = document.querySelector(
    ".project-box-3-description"
  );
  var pill_HTML3 = document.querySelector(".pill-HTML-3");
  var pill_CSS3 = document.querySelector(".pill-CSS-3");
  var pill_Javascript3 = document.querySelector(".pill-Javascript-3");
  var pill_aws3 = document.querySelector(".pill-aws-3");
  var pill_github3 = document.querySelector(".pill-github-3");
  var pill_vscode3 = document.querySelector(".pill-vscode-3");
  var totalHeight3 =
    projectTitle3.offsetHeight + projectBox3Description.offsetHeight + 120; // Add some padding
  totalHeight3 = Math.max(totalHeight3, minHeight);
  projectBox3.style.height = totalHeight3 + 30 + "px";
  var projectBox3Bottom = projectBox3.offsetTop + projectBox3.offsetHeight;

  // Set the position of the project archives link
  var projectArchiveLink = document.querySelector('.project-archive');
  var svgArrowArchive = document.querySelector('.svgarrow-archive'); // If you're adjusting the arrow position too

  // Assuming you want to place the archive link 30px below the last project box


  // Function to move pills to the next line if they exceed the available width

  if (mode === "desktop") {

    projectArchiveLink.style.position = 'absolute';
    projectArchiveLink.style.top = (projectBox3Bottom + 50) + 'px';
  
    // Optionally, adjust the arrow position relative to the link if needed
    svgArrowArchive.style.position = 'absolute';
    svgArrowArchive.style.left = '200' + 'px'; // Adjust according to your layout
    svgArrowArchive.style.top = '4' + 'px'; // This will be relative to the projectArchiveLink's position


    function movePillsToNextLine1(pills, projectBoxWidth) {
      var currentLine = 0;
      var currentLineWidth = 0;
      var lineHeight = 25; // Adjust according to your layout
      var pillSpacing = 15; // Adjust according to your layout
      var initialLeft = 160; // Adjust according to your layout

      // Calculate the maximum bottom position of existing pills
      var maxBottom = Math.max(
        ...pills.map((pill) => parseInt(pill.style.bottom))
      );

      pills.forEach((pill) => {
        // Check if placing the next pill exceeds the project box width
        if (
          currentLineWidth +
            pill.offsetWidth +
            pillSpacing +
            pill.offsetWidth +
            50 >
          projectBoxWidth
        ) {
          currentLine--; // Move to the next line
          currentLineWidth = 0; // Reset the line width

          projectBox1.style.height = 320 + "px";
          pill_cpp.style.bottom = 55 + "px";
          pill_sdl.style.bottom = 55 + "px";
          pill_vsc.style.bottom = 10 + "px";
          pill_github.style.bottom = 55 + "px";
        } else {
          pill_cpp.style.bottom = 20 + "px";
          pill_sdl.style.bottom = 20 + "px";
          pill_vsc.style.bottom = 20 + "px";
          pill_github.style.bottom = 20 + "px";
        }

        // Set the position of the pill
        pill.style.left = initialLeft + currentLineWidth + "px";

        // Update the current line width
        currentLineWidth += pill.offsetWidth + pillSpacing;
      });
    }

    function movePillsToNextLine2(pills, projectBoxWidth) {
      var currentLine = 0;
      var currentLineWidth = 0;
      var lineHeight = 25; // Adjust according to your layout
      var pillSpacing = 15; // Adjust according to your layout
      var initialLeft = 160; // Adjust according to your layout

      // Calculate the maximum bottom position of existing pills
      var maxBottom = Math.max(
        ...pills.map((pill) => parseInt(pill.style.bottom))
      );

      pills.forEach((pill) => {
        // Check if placing the next pill exceeds the project box width
        if (
          currentLineWidth +
            pill.offsetWidth +
            pillSpacing +
            pill.offsetWidth +
            50 >
          projectBoxWidth
        ) {
          currentLine--; // Move to the next line
          currentLineWidth = 0; // Reset the line width

          projectBox2.style.height = 320 + "px";
          pill2.style.bottom = 55 + "px";
          pill_sdl2.style.bottom = 55 + "px";
          pill_vsc2.style.bottom = 10 + "px";
          pill_github2.style.bottom = 55 + "px";
        } else {
          pill2.style.bottom = 20 + "px";
          pill_sdl2.style.bottom = 20 + "px";
          pill_vsc2.style.bottom = 20 + "px";
          pill_github2.style.bottom = 20 + "px";
        }

        // Set the position of the pill
        pill.style.left = initialLeft + currentLineWidth + "px";

        // Update the current line width
        currentLineWidth += pill.offsetWidth + pillSpacing;
      });
    }

    function movePillsToNextLine3(pills, projectBoxWidth) {
      var currentLine = 0;
      var currentLineWidth = 0;
      var lineHeight = 25; // Adjust according to your layout
      var pillSpacing = 15; // Adjust according to your layout
      var initialLeft = 160; // Adjust according to your layout

      // Calculate the maximum bottom position of existing pills
      var maxBottom = Math.max(
        ...pills.map((pill) => parseInt(pill.style.bottom))
      );

      var projectBoxRect = projectBox3.getBoundingClientRect();
      var pillVscodeRect = pill_vscode3.getBoundingClientRect();

      var distanceFromTopToBottom = pillVscodeRect.bottom - projectBoxRect.top;

      pills.forEach((pill) => {
        // Check if placing the next pill exceeds the project box width
        if (
          currentLineWidth +
            pill.offsetWidth +
            pillSpacing +
            pill.offsetWidth +
            50 >
          projectBoxWidth
        ) {
          currentLine--; // Move to the next line
          currentLineWidth = 0; // Reset the line width
          // Update the bottom position of all pills to bring them up
          pills.forEach((p) => {
            p.style.bottom =
              parseInt(p.style.bottom) - (lineHeight + pillSpacing) + 45 + "px";
          });
        }
        // Set the position of the pill
        pill.style.bottom =
          currentLine * (lineHeight + pillSpacing) + 60 + "px";
        pill.style.left = initialLeft + currentLineWidth + "px";

        // Update the current line width
        currentLineWidth += pill.offsetWidth + pillSpacing;
      });
    }
  } else if (mode === "tablet") {

    projectArchiveLink.style.position = 'absolute';
    projectArchiveLink.style.top = (projectBox3Bottom + 30) + 'px';
  
    // Optionally, adjust the arrow position relative to the link if needed
    svgArrowArchive.style.position = 'absolute';
    svgArrowArchive.style.left = '200' + 'px'; // Adjust according to your layout
    svgArrowArchive.style.top = '4' + 'px'; // This will be relative to the projectArchiveLink's position



    var aboutMeSection = document.querySelector("#about-me");
    aboutMeSection.style.top = 150 + "px";

    function movePillsToNextLine1(pills, projectBoxWidth) {
      var currentLine = 0;
      var currentLineWidth = 0;
      var lineHeight = 25; // Adjust according to your layout
      var pillSpacing = 15; // Adjust according to your layout
      var initialLeft = 225; // Adjust according to your layout

      // Calculate the maximum bottom position of existing pills
      var maxBottom = Math.max(
        ...pills.map((pill) => parseInt(pill.style.bottom))
      );

      pills.forEach((pill) => {
        // Check if placing the next pill exceeds the project box width
        if (
          currentLineWidth +
            pill.offsetWidth +
            pillSpacing +
            pill.offsetWidth +
            130 >
          projectBoxWidth
        ) {
          currentLine--; // Move to the next line
          currentLineWidth = 0; // Reset the line width

          projectBox1.style.height = 320 + "px";
          pill_cpp.style.bottom = 55 + "px";
          pill_sdl.style.bottom = 55 + "px";
          pill_vsc.style.bottom = 10 + "px";
          pill_github.style.bottom = 55 + "px";
        } else {
          pill_cpp.style.bottom = 20 + "px";
          pill_sdl.style.bottom = 20 + "px";
          pill_vsc.style.bottom = 20 + "px";
          pill_github.style.bottom = 20 + "px";
        }

        // Set the position of the pill
        pill.style.left = initialLeft + currentLineWidth + "px";

        // Update the current line width
        currentLineWidth += pill.offsetWidth + pillSpacing;
      });
    }

    function movePillsToNextLine2(pills, projectBoxWidth) {
      var currentLine = 0;
      var currentLineWidth = 0;
      var lineHeight = 25; // Adjust according to your layout
      var pillSpacing = 15; // Adjust according to your layout
      var initialLeft = 225; // Adjust according to your layout

      // Calculate the maximum bottom position of existing pills
      var maxBottom = Math.max(
        ...pills.map((pill) => parseInt(pill.style.bottom))
      );

      pills.forEach((pill) => {
        // Check if placing the next pill exceeds the project box width
        if (
          currentLineWidth +
            pill.offsetWidth +
            pillSpacing +
            pill.offsetWidth +
            130 >
          projectBoxWidth
        ) {
          currentLine--; // Move to the next line
          currentLineWidth = 0; // Reset the line width

          projectBox2.style.height = 320 + "px";
          pill2.style.bottom = 55 + "px";
          pill_sdl2.style.bottom = 55 + "px";
          pill_vsc2.style.bottom = 10 + "px";
          pill_github2.style.bottom = 55 + "px";
        } else {
          pill2.style.bottom = 20 + "px";
          pill_sdl2.style.bottom = 20 + "px";
          pill_vsc2.style.bottom = 20 + "px";
          pill_github2.style.bottom = 20 + "px";
        }

        // Set the position of the pill
        pill.style.left = initialLeft + currentLineWidth + "px";

        // Update the current line width
        currentLineWidth += pill.offsetWidth + pillSpacing;
      });
    }

    function movePillsToNextLine3(pills, projectBoxWidth) {
      var currentLine = 0;
      var currentLineWidth = 0;
      var lineHeight = 25; // Adjust according to your layout
      var pillSpacing = 15; // Adjust according to your layout
      var initialLeft = 225; // Adjust according to your layout

      // Calculate the maximum bottom position of existing pills
      var maxBottom = Math.max(
        ...pills.map((pill) => parseInt(pill.style.bottom))
      );

      var projectBoxRect = projectBox3.getBoundingClientRect();
      var pillVscodeRect = pill_vscode3.getBoundingClientRect();

      var distanceFromTopToBottom = pillVscodeRect.bottom - projectBoxRect.top;

      pills.forEach((pill) => {
        // Check if placing the next pill exceeds the project box width
        if (
          currentLineWidth +
            pill.offsetWidth +
            pillSpacing +
            pill.offsetWidth +
            130 >
          projectBoxWidth
        ) {
          currentLine--; // Move to the next line
          currentLineWidth = 0; // Reset the line width
          // Update the bottom position of all pills to bring them up
          pills.forEach((p) => {
            p.style.bottom =
              parseInt(p.style.bottom) - (lineHeight + pillSpacing) + 45 + "px";
          });
        }
        // Set the position of the pill
        pill.style.bottom =
          currentLine * (lineHeight + pillSpacing) + 60 + "px";
        pill.style.left = initialLeft + currentLineWidth + "px";

        // Update the current line width
        currentLineWidth += pill.offsetWidth + pillSpacing;
      });
    }
  }

  var pillsInP1 = [pill_cpp, pill_sdl, pill_github, pill_vsc];
  movePillsToNextLine1(pillsInP1, projectBox1.clientWidth); // Adjusted for padding

  var pillsInP2 = [pill2, pill_sdl2, pill_github2, pill_vsc2];
  movePillsToNextLine2(pillsInP2, projectBox2.clientWidth - 30); // Adjusted for padding

  var pillsInP3 = [
    pill_HTML3,
    pill_CSS3,
    pill_Javascript3,
    pill_aws3,
    pill_github3,
    pill_vscode3,
  ];
  movePillsToNextLine3(pillsInP3, projectBox3.clientWidth - 30); // Adjusted for padding
}

// Call the adjustProjectBoxHeight function when the page loads
window.addEventListener("load", function () {
  updateActiveLink();
  adjustProjectBoxHeight();
  updateActiveLink();
});

// Call the adjustProjectBoxHeight function when the window is resized
window.addEventListener("resize", function () {
  updateActiveLink();
  adjustProjectBoxHeight();
  updateActiveLink();
});

document
  .querySelectorAll(".project-box-1, .project-box-2, .project-box-3")
  .forEach((box) => {
    box.addEventListener("mouseenter", () => {
      document
        .querySelectorAll(".project-box-1, .project-box-2, .project-box-3")
        .forEach((otherBox) => {
          if (otherBox !== box) {
            otherBox.style.transition = "opacity 0.3s ease"; // Add transition effect
            otherBox.style.opacity = "0.5"; // Dim other boxes
          }
        });
    });

    box.addEventListener("mouseleave", () => {
      document
        .querySelectorAll(".project-box-1, .project-box-2, .project-box-3")
        .forEach((otherBox) => {
          otherBox.style.transition = "opacity 0.3s ease"; // Add transition effect
          otherBox.style.opacity = "1"; // Restore original opacity
        });
    });
  });

document
  .querySelectorAll(".project-box-1, .project-box-2, .project-box-3")
  .forEach((box) => {
    box.addEventListener("mouseenter", () => {
      document
        .querySelectorAll(".project-box-1, .project-box-2, .project-box-3")
        .forEach((otherBox) => {
          if (otherBox !== box) {
            otherBox.style.transition = "opacity 0.3s ease"; // Add transition effect
            otherBox.style.opacity = "0.5"; // Dim other boxes
          }
        });
    });

    box.addEventListener("mouseleave", () => {
      document
        .querySelectorAll(".project-box-1, .project-box-2, .project-box-3")
        .forEach((otherBox) => {
          otherBox.style.transition = "opacity 0.3s ease"; // Add transition effect
          otherBox.style.opacity = "1"; // Restore original opacity
        });
    });
  });

updateActiveLink();
