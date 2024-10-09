// src/types/ModelTypes.ts

import * as THREE from 'three';

export interface MyGLTF {
    nodes: {
      Plane: THREE.Mesh; // or whatever the type is for your mesh
      Plane001: THREE.Mesh;
      Plane002: THREE.Mesh;
      Plane003: THREE.Mesh;
    };
    materials: {
      'Material.003': THREE.Material; // Adjust based on the material types used in your model
    };
  }
  