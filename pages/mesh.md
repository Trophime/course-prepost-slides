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
hideInToc: true
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
layout: image-right
image: /img/mesh-definitions.png
backgroundSize: 95% 70%
level: 2
hideInToc: true
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
hideInToc: true
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
image: img/mesh_refinement.png
backgroundSize: 95% 70%
level: 2
hideInToc: true
---

# Mesh Taxonomy

- **Structured** : grid-like mesh
- **UnStructured** : eg. triangular/tetrahedral mesh
- **Mixte** : combine several type of elements
- **Hybrid** : combine "meshes" of different dimensions

- **Conformal** : vertices are coincidents

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

- **Non-Conformal** : vertices are not coincidents
  - hanging nodes: [deal.II](https://dealii.org/developer/doxygen/deal.II/code_gallery_advection_reaction_estimator.html)
  - mortar elements: [freefem++](https://doc.freefem.org/introduction/index.html)


---
level: 2
---

# Main Algorithms

- 🔲 Structured Mesh
  - grid-like
  - elevation/rotation ( ⚠️ rotation may lead to **mixte** mesh )

- 🔗 [UnStructured Mesh (Triangle/Tetrahedron)](https://www.ibisc.univ-evry.fr/~serena/ledoux1.pdf): 
  - QuadTree / Octree
  - Front
  - [Delaunay](https://annabellecollin.perso.math.cnrs.fr/teaching/Courses/Maillage/Cours.pdf)

- 🔗 [UnStructured Mesh (Quad/Hexahedron)](https://www.ibisc.univ-evry.fr/~serena/ledoux2.pdf): 

<!-- notes -->
📓 next slides: ©️  F. Ledoux (CEA), ©️  A. Collin (Enseirb-Matmeca)

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
layout: image-right
image: img/gmsh-bunny.png
backgroundSize: 95% 70%
level: 2
---

# Mesh Adaptation

* What is a "good" Mesh?
  * depends on purpose

* Scientific Computing context
  * "good" solution

---
layout: image-right
image: img/Lshape.png
hideInToc: true
backgroundSize: 95% 70%
level: 2
---

# Mesh Adaptation

* What is a "good" Mesh?
  * depends on purpose

* Scientific Computing context
  * "good" solution

---
level: 2
hideInToc: true
---

# Mesh Quality

<img src="/img/gmsh-xao-hxt.png" />

* several criteria
  * 

---
level: 2
hideInToc: true
---

# Mesh Adaptation (from A. Collin)

* Finite Element Dsicretization error 
* Adapt mesh to minimize and/or control this error
* Find **a posteriori** error estimates using approximate solutions to perform mesh adaptation in practice
  * 2 Strategies : 
    * Refine mesh uniformely until a solution independant of the mesh is found : 
      - high computationnal cost
    * Search for a "non-uniform" mesh : 
      * Localy refine mesh where error exceed a threshold
        - "coarse" mesh where the solution is slowly changing
      * Anisotropic Mesh Adaptation: 
        - account for principal direction of the solution changes

---
level: 2
hideInToc: true
---

# Mesh Adaptation (from A. Collin)

* Problem : Find $u \in V$ such that $a(u, v) = l(v), \forall v \in  V$.
*  **a priori** error:  $\|u-P_{h}u\|_{H^{1}}=\left(\sum_{T\in\mathcal{T}}\|u-P_{h}u\|_{H^{1}}^{2}\right)^{\frac{1}{2}}$
* For Finite Element of degree $k$:

$$\|u-P_{h}u\|_{L^{2}}\leq C h^{k+1}|u|_{H^{k+1}}$$
$$\|u-P_{h}u\|_{H^{1}}\leq C h^{k}|u|_{H^{k+1}}$$

with $h$ the "mesh size", and $C$ a constant independant of $h$.

* Interpolation error on each element:

$$\|u-P_{h}u\|_{\infty,T}\leq C_{d}\operatorname*{max}_{(x\in T)}\operatorname*{max}_{e\in {Edges}_{T}}\langle\vec{e}, \mathbf{H}_u(\mathbf{x}) \vec{e}\rangle$$

with $\mathbf{H}_u(\mathbf{x})$ the Hessian matrix

---
level: 2
hideInToc: true
---

# Mesh Adaptation (from A. Collin)

In practice, Hessian matrix is not known

* Suppose that for each $T$, we have an Metric tensor $M(T)$ such that:
$$\operatorname*{max}_{x\in T}\langle\vec{\mathbf{e}},|H_{u}(x)|\vec{\mathbf{e}}\rangle\leq\langle\vec{\mathbf{e}},M(T)\vec{\mathbf{e}}\rangle,\,\forall\vec{\mathbf{e}}\in E_{T}$$

* Interpolation error estimate: $\varepsilon_{T}=C_{d}\operatorname*{max}_{\vec{e}\in E_{T}}\langle\vec{e},M(T)\vec{e}\rangle$
  * $\varepsilon_{T}$ is proportional to the longest edge of $K$ in metric $M(K)$.

---
level: 2
hideInToc: true
---

# Mesh Adaptation (from A. Collin)

* Geometric interpretation of Metric Tensor from C. Daversin (see also freefem)
  * Set of quantities that define **geometric properties** of a space
  * Unit ball of $\mathcal{M}$ : $\mathcal{B}_{\mathcal{M}}(\mathbf{a}) = \left \{ \mathbf{x} \in \mathcal{V}(\mathbf{a}) ~\mid ~\parallel \mathbf{x} - \mathbf{a} \parallel_{\mathcal{M}} = 1 \right \}$ 
  * Axes aligned to eigenvectors of $\mathcal{M}$
  * Size in direction $\mathbf{v}_i$ : $h_i = 1/\sqrt{\lambda_i}$

<img src="/img/unit_ball_tensor.png" />

---
level: 2
layout: image-right
image: img/temperature_bitter_aniso_it3.png
backgroundSize: 67% 42%
hideInToc: true
---

# Example

* non-linear ThermoElectric model
  * feelpp using gmsh plugin

<img src="/img/temperature_bitter_aniso_it0.png" width=600 />

<!-- notes
gmsh, salome/meshgems?, salome/homard, salome/mmg 
-->

---
level: 2
hideInToc: false
---

# Moving / Deformable Mesh

* Naive approach:
  * Update mesh vertices coordinates
  * Check Mesh

* Advanced approach:
  * Solve an extra PDE (eg. linear elasticity)
  * Remeshing step
  * Interpolation

  * ex: ALE, LevelSet
  * see Frey, Georges Chapter 23
  * see [mmg](https://www.mmgtools.org/mmg-remesher-try-mmg/mmg-remesher-tutorials/mmg-remesher-mmg2d/lagrangian-motion)
