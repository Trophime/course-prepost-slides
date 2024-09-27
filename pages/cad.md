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
  - [STEP](https://en.wikipedia.org/wiki/ISO_10303), **Standard for the Exchange of Product Model data**
  - [Brep](https://dev.opencascade.org/doc/occt-6.7.0/overview/html/occt_brep_format.html), Open CASCADE Technology
  - [STL](https://en.wikipedia.org/wiki/STL_(file_format)), unstructured triangulated surface

<!--add references for format -->

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

- Practice with:
  - [<img src="/img/Gmsh.png" width=30 height=30/>](https://trophime.github.io/gmsh-tuto/) 


---
layout: image-right
image: /img/Csg_tree.png
backgroundSize: 90% 70%
level: 3
---
# CSG Approach

- Combine simple objects
- Use Perform boolean operations 
  - Union
  - Difference
  - Intersection
- Use Geometric Transformations
  - Rotation/Translation
  - ...


- Practice with:
  -  [<img src="/img/Gmsh.png" width=30 height=30/>](https://trophime.github.io/gmsh-tuto/) 
  -  [<img src="/img/Salome.jpg" width=30 height=30/>](https://trophime.github.io/salome-tutorial/)

<!--References: Algo: wikipedia ?? -->

---
layout: image-right
image: /img/occt-bottle.png
backgroundSize: 90% 70%
level: 3
---
# Boundary Representation Approach

- A solid == collection of connected surfaces (NURBS)
- Extend CSG: additional operations
  - extrusion, 
  - chamfer, fillet, 
  - ...

- Practice with:
  -  [<img src="/img/Gmsh.png" width=30 height=30/>](https://trophime.github.io/gmsh-tuto/) 
  -  [<img src="/img/Salome.jpg" width=30 height=30/>](https://trophime.github.io/salome-tutorial/)


<!-- Constraints -->
<!-- References: - Nurbs, - Gmsh: use ruled surface -->
