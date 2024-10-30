---
level: 1
hideInToc: false
---

# Running a simulation with `feelpp`

* Setup simulation
  * [cfg file](https://docs.feelpp.org/toolboxes/latest/parametrized-simulation-using-cfg-files.html)
  * geometry or mesh file
  * [json model file](https://docs.feelpp.org/toolboxes/latest/modeling-analysis-using-json-files.html)

* Run
  * On bare metal,
  * Within a container,
  * On a remote server (with slurm).

---
level: 2
hideInToc: false
---

# Bare metal

* Install `feelpp` (see this [doc](https://docs.feelpp.org/user/latest/install/index.html) for details)
* Create / Modify setup
  * `file.cfg`
  * `file.json`
  * `file.geo` or `file.msh` (see file.json: )
* Eventually partition the mesh
```bash
feelpp_mesh_partitioner... 
```

* Run
```bash
mpirun -np nodes feelpp_... -config-file file.cfg
```

💡 By default, outputs are stored in `$HOME/feelppdb/...` 💡


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

# Container: remarks

* User by default is `feelpp`
* Mount points: 
    * `-v host:container[:ro]`for docker, `-B host:container[:ro]` for apptainer
    * ⚠️ watch out permissions to export/import results
* X11 forwarding
    * docker:
      * prior to run docker, run `xhost local:root`
      * add `-e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix` to docker run options
      * eventually add `-gpus all -e NVIDIA_DRIVER_CAPABILITIES=all ` (requires nvidia-container)
    * apptainer: eventually use `--nv`(nvidia specific) 
* arm64 setup
    * docker: add `--platform linux/amd64` to run amd64 container on arm64 arch

---
level: 2
hideInToc: false
---

# Remote Server

* Connect to the server
  * Eventually setup `feelp` environment
  * Copy setup files (using `scp` or `rsync`)
* Run
  * interactively: see notes on Bare metal
  * batch mode

⚠️ Using interactive mode may be prohibited on certain server ⚠️

---
level: 3
hideInToc: true
---

# Connect to Remote Server

* Eventually use VPN connection
* ssh setup : `$HOME/.ssh/config`

```bash
Host=server
	Hostname=server.domain.fr
	User=username
	ProxyCommand none
```

* Using ssh gateway (for external host)

```bash
Host=gateway
	Hostname=sshgw.domain.fr
	User=username
	ProxyCommand none

Host *.domain.fr
	ForwardAgent yes
	ForwardX11 yes 
	ProxyCommand ssh -W %h:%p gateway
```

* Run this comand to connect
```bash
ssh [-Y] server
```

---
level: 3
hideInToc: true
---

# Connect to Remote Server

* Create ssh key on your host
* Add ssh key to `$HOME/.ssh/authorized_keys` on gateway and server
* Connect to server without typing your password

---
level: 3
hideInToc: true
---

# Create a slurm batch

* An Lncmi [Electromagnet](https://docs.feelpp.org/toolboxes/latest/thermoelectric/electromagnet/index.html) example

```bash
#!/bin/bash
#SBATCH -J HL-31_H1             # name of the job
#SBATCH -N 1                    # number of nodes
#SBATCH --ntasks-per-node=4     # number of MPI tasks per node
#SBATCH --threads-per-core=1    # no hyperthreading
#SBATCH -t 48:00:00             # walltime
#SBATCH -p public               # partition
##SBATCH --exclusive            # exclusive mode

#SBATCH -o log/%j-HL-31_H1-o.log # standard output
#SBATCH -e log/%j-HL-31_H1-e.log # standard error

export OMP_NUM_THREADS=1
module load hpcx

mpiexec -bind-to core feelpp_toolbox_thermoelectric --config-file HL-31_H1.cfg
```

* setup files can be found [here](https://github.com/Trophime/course.prepost/tree/master/cases/electromagnet)

---
level: 3
hideInToc: true
---

# Launch slurm job

* Run:
  * "interactively": `srun job.slurm`: 
  * "batch mode" (submit job to slurm): `sbatch job.slurm`

💡We recommend to use batch mode in this TP 💡

* Slurm commands to know: 
  * `squeue -u`: show info about your jobs
  * `scancel jobib`: cancel the job with jobid
  * `sinfo`: get informations on ressources

---
level: 1
---

# Basic Post-processing

* Results are stored in `$HOME/feelppdb\...`
* Eventually retreive data from remote server
  * scp 
* Run Paraview in client/server mode
  * localy
  * client/server mode

---
level: 1
hideInToc: true
---

# Run Paraview in client/server mode

* connect to server: `ssh -Y -L 11111:localhost:11111 server`
* on server, run: `pvdataserver`
* on host, run: `pvrenderserver`
* on host, launch `paraview`
  * In `paraview`, use `File>Connect` or the corresponding icon on Toolbar, 
  * `Choose Server Configuration` window appears clic on `Add server`, 
  * Fill information in the window, Enter `configure`, 
  * Choose `Manual` on Startup Type in the newly opened `Edit Server Launch Configuration` window, and Save
  * On `Choose Server Configuration` windows, select `server` and clic on `Connect`
* Now, you can read the data from server, choice your data with `File>open`.

💡 use the exact same version of paraview on host and server 💡
