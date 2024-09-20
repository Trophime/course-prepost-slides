---
layout: image-right
image: https://cover.sli.dev
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
add images with logos for software
add references for format

---
layout: image-right
image: https://cover.sli.dev
level: 2
---

# Practical point of view

- Build from scratch
- Build from CAD drawing
- Use an existing  CAD 

note on cad drawing
add example provide by Romain


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

<!--
```md
---
src: ./cover.md
background: https://sli.dev/bar.png // [!code highlight]
class: text-center
---
```
-->

<!-- not supported?
::: tip
The paths are resolved relative to the `snippets` directory. And the names of the deps should be exactly the same as the imported ones in the code.
:::
-->

---
layout: image-right
image: https://cover.sli.dev
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

Practice with [Gmsh](https://trophime.github.io/gmsh-tuto/)

<!--more-->
add image for sketch geometry
add working about orientation- 
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


Practice with [Gmsh](https://trophime.github.io/gmsh-tuto/)

<!--more-->
notes on algo

---
level: 3
---
# Boundary Representation Approach

- A solid is a collection of connected surfaces
- Extend CGS
  - additional operations such as
    - extrusion
    - chamfer
    - ...

- Main ingredients: 
  - NURBS
  - [Constraints]

Practice with [Gmsh](https://trophime.github.io/gmsh-tuto/)

<!--more-->
introduce ruled surface in gmsh
add references to nurbs