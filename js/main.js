if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("logoImage").src = "images/Sciland-logo-white.png";
}
var toggle = document.querySelector(".toggle");
var header = document.querySelector("header");

var hero = document.querySelector(".hero");
var body = document.querySelector("body");
var stopElement = document.querySelector(".left.second");
var mouseCursor = document.querySelector(".cursor");
var pos = document.querySelector(".promocode");
var lighten = document.querySelector(".lighten");

var arrows = document.querySelectorAll(".arrows");
var faces = document.querySelectorAll(".face");
var images = document.querySelectorAll(".advantageImage");
var devices = document.querySelectorAll(".devices");
var infos = document.querySelectorAll(".info");
var blocks = document.querySelectorAll(".block");

var video_group = document.getElementById("Video_Group");
var blog_group = document.getElementById("Blog_Group");
var code_group = document.getElementById("Code_Group");

let anchorlinks = document.querySelectorAll('a[scroll^="#"]');
let links = document.querySelectorAll('a[href]');

var html = document.querySelector(".html");
var css = document.querySelector(".css");
var javascript = document.querySelector(".javascript");
var cube = document.querySelector(".cube");

var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

AOS.init();

links.forEach(item => {
    if(mobile) {
        item.setAttribute("target", "");
    } 
})
for (let item of anchorlinks) {
    item.addEventListener('click', () => {
        let hashval = item.getAttribute('scroll')
        let target = document.querySelector(hashval)
        if(mobile) {
            toggle.classList.remove("opened");
            header.classList.remove("opened");
            body.classList.remove("locked");
            setTimeout(function() {
                window.scroll({
                    top: target.offsetTop - 70,
                    behavior:"smooth"
                })
            }, 500)
        } else {
            window.scroll({
                top: target.offsetTop - 70,
                behavior:"smooth"
            })
        }
    })
}

function svgAnimation() {
    setTimeout(function() {
        video_group.classList.add("slideOut");
        document.getElementById("Ellipse1").classList.add("gray");
        setTimeout(function() {
            blog_group.classList.add("animation");
            document.getElementById("Ellipse2").classList.remove("gray");
            setTimeout(function() {
                blog_group.classList.add("slideOut");
                document.getElementById("Ellipse2").classList.add("gray");
                blog_group.classList.remove("animation");
                setTimeout(function() {
                    document.getElementById("Ellipse3").classList.remove("gray");
                    code_group.classList.add("animation");
                    setTimeout(function() {
                        document.getElementById("Ellipse3").classList.add("gray");
                        code_group.classList.remove("animation");
                        video_group.classList.remove("slideOut");
                        blog_group.classList.remove("slideOut");
                        code_group.classList.remove("slideOut");
                        document.getElementById("Ellipse1").classList.remove("gray");
                    }, 1500)
                }, 400);
            }, 1500);
        }, 400);
    }, 1500);
}

svgAnimation();
setInterval(function() {
    svgAnimation();
}, 5200)

if(mobile == true) {
    lighten.classList.add("mobile");
    let x = 0;
    let y = 0;
    let right = 1;
    let down = 2;
    setInterval(function(){
        if(y > pos.offsetHeight + 100 && x < window.innerWidth - 10) {
            x = 1;
            right = 1;
            y = 1;
        }
        if(right == 1) {
            x++;
        } else if(right == 0) {
            x--;
        }
        if(down == 1) {
            y++;
        }
        pos.style.setProperty('--x-touch',x + 'px');
        pos.style.setProperty('--y-touch',y + 'px');
        if(x == window.innerWidth) {
            right = 10;
            down = 1;
            setTimeout(function() {
                right = 0;
                down = 2;
            }, 500);
        } else if(x == 0) {
            right = 10;
            down = 1;
            setTimeout(function() {
                right = 1;
                down = 2;
            }, 500);
        }
    }, 3);
}

if(mobile == false) {
    pos.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        pos.style.setProperty('--x',x + 'px');
        pos.style.setProperty('--y',y + 'px');
    });
}


toggle.addEventListener("click", function() {
    if(toggle.classList.contains("opened")) {
        toggle.classList.remove("opened");
        header.classList.remove("opened");
        body.classList.remove("locked");
    } else {
        toggle.classList.add("opened");
        header.classList.add("opened");
        body.classList.add("locked");
    }
});

window.addEventListener("scroll" , function() {
    if(window.pageYOffset > 30) {
        arrows.forEach(element => {
            element.classList.add("vanish");
        });
    } else {
        arrows.forEach(element => {
            element.classList.remove("vanish");
        });
    }

    if(this.window.innerWidth < 670) {
        if(html.getBoundingClientRect().top < 500) {
            faces.forEach(element => {
                element.classList.add("assemble");
            })
        } else {
            faces.forEach(element => {
                element.classList.remove("assemble");
            })
        }
    } else {
        if(html.getBoundingClientRect().top < 200) {
            faces.forEach(element => {
                element.classList.add("assemble");
            })
        } else {
            faces.forEach(element => {
                element.classList.remove("assemble");
            })
        }
    }
    if(css.getBoundingClientRect().top < 300) {
        cube.classList.add("css");
    } else {
        cube.classList.remove("css");
    }
    if(javascript.getBoundingClientRect().top < 300) {
        cube.classList.add("javascript");
    } else {
        cube.classList.remove("javascript");
    }

    images.forEach(element => {
        if(this.window.innerWidth < 1200) {
            if(element.getBoundingClientRect().top < 300) {
                element.classList.add("scale");
            } else {
                element.classList.remove("scale");
            }
        }
    });

    var st = document.body.scrollTop || document.documentElement.scrollTop;
    var sh = document.body.scrollHeight - window.innerHeight || document.documentElement.scrollHeight - window.innerHeight;
    var percent = st / sh * 100;
    document.querySelector(".progress-bar").style.width = percent + "%";
});

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

function parallax(starter, images) {
    window.addEventListener("scroll", function(){ 
        if (starter.getBoundingClientRect().top < 60){
        images.forEach(element => {
                var translateValue = ((getPosition(element) - window.pageYOffset)) * element.getAttribute("speed");
                element.style.transform = `translate(${translateValue}px)`;
            });
        } 
    });
}

parallax(document.querySelector(".start-comfort"), devices);
parallax(document.querySelector(".info-start"), infos);


if(mobile == false) {
    blocks.forEach(element => {
        element.addEventListener("mouseover", function() {
            blocks.forEach(element1 => {
                element1.classList.add("gray");
            });
            element.classList.add("highlight");
        });
        element.addEventListener("mouseout", function() {
            blocks.forEach(element1 => {
                element1.classList.remove("gray");
            });
            element.classList.remove("highlight");
        });
    });
}

//Three.js ----------------------------

const mainScene = document.querySelector(".right-scene");
var scene, renderer;
var camera;
var mesh;
 
function init() {
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera( 100, mainScene.offsetWidth / mainScene.offsetHeight, 0.1, 1000 ); 
    
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( mainScene.offsetWidth, mainScene.offsetHeight ); 
    mainScene.appendChild( renderer.domElement ); 
    renderer.setClearColor(0x000000, 0); 
    renderer.gammaOutput = true;
    
    var light = new THREE.DirectionalLight("#ccd2d5", 0.3);
    var ambient = new THREE.AmbientLight("#ccd2d5");
    light.position.set( 0, -70, 100 ).normalize();
    scene.add(light);
    scene.add(ambient);

    var loader = new THREE.GLTFLoader();

    loader.load(
        'model/book-blue.gltf',
        function ( gltf ) {
            // console.log("it loaded successfully");
            mesh = gltf.scene;
            mesh.scale.set( 12, 12, 12 );
            scene.add( mesh );
        },
        // function ( xhr ) {
        //     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        // },
        // function ( error ) {
        //     console.log( 'An error happened' );
        // }
    );   
    render();   
}
        
function render() {
    let currentTimeLine = window.pageYOffset / hero.offsetHeight;
    requestAnimationFrame( render ); 
    const rx = currentTimeLine * Math.PI * 0.05 - 0.05;
    const ry = (currentTimeLine * Math.PI * 2.1) - 0.1;
    const rz = (currentTimeLine * Math.PI * 0.04) - 0.04;
    if(window.pageYOffset + window.innerHeight < hero.offsetHeight) {
        if(window.innerWidth <= 623) {
            camera.position.z = 10 + (window.pageYOffset) / 100;
        } else {
            camera.position.z = 8 + (window.pageYOffset) / 400;
        }
        mesh.rotation.set(rx, ry, rz);
    } else {
        if((window.innerWidth <= 623)) {
            mesh.rotation.set(rx, ry, rz);
        }
    }
    renderer.render(scene, camera); 
}


window.addEventListener('DOMContentLoaded', init);