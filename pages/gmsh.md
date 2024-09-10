# Gmsh

Gmsh is supported by add tetker

```python
import gmsh
```

```gmsh
SetFactory("Built-in");

lc = 0.1;
dx = 1;
dy = 1;
dz = 1;

// create square
Point(1) = {-dx, -dy, -dz, lc};
Point(2) = {dx, -dy, -dz, lc};
Point(3) = {dx, dy, -dz, lc};
Point(4) = {-dx, dy, -dz, lc};
```
