# What is PreProcessing?

PreProcessing covers

- 📝 **Creation** - focus on solid modeling
- 📁 **Loading** - load geometry
- ✂️ **Repairing** - prepare geometry for meshing
- 🚀 **Meshing** - the geometry
<br>
<br>

These operations may be

- 📣 Difficult (up to several months)
- ⌛ CPU time and resources consuming 
- ⚠️ Highly depends on chosen numerical models

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->
<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

::right::

```mermaid {theme: 'neutral', scale: 1.0}
graph TD
      A(Geometry <img src='/img/helix-cad.png' />) -->|Repairing/Defeaturing| B(Mesh)
      B -->|Solve| C(PostProcessing <img src='/img/helix-post.png' />)
      C -->|Adapt/Move| B
```

