---
level: 1
hideInToc: false
---

# Running a simulation with `feelpp`

* On bare metal:
* Within a container:
* On a remote server with slurm:

---
level: 2
hideInToc: false
---

# Bare metal

* Install `feelpp`
* Setup simulation
  * cfg file
  * geometry or mesh file
  * json model file
* Run

---
level: 2
hideInToc: false
---

# Container

|                            | [<img src="/img/docker-4096.png" width=80>](https://www.docker.com/)  | [<img src="/img/Apptainer_h-logo_clr_XL-894249268.png" width=80>](https://apptainer.org/)  |
| -------------              | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------|
| image                      | <code>ghcr.io/feelpp/feelpp:noble</code>                              | <code>ghcr.io/feelpp/feelpp:v0.111.0-preview.10-noble-sif</code>                           | 
| get image                  | <code>docker pull ...</code>                                          | <code>apptainer pull -F feelpp.sif oras://...</code>                                       | 
| run                        | <code>docker run --rm -it -v $HOME/feel:/feel ...</code>              | <code>apptainer shell feelpp.sif</code>                                                    | 
| run `feelpp_toolbox_fluid` | <code>docker run --rm -it -v $HOME/feel:/feel ... feelpp_toolbox_fluid --version </code>              | <code>apptainer run feelpp.sif feelpp_toolbox_fluid --version</code>                       | 

---
level: 2
hideInToc: false
---

# Container

* remarks
  * user by default
  * mount points
  * X11 forwarding

---
level: 2
hideInToc: false
---

# Remote Server

* Connect to the server
  * Eventually setup `feelp` environment
  * Copy or Create setup files
* Run
  * interactively
  * batch mode


---
level: 3
hideInToc: true
---

# Connect to Remote Server

* pre-requisite setup
  * eventually use VPN connection
  * ssh setup
    * ssh config
    * using gateway
* move data to remote server
  * using scp

---
level: 3
hideInToc: true
---

# Create a slurm batch

* example

---
level: 3
hideInToc: true
---

# Launch slurm job

* kljjkjl

---
level: 1
---

# Basic Post-processing

* Get data from remote server
  * scp 
* Run Paraview in client/server mode
  * procedure
