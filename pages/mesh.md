---
layout: image-right
image: /img/mesh_soft.png
backgroundSize: 100% 75%
---
# Meshing

Covers:
- Mesh Generation
- Adapt Mesh
- Moving Mesh

Ecosystem:
- Software
- Formats: msh (Gmsh), med (Salome), ...
  

<!--more-->
⚠️ Mesh highly depends on:
 - numerical method used
 - the problem to be solved

---
layout: image-right
image: https://cover.sli.dev
level: 2
---

# Definitions

* What is a mesh?
* Definitions
  - Vertex, 
  - Edge, 
  - Face, 
  -Element
* Nodes

<!-- notes -->
Euler Poincare

---
level: 2
---

<img src="/img/periodic_table_of_the_finite_elements.png" />


---
layout: image-right
image: https://cover.sli.dev
level: 2
---

# Mesh Taxonomy

- **Structured** : grid-like mesh
- **UnStructured** : triangular/tetrahedral mesh
- **Mixte** : combine several type of elements
- **Hybrid** : combine "meshes" of different dimensions

---
level: 2
---

# Main Algorithms

- 🔲 Structured Mesh
- 🔗 [UnStructured Mesh](https://www.ibisc.univ-evry.fr/~serena/ledoux1.pdf): 
  - QuadTree / Octree
  - Front
  - Delaunay

<!-- notes -->
📓 next slides: ©️  F. Ledoux (CEA)

---
layout: iframe

# the web page source
url: https://www.ibisc.univ-evry.fr/~serena/ledoux1.pdf
---

<!---
note from <img src="/img/ledoux1/pg_0008.pdf.png" scale='80' />
to <img src="/img/ledoux1/pg_0055.pdf.png" scale='80' />
-->


---
level: 2
mdc: true
---

# Mesh in practise

|                  | <img src="/img/Gmsh.png" width=20> | <img src="/img/Salome.jpg" width=20> |
| -------------    | ---------------------------------- | -------------------------------------|
| **structured**   | ✅ <code>Transfinite</code>        |   ✅ <code>gmsh</code> <code>netgen</code>  | 
| Quad/Hexa        | ✅ <code>Recombine</code>          |   ✅ <code>gmsh</code> <code>meshgems hexotic</code>  | 
| **unstructured** |                                    |                                      |
| QuadTree/Octree  | 🔴                                 |   🔴                                   |
| Frontal          | ✅ <code>Frontal-Delaunay</code>   |   ✅ <code>gmsh</code> <code>meshgems</code> <code>netgen</code>            |
| Delaunay         | ✅ <code>Delaunay</code>           |   ✅ <code>gmsh</code> <code>meshgems</code> <code>netgen</code>             |


* 👷 Structured mesh requires that geometry is splitted in Quadrangle / Hexahedral patches
* ⚠️ MeshGems plugin requires a valid licence

<!-- https://chi-tech.github.io/d4/db9/_gmsh_example_01.html example for gmsh -->

---
level: 2
---

# Mesh Adaptation

- Notion of Distance
- Metric
- Examples

<!-- notes -->
from gmsh and mmg 

