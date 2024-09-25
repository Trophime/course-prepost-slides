---
layout: image-right
image: /img/cad_soft.png
backgroundSize: 100% 70%
---


# Solid Modeling

Covers:
- Creation of Geometry
- Load a Geometry
- Repair/Transform a Geometry

Ecosystem:
- Software
  - commercial
  - opensource
- Formats:
  - STEP
  - Brep
  - STL 

<!--more-->
add references for format

---
layout: image-right
image: /img/cad_drawing.png
backgroundSize: 100% 60%
level: 2
---

# Practical point of view

- Build from scratch
- Build from CAD drawing
- Use an existing  CAD 



---
layout: image-right
image: https://cover.sli.dev
level: 2
outline: deep
---

# Main Approaches

- Bottom-up,
- Constructive Solid Geometry,
- Boundary representation


---
layout: image-right
image: /img/orientation.png
backgroundSize: 100% 70%
level: 3
---

# Bottom-Up Approach

- Create Points,
- Create Curves,
- Define Surfaces:
  - Curve Loops,
  - Rotation, Translation
- Define Volumes:
  - Surfaces Loops

- Practice with [Gmsh](https://trophime.github.io/gmsh-tuto/) <!-- <img src="/Gmsh.png" /> -->


---
layout: image-right
image: /img/Csg_tree.png
backgroundSize: 90% 70%
level: 3
---
# CGS Approach

- Combine simple objects
- Use Perform boolean operations 
  - Union
  - Difference
  - Intersection


- Practice with:
  -  [<img src="/img/Gmsh.png" width=30 height=30/>](https://trophime.github.io/gmsh-tuto/) 
  -  [<img src="/img/Salome.jpg" width=30 height=30/>](https://trophime.github.io/salome-tutorial/)

<!--more-->
- References:
  - Algo: wikipedia

---
level: 3
---
# Boundary Representation Approach

- A solid == collection of connected surfaces (NURBS)
- Extend CGS: additional operations such as extrusion, chamfer, ...
- [Constraints]

- Practice with:
  -  [<img src="/img/Gmsh.png" width=30 height=30/>](https://trophime.github.io/gmsh-tuto/) 
  -  [<img src="/img/Salome.jpg" width=30 height=30/>](https://trophime.github.io/salome-tutorial/)


<!--more-->
- References:
  - Nurbs
  - Gmsh: use ruled surface
