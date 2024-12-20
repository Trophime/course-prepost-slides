---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: PrePost Processing for Scientific Computing
info: |
  ## Gmsh Tutorial
  PreProcessing

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
hideInToc: true
---

# PrePost Processing for Scientific Computing

Preprocessing

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->


---
layout: two-cols
layoutClass: gap-16
transition: fade-out
src: ./pages/intro.md
hideInToc: true
---

---
transition: slide-up
src: ./pages/goals.md
hideInToc: true
---

---
layout: two-cols
layoutClass: gap-16
level: 2
hideInToc: true
---
# A concrete example

* Fluid Structure problem
* Pre-processing
  * Define geometry
  * Mesh with markers for
    * Surfaces
    * Lines for boundary conditions

* [Reference](https://docs.feelpp.org/toolboxes/latest/fsi/TurekHron/index.html)

::right::
<img src="/img/TurekHronFSIGeometry.png" >
Sketch of the geometry

<img src="/img/gmsh-fsi.png" >
View of the mesh with markers

---
layout: two-cols
layoutClass: gap-16
level: 2
hideInToc: true
---
# A concrete example

* Fluid Structure problem
* Pre-processing
  * Define geometry
  * Mesh with markers for
    * Surfaces
    * Lines for boundary conditions

* [Reference](https://docs.feelpp.org/toolboxes/latest/fsi/TurekHron/index.html)

::right::
<img src="/img/TurekHronFSIGeometry.png" >
Sketch of the geometry

<img src="/img/gmsh-fsi-markers.png" >
Markers


---
layout: two-cols
layoutClass: gap-16
hideInToc: true
---

# Table of contents

<Toc maxDepth="2"></Toc>


---
src: ./pages/cad.md
hide: false
---

---
src: ./pages/mesh.md
hide: false
---


---
src: ./pages/gaya.md
hide: false
---

---
layout: center
class: text-center
hideInToc: true
---

# Learn More

[Documentation](https://trophime.github.io/course.prepost/course-prepost/index.html) · [GitHub](https://github.com/Trophime/course-prepost-slides.git) · [Exercises](https://sli.dev/resources/showcases)

<PoweredBySlidev mt-10 />

