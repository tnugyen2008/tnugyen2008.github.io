$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100,250,10,200,"Purple")
    createPlatform(100,450,1200,10,"purple")
    createPlatform(200,650,100,10,"Black")
    createPlatform(400,600,100,10,"yellow")
    createPlatform(400,605,10,50,"yellow")
    createPlatform(400,650,100,10,"yellow")
    createPlatform(490,600,10,50,"yellow")
    createPlatform(600,650,100,10,"black")
    createPlatform(800,600,100,10,"yellow")
    createPlatform(800,605,10,50,"yellow")
    createPlatform(800,650,100,10,"yellow")
    createPlatform(890,600,10,50,"yellow")
    createPlatform(1000,650,100,10,"black")
    createPlatform(1200,575,100,10,"yellow")
  








    // TODO 3 - Create Collectables
   createCollectable("diamond",425,525,0.5,0.7);
   createCollectable("diamond",825,525,0.5,0.7);
   createCollectable("diamond",125,405,0.5,0.7);



    
    // TODO 4 - Create Cannons
    createCannon("right",750,1500,10);
    createCannon("left",350,2500,10);
      createCannon("top",1300,1000,10);
      createCannon("right",600,2500,10);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
