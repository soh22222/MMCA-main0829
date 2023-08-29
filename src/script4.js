import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

THREE.ColorManagement.enabled = false

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()


/**
 * Particles
 */
// Geometry

const particlesGeometry2 = new THREE.BufferGeometry()
const particlesMaterial = new THREE.PointsMaterial()
particlesMaterial.size = 0.002
particlesMaterial.sizeAttenuation = true

const particles = new THREE.Points(particlesGeometry2, particlesMaterial)
const count = 50

const positions = new Float32Array(count * 3) // Multiply by 3 because each position is composed of 3 values (x, y, z)

for(let i = 0; i < count * 3; i++) // Multiply by 3 for same reason
{
    positions[i] = (Math.random() - 0.5) * 10 // Math.random() - 0.5 to have a random value between -0.5 and +0.5
}

particlesGeometry2.setAttribute('position', new THREE.BufferAttribute(positions, 3)) // Create the Three.js BufferAttribute and specify that each information is composed of 3 values

scene.add(particles)