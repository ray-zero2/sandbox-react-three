import * as THREE from 'three';

const DIRECTIONS: ['x', 'y', 'z'] = ['x', 'y', 'z'];

export default class GlContents {
  public resolution: { width: number, height: number };
  public renderer: THREE.WebGLRenderer | null;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public mesh: THREE.Mesh;
  public directionNumber: number;
  public rotateDirection: 'x' | 'y' | 'z';

  constructor(element: HTMLCanvasElement) {
    console.log('THREE JS CREATE!');
    this.resolution = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.renderer = new THREE.WebGLRenderer({
      canvas: element,
      antialias: true,
      alpha: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.resolution.width, this.resolution.height);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.resolution.width/this.resolution.height, 1, 10000);
    this.camera.position.set(0, 0, 1000);
    this.camera.lookAt(0, 0, 0);
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(400, 400, 400),
      new THREE.MeshNormalMaterial()
    )
    this.scene.add(this.mesh);

    this.directionNumber = 1;
    this.rotateDirection = DIRECTIONS[this.directionNumber];
    this.bind();
  }

  render() {
    this.mesh.rotation[this.rotateDirection] += 0.01;
    this.renderer!.render(this.scene, this.camera);

    requestAnimationFrame(this.render.bind(this));
  }

  cameraUp() {
    this.camera.position.add(new THREE.Vector3(0, 10, 0));
    this.camera.lookAt(0, 0, 0);
  }

  cameraDown() {
    this.camera.position.add(new THREE.Vector3(0, -10, 0));
    this.camera.lookAt(0, 0, 0);
  }

  changeRotateDirection() {
    this.directionNumber = (this.directionNumber+1) % 3;
    this.rotateDirection = DIRECTIONS[this.directionNumber];
  }

  log(message: string) {
    console.log(message);
  }

  bind() {
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      this.resolution = {width, height};
      this.renderer?.setSize(width, height);
      this.camera.aspect = width/height;
      this.camera.updateProjectionMatrix();
    })
  }
}
