---
layout: image-right
image: /img/mesh_soft.png
backgroundSize: 95% 75%
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
image: /img/triangulation.png
backgroundSize: 95% 70%
level: 2
---

# Definitions

* What is a mesh?
* Definitions

  - Vertex, 
  - Edge, 
  - Face, 
  - Element
* Nodes
  - ⚠️ Node != Vertex ⚠️
  - 💡 Node == geom entity attached to DOF 💡

---
layout: image-right
image: /img/mesh-definitions.png
backgroundSize: 95% 70%
level: 2
---

# Definitions

* What is a mesh?
* Definitions

  - Vertex, 
  - Edge, 
  - Face, 
  - Element
* Nodes
  - ⚠️ Node != Vertex ⚠️
  - 💡 Node == Entity attached to DOF 💡


---
level: 2
---

<img src="/img/periodic_table_of_the_finite_elements.png" />


---
layout: image-right
image: img/ex-grid.png
backgroundSize: 95% 70%
level: 2
---

# Mesh Taxonomy

- **Structured** : grid-like mesh

---
layout: image-right
image: img/ex-unstructured.png
backgroundSize: 95% 70%
level: 2
hideInToc: true
---

# Mesh Taxonomy

- **Structured** : grid-like mesh
- **UnStructured** : eg. triangular/tetrahedral mesh

---
layout: image-right
image: img/mixtemesh.png
backgroundSize: 95% 70%
level: 2
hideInToc: true
---

# Mesh Taxonomy

- **Structured** : grid-like mesh
- **UnStructured** : eg. triangular/tetrahedral mesh
- **Mixte** : combine several type of elements
- **Hybrid** : combine "meshes" of different dimensions


---
layout: image-right
image: img/ex-arm.png
backgroundSize: 95% 70%
level: 2
hideInToc: true
---

# Mesh Taxonomy

- **Structured** : grid-like mesh
- **UnStructured** : eg. triangular/tetrahedral mesh
- **Mixte** : combine several type of elements
- **Hybrid** : combine "meshes" of different dimensions

- **[non]conformal** : vertices are [not] coincidents


---
level: 2
---

# Main Algorithms

- 🔲 Structured Mesh
  - grid-like
  - elevation/rotation ( ⚠️ rotation may lead to **mixte* * mesh )

- 🔗 [UnStructured Mesh (Triangle/Tetrahedron)](https://www.ibisc.univ-evry.fr/~serena/ledoux1.pdf): 
  - QuadTree / Octree
  - Front
  - Delaunay

- 🔗 [UnStructured Mesh (Quad/Hexahedron)](https://www.ibisc.univ-evry.fr/~serena/ledoux2.pdf): 

<!-- notes -->
📓 next slides: ©️  F. Ledoux (CEA)

🎉 Order of magnitude to recall 1 billion tetra per minute 🎉

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

# Mesh in practice

|                  | [<img src="/img/Gmsh.png" width=20>](https://trophime.github.io/gmsh-tuto/)  | [<img src="/img/Salome.jpg" width=20>](https://trophime.github.io/salome-tutorial/) |
| -------------    | ---------------------------------- | -------------------------------------|
| **structured**   | ✅ <code>Transfinite</code>        |   ✅ <code>gmsh</code> <code>netgen</code>  | 
| Quad/Hexa        | ✅ <code>Recombine</code>          |   ✅ <code>gmsh</code> <code>meshgems/hexotic</code> <code>hexablock</code> | 
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

- What is a "good" Mesh?

- Mesh Quality


---
level: 2
hideInToc: true
---

# Mesh Adaptation

- Notion of Distance
- Metric
- Examples

<!-- notes -->
gmsh, salome/meshgems?, salome/homard, salome/mmg 

