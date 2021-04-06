import React, {useEffect} from 'react';
import {appendScript} from "../utils/script";
import * as THREE from 'three';

let scene: any, camera: any, renderer: any, cube: any;

const About = () => {
    function animate() {
        requestAnimationFrame( animate );

        // cube.rotation.x -= 0.01;
        cube.rotation.y += 0.02;

        renderer.render( scene, camera );
    }

    useEffect(() => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.4, 1000 );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        animate();

    }, []);

    return (
        <div className="App">
            <header className="App-header">
                About me
            </header>
        </div>
    );
};

export default About;