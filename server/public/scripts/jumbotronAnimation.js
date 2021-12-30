
// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;


// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});
//var renderer = new THREE.CanvasRenderer();
var container = document.getElementById('canvas1');
//var w = 300;
//var h = 300;
var positionInfo = container.getBoundingClientRect();
var h = positionInfo.height*.5;
var w = positionInfo.width;
renderer.setSize(w, h);
// Configure renderer clear color
renderer.setClearColor("#000000");
container.appendChild(renderer.domElement);


window.addEventListener('resize', function () {
    // Create a renderer with Antialiasing
    //var renderer = new THREE.WebGLRenderer({antialias:true});
    //var renderer = new THREE.CanvasRenderer();
    var container = document.getElementById('canvas1');
    //var w = 300;
    //var h = 300;
    var positionInfo = container.getBoundingClientRect();
    var h = positionInfo.height*.5;
    var w = positionInfo.width;
    renderer.setSize(w, h);
    // Configure renderer clear color
    renderer.setClearColor("#000000");
    container.appendChild(renderer.domElement);
});

// Configure renderer clear color
//renderer.setClearColor("#000000");

// Configure renderer size
//renderer.setSize( 300, 300 );

// Append Renderer to DOM
//document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.05;

  // Render the scene
  renderer.render(scene, camera);
};

render();